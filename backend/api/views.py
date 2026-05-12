import traceback
import logging
from django.db.models import Count
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .auth_backends import get_token
from .models import CustomTask, Submission, User
from .permissions import IsDirector, IsStudent, IsTeacher, IsTeacherOrDirector
from .serializers import (
    CustomTaskSerializer, GradeSerializer, LoginSerializer,
    RegisterSerializer, SubmissionCreateSerializer, SubmissionSerializer,
    UserSerializer,
)

logger = logging.getLogger(__name__)


# ── Health ────────────────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return Response({'status': 'ok'})


# ── Auth ──────────────────────────────────────────────────────────────────────
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    d = serializer.validated_data
    user = User(
        full_name=d['full_name'],
        login=d['login'],
        role=d['role'],
        student_class=d.get('student_class', ''),
    )
    user.set_password(d['password'])
    user.save()
    return Response(get_token(user), status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(login=serializer.validated_data['login'])
    except User.DoesNotExist:
        return Response({'detail': 'Login yoki parol noto\'g\'ri.'}, status=status.HTTP_401_UNAUTHORIZED)

    if not user.is_active:
        return Response({'detail': 'Hisobingiz bloklangan.'}, status=status.HTTP_403_FORBIDDEN)

    if not user.check_password(serializer.validated_data['password']):
        return Response({'detail': 'Login yoki parol noto\'g\'ri.'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response(get_token(user))


# ── Student endpoints ─────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([IsStudent])
def my_submissions(request):
    subs = Submission.objects.filter(student_id=request.user.id)
    return Response(SubmissionSerializer(subs, many=True).data)


@api_view(['POST'])
@permission_classes([IsStudent])
def submit_work(request):
    serializer = SubmissionCreateSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    method_id = serializer.validated_data['method_id']
    existing = Submission.objects.filter(student_id=request.user.id, method_id=method_id).first()

    if existing:
        existing.answers = serializer.validated_data['answers']
        existing.auto_score = serializer.validated_data['auto_score']
        existing.stars = serializer.validated_data.get('stars', 0)
        if existing.status != Submission.STATUS_GRADED:
            existing.status = Submission.STATUS_PENDING
        existing.save()
        return Response(SubmissionSerializer(existing).data)

    student = User.objects.get(pk=request.user.id)
    sub = Submission.objects.create(
        student=student,
        method_id=method_id,
        answers=serializer.validated_data['answers'],
        auto_score=serializer.validated_data['auto_score'],
        stars=serializer.validated_data.get('stars', 0),
    )
    return Response(SubmissionSerializer(sub).data, status=status.HTTP_201_CREATED)


# ── Teacher endpoints ─────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([IsTeacherOrDirector])
def all_submissions(request):
    subs = Submission.objects.select_related('student').all()
    status_filter = request.GET.get('status')
    if status_filter in ('pending', 'graded'):
        subs = subs.filter(status=status_filter)
    q = request.GET.get('q', '').strip()
    if q:
        subs = subs.filter(student__full_name__icontains=q) | subs.filter(method_id__icontains=q)
    return Response(SubmissionSerializer(subs, many=True).data)


@api_view(['PATCH'])
@permission_classes([IsTeacher])
def grade_submission(request, submission_id):
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


@api_view(['GET'])
@permission_classes([IsTeacherOrDirector])
def dashboard_stats(request):
    total_students = User.objects.filter(role='student').count()
    total_submissions = Submission.objects.count()
    pending = Submission.objects.filter(status='pending').count()
    graded = Submission.objects.filter(status='graded').count()
    method_counts = (
        Submission.objects.values('method_id')
        .annotate(count=Count('id'))
        .order_by('-count')
    )
    recent = Submission.objects.select_related('student').order_by('-submitted_at')[:5]
    return Response({
        'total_students': total_students,
        'total_submissions': total_submissions,
        'pending': pending,
        'graded': graded,
        'method_counts': list(method_counts),
        'recent_submissions': SubmissionSerializer(recent, many=True).data,
    })


# ── Custom tasks ──────────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_custom_tasks(request):
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
    task = serializer.save(created_by_id=request.user.id)
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


# ── Leaderboard ───────────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def leaderboard(request):
    students = User.objects.filter(role='student').prefetch_related('submissions')
    board = []
    for student in students:
        subs = student.submissions.all()
        total_stars = sum(s.stars for s in subs)
        xp = sum(20 + s.auto_score * 10 + total_stars for s in subs)
        if subs.count() > 0:
            board.append({
                'full_name': student.full_name,
                'student_class': student.student_class,
                'xp': xp,
                'stars': total_stars,
                'works': subs.count(),
            })
    board.sort(key=lambda x: x['xp'], reverse=True)
    return Response(board[:20])


# ── Director endpoints ────────────────────────────────────────────────────────
@api_view(['GET'])
@permission_classes([IsDirector])
def list_users(request):
    role = request.GET.get('role')
    users = User.objects.all()
    if role:
        users = users.filter(role=role)
    return Response(UserSerializer(users, many=True).data)


@api_view(['PATCH'])
@permission_classes([IsDirector])
def toggle_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'detail': 'Foydalanuvchi topilmadi.'}, status=status.HTTP_404_NOT_FOUND)
    user.is_active = not user.is_active
    user.save()
    return Response(UserSerializer(user).data)


@api_view(['DELETE'])
@permission_classes([IsDirector])
def delete_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'detail': 'Foydalanuvchi topilmadi.'}, status=status.HTTP_404_NOT_FOUND)
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
