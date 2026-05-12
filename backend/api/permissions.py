from rest_framework.permissions import BasePermission


class IsTeacher(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and
                    getattr(request.user, 'role', None) == 'teacher')


class IsDirector(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and
                    getattr(request.user, 'role', None) == 'director')


class IsTeacherOrDirector(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and
                    getattr(request.user, 'role', None) in ('teacher', 'director'))


class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and
                    getattr(request.user, 'role', None) == 'student')
