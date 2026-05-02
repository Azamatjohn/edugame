"""
Custom JWT backend that puts `role` and `student_id` into the token payload,
and creates a lightweight user-like object from the token during authentication.
"""
from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError


class VirtualUser:
    """
    A lightweight object that mimics Django's User model just enough for
    DRF's permission checks to work — without requiring a DB row in auth_user.
    """
    is_authenticated = True
    is_anonymous = False

    def __init__(self, payload):
        self.id = payload.get('user_id')
        self.role = payload.get('role')
        self.name = payload.get('name', '')
        self.student_class = payload.get('student_class', '')
        self.student_id = payload.get('student_id')


class EduGameJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        return VirtualUser(validated_token)


def get_student_token(student):
    """Issue a JWT for a student. Embeds role + identity into the payload."""
    token = RefreshToken()
    token['role'] = 'student'
    token['user_id'] = student.id
    token['student_id'] = student.id
    token['name'] = student.name
    token['student_class'] = student.student_class
    return {
        'access': str(token.access_token),
        'refresh': str(token),
        'role': 'student',
        'name': student.name,
        'student_class': student.student_class,
    }


def get_teacher_token():
    """Issue a JWT for the teacher. No DB row needed."""
    token = RefreshToken()
    token['role'] = 'teacher'
    token['user_id'] = 0
    token['name'] = "O'qituvchi"
    return {
        'access': str(token.access_token),
        'refresh': str(token),
        'role': 'teacher',
        'name': "O'qituvchi",
    }
