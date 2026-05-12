from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication


class VirtualUser:
    is_authenticated = True
    is_anonymous = False

    def __init__(self, payload):
        self.id = payload.get('user_id')
        self.role = payload.get('role')
        self.full_name = payload.get('full_name', '')
        self.student_class = payload.get('student_class', '')
        self.login = payload.get('login', '')


class EduGameJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        return VirtualUser(validated_token)


def get_token(user):
    token = RefreshToken()
    token['role'] = user.role
    token['user_id'] = user.id
    token['full_name'] = user.full_name
    token['student_class'] = user.student_class
    token['login'] = user.login
    return {
        'access': str(token.access_token),
        'refresh': str(token),
        'role': user.role,
        'full_name': user.full_name,
        'student_class': user.student_class,
        'user_id': user.id,
    }
