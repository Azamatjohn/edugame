from django.db import models
from django.contrib.auth.hashers import make_password, check_password as django_check_password


class User(models.Model):
    ROLE_STUDENT = 'student'
    ROLE_TEACHER = 'teacher'
    ROLE_DIRECTOR = 'director'
    ROLE_CHOICES = [
        (ROLE_STUDENT, 'Student'),
        (ROLE_TEACHER, 'Teacher'),
        (ROLE_DIRECTOR, 'Director'),
    ]

    full_name = models.CharField(max_length=200)
    login = models.CharField(max_length=100, unique=True)
    password_hash = models.CharField(max_length=256)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default=ROLE_STUDENT)
    student_class = models.CharField(max_length=100, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['full_name']

    def __str__(self):
        return f"{self.full_name} ({self.role})"

    def set_password(self, raw_password):
        self.password_hash = make_password(raw_password)

    def check_password(self, raw_password):
        return django_check_password(raw_password, self.password_hash)


class Submission(models.Model):
    STATUS_PENDING = 'pending'
    STATUS_GRADED = 'graded'
    STATUS_CHOICES = [
        (STATUS_PENDING, 'Pending'),
        (STATUS_GRADED, 'Graded'),
    ]

    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submissions')
    method_id = models.CharField(max_length=100)
    answers = models.JSONField(default=dict)
    auto_score = models.IntegerField(default=0)
    stars = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING)
    grade = models.CharField(max_length=10, blank=True, default='')
    comment = models.TextField(blank=True, default='')
    submitted_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('student', 'method_id')
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.student} — {self.method_id} [{self.status}]"


class CustomTask(models.Model):
    method_id = models.CharField(max_length=100)
    task_data = models.JSONField()
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='custom_tasks')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"CustomTask for {self.method_id}"
