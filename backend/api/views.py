from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .auth_backends import get_student_token, get_teacher_token
from .models import CustomTask, Student, Submission
from .permissions import IsStudent, IsTeacher
from .serializers import (
    CustomTaskSerializer,
    GradeSerializer,
    StudentLoginSerializer,
    StudentSerializer,
    SubmissionCreateSerializer,
    SubmissionSerializer,
    TeacherLoginSerializer,
)


# ── Auth ──────────────────────────────────────────────────────────────────────

@api_view(['POST'])
@permission_classes([AllowAny])
def student_login(request):
    """
    Register-or-login for students.
    Students identify themselves by name + class — no password required.
    Returns a JWT token with role='student' embedded.
    """
    serializer = StudentLoginSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    name = serializer.validated_data['name']
    student_class = serializer.validated_data['student_class']

    student, _ = Student.objects.get_or_create(
        name=name,
        student_class=student_class,
    )

    return Response(get_student_token(student), status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def teacher_login(request):
    """
    Login for the single teacher account.
    Credentials are checked against environment variables — no DB involved.
    """
    serializer = TeacherLoginSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    email = serializer.validated_data['email']
    password = serializer.validated_data['password']

    if email != settings.TEACHER_EMAIL or password != settings.TEACHER_PASSWORD:
        return Response(
            {'detail': 'Login yoki parol xato!'},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    return Response(get_teacher_token(), status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def token_refresh_view(request):
    """Thin wrapper — handled by simplejwt, here just for completeness."""
    from rest_framework_simplejwt.views import TokenRefreshView
    return TokenRefreshView.as_view()(request._request)


# ── Students (teacher-only) ───────────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([IsTeacher])
def list_students(request):
    students = Student.objects.all()
    return Response(StudentSerializer(students, many=True).data)


# ── Submissions ───────────────────────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([IsStudent])
def my_submissions(request):
    """Return all submissions for the currently logged-in student."""
    student_id = request.user.student_id
    subs = Submission.objects.filter(student_id=student_id)
    return Response(SubmissionSerializer(subs, many=True).data)


@api_view(['POST'])
@permission_classes([IsStudent])
def submit_work(request):
    """
    Create or update a submission for the logged-in student.
    One student can have at most one submission per method (upsert).
    When resubmitting, grade/comment/status are preserved if already graded.
    """
    serializer = SubmissionCreateSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    student_id = request.user.student_id
    method_id = serializer.validated_data['method_id']

    existing = Submission.objects.filter(
        student_id=student_id, method_id=method_id
    ).first()

    if existing:
        existing.answers = serializer.validated_data['answers']
        existing.auto_score = serializer.validated_data['auto_score']
        # Reset to pending only if not yet graded
        if existing.status != Submission.STATUS_GRADED:
            existing.status = Submission.STATUS_PENDING
        existing.save()
        return Response(SubmissionSerializer(existing).data, status=status.HTTP_200_OK)

    student = Student.objects.get(pk=student_id)
    sub = Submission.objects.create(
        student=student,
        method_id=method_id,
        answers=serializer.validated_data['answers'],
        auto_score=serializer.validated_data['auto_score'],
    )
    return Response(SubmissionSerializer(sub).data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsTeacher])
def all_submissions(request):
    """
    Return all submissions. Supports filtering:
      ?status=pending|graded
      ?q=search_term  (matches student name or method_id)
    """
    subs = Submission.objects.select_related('student').all()

    status_filter = request.GET.get('status')
    if status_filter in (Submission.STATUS_PENDING, Submission.STATUS_GRADED):
        subs = subs.filter(status=status_filter)

    q = request.GET.get('q', '').strip()
    if q:
        subs = subs.filter(
            student__name__icontains=q
        ) | subs.filter(
            method_id__icontains=q
        )

    return Response(SubmissionSerializer(subs, many=True).data)


@api_view(['PATCH'])
@permission_classes([IsTeacher])
def grade_submission(request, submission_id):
    """Teacher grades a specific submission."""
    try:
        sub = Submission.objects.get(pk=submission_id)
    except Submission.DoesNotExist:
        return Response({'detail': 'Topshiriq topilmadi.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = GradeSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    sub.grade = serializer.validated_data['grade']
    sub.comment = serializer.validated_data.get('comment', '')
    sub.status = Submission.STATUS_GRADED
    sub.save()

    return Response(SubmissionSerializer(sub).data)


# ── Custom Tasks (teacher CRUD) ───────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_custom_tasks(request):
    """
    Return all custom tasks.
    Both students (to display tasks) and teachers (to manage them) can read.
    Optionally filter: ?method_id=brainstorming
    """
    tasks = CustomTask.objects.all()
    method_id = request.GET.get('method_id')
    if method_id:
        tasks = tasks.filter(method_id=method_id)
    return Response(CustomTaskSerializer(tasks, many=True).data)


@api_view(['POST'])
@permission_classes([IsTeacher])
def create_custom_task(request):
    serializer = CustomTaskSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    task = serializer.save()
    return Response(CustomTaskSerializer(task).data, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([IsTeacher])
def delete_custom_task(request, task_id):
    try:
        task = CustomTask.objects.get(pk=task_id)
    except CustomTask.DoesNotExist:
        return Response({'detail': 'Topshiriq topilmadi.'}, status=status.HTTP_404_NOT_FOUND)
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# ── Stats (teacher dashboard) ─────────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([IsTeacher])
def dashboard_stats(request):
    """Aggregate stats for the teacher dashboard."""
    total_students = Student.objects.count()
    total_submissions = Submission.objects.count()
    pending = Submission.objects.filter(status=Submission.STATUS_PENDING).count()
    graded = Submission.objects.filter(status=Submission.STATUS_GRADED).count()

    # Per-method submission counts
    from django.db.models import Count
    method_counts = (
        Submission.objects.values('method_id')
        .annotate(count=Count('id'))
        .order_by('-count')
    )

    # Recent 5 submissions
    recent = Submission.objects.select_related('student').order_by('-submitted_at')[:5]

    return Response({
        'total_students': total_students,
        'total_submissions': total_submissions,
        'pending': pending,
        'graded': graded,
        'method_counts': list(method_counts),
        'recent_submissions': SubmissionSerializer(recent, many=True).data,
    })


# ── Leaderboard (public within app) ──────────────────────────────────────────

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def leaderboard(request):
    """
    Return top students sorted by XP (computed server-side).
    XP formula mirrors the frontend: 20 base + 10*autoScore + grade/5 + perfect bonus.
    """
    from django.db.models import Sum, Count

    students = Student.objects.prefetch_related('submissions').all()
    board = []

    for student in students:
        subs = student.submissions.all()
        xp = 0
        for sub in subs:
            # Count radio tasks in this submission's answers that were auto-scored
            base_xp = 20
            auto_xp = sub.auto_score * 10
            grade_xp = round(float(sub.grade or 0) / 5) if sub.status == Submission.STATUS_GRADED else 0
            # We don't have radio count server-side, so skip perfect bonus for now
            xp += base_xp + auto_xp + grade_xp

        if xp > 0 or subs.count() > 0:
            board.append({
                'name': student.name,
                'student_class': student.student_class,
                'xp': xp,
                'works': subs.count(),
            })

    board.sort(key=lambda x: x['xp'], reverse=True)
    return Response(board[:20])
