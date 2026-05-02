from rest_framework import serializers
from .models import Student, Submission, CustomTask


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'student_class', 'created_at']


class SubmissionSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.name', read_only=True)
    student_class = serializers.CharField(source='student.student_class', read_only=True)
    submitted_at = serializers.DateTimeField(format='%d.%m.%Y %H:%M', read_only=True)

    class Meta:
        model = Submission
        fields = [
            'id', 'method_id',
            'student_name', 'student_class',
            'answers', 'auto_score',
            'status', 'grade', 'comment',
            'submitted_at',
        ]
        read_only_fields = ['id', 'submitted_at', 'student_name', 'student_class']


class SubmissionCreateSerializer(serializers.Serializer):
    """Used when a student submits answers."""
    method_id = serializers.CharField(max_length=100)
    answers = serializers.DictField()
    auto_score = serializers.IntegerField(min_value=0)


class GradeSerializer(serializers.Serializer):
    """Used when a teacher grades a submission."""
    grade = serializers.CharField(max_length=10)
    comment = serializers.CharField(allow_blank=True, default='')


class CustomTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomTask
        fields = ['id', 'method_id', 'task_data', 'created_at']
        read_only_fields = ['id', 'created_at']


class StudentLoginSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    student_class = serializers.CharField(max_length=100)


class TeacherLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
