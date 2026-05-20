from rest_framework import serializers
from .models import User, Submission, CustomTask


class RegisterSerializer(serializers.Serializer):
    full_name = serializers.CharField(max_length=200)
    login = serializers.CharField(max_length=100)
    password = serializers.CharField(min_length=4)
    role = serializers.ChoiceField(choices=['student', 'teacher', 'admin'])
    student_class = serializers.CharField(max_length=100, required=False, allow_blank=True, default='')

    def validate_login(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Login kamida 3 ta belgi bo'lishi kerak.")
        if User.objects.filter(login=value).exists():
            raise serializers.ValidationError("Bu login band. Boshqa login tanlang.")
        return value


class LoginSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'full_name', 'login', 'role', 'student_class', 'created_at', 'is_active']


class SubmissionSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.full_name', read_only=True)
    student_class = serializers.CharField(source='student.student_class', read_only=True)
    submitted_at = serializers.DateTimeField(format='%d.%m.%Y %H:%M', read_only=True)

    class Meta:
        model = Submission
        fields = [
            'id', 'method_id',
            'student_name', 'student_class',
            'answers', 'auto_score', 'stars',
            'status', 'grade', 'comment',
            'submitted_at',
        ]
        read_only_fields = ['id', 'submitted_at', 'student_name', 'student_class']


class SubmissionCreateSerializer(serializers.Serializer):
    method_id = serializers.CharField(max_length=100)
    answers = serializers.DictField()
    auto_score = serializers.IntegerField(min_value=0)
    stars = serializers.IntegerField(min_value=0, default=0)


class GradeSerializer(serializers.Serializer):
    grade = serializers.CharField(max_length=10)
    comment = serializers.CharField(allow_blank=True, default='')


class CustomTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomTask
        fields = ['id', 'method_id', 'task_data', 'created_at']
        read_only_fields = ['id', 'created_at']
