from rest_framework.permissions import BasePermission


class IsTeacher(BasePermission):
    """Allow access only to users with role='teacher' in their JWT payload."""
    def has_permission(self, request, view):
        return bool(
            request.user and
            request.user.is_authenticated and
            getattr(request.user, 'role', None) == 'teacher'
        )


class IsStudent(BasePermission):
    """Allow access only to users with role='student' in their JWT payload."""
    def has_permission(self, request, view):
        return bool(
            request.user and
            request.user.is_authenticated and
            getattr(request.user, 'role', None) == 'student'
        )
