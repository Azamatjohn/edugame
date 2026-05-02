from django.db import models


class Student(models.Model):
    """Represents a student user (no password — identified by name + class)."""
    name = models.CharField(max_length=200)
    student_class = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('name', 'student_class')
        ordering = ['name']

    def __str__(self):
        return f"{self.name} ({self.student_class})"


class Submission(models.Model):
    STATUS_PENDING = 'pending'
    STATUS_GRADED = 'graded'
    STATUS_CHOICES = [
        (STATUS_PENDING, 'Pending'),
        (STATUS_GRADED, 'Graded'),
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='submissions')
    method_id = models.CharField(max_length=100)
    answers = models.JSONField(default=dict)
    auto_score = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING)
    grade = models.CharField(max_length=10, blank=True, default='')
    comment = models.TextField(blank=True, default='')
    submitted_at = models.DateTimeField(auto_now=True)

    class Meta:
        # One submission per student per method (upsert logic)
        unique_together = ('student', 'method_id')
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.student} — {self.method_id} [{self.status}]"


class CustomTask(models.Model):
    method_id = models.CharField(max_length=100)
    task_data = models.JSONField()  # Stores the full task object (type, question, options, etc.)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"CustomTask for {self.method_id}"
