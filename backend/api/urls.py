from django.urls import path
from . import views

urlpatterns = [
    # ── Auth ──────────────────────────────────────────────
    path('auth/student/login/',  views.student_login,  name='student-login'),
    path('auth/teacher/login/',  views.teacher_login,  name='teacher-login'),

    # ── Student endpoints ──────────────────────────────────
    path('submissions/mine/',    views.my_submissions,  name='my-submissions'),
    path('submissions/',         views.submit_work,     name='submit-work'),   # POST

    # ── Teacher endpoints ──────────────────────────────────
    path('students/',            views.list_students,   name='list-students'),
    path('submissions/all/',     views.all_submissions, name='all-submissions'),
    path('submissions/<int:submission_id>/grade/', views.grade_submission, name='grade-submission'),
    path('stats/',               views.dashboard_stats, name='dashboard-stats'),

    # ── Custom tasks ───────────────────────────────────────
    path('custom-tasks/',                          views.list_custom_tasks,  name='list-custom-tasks'),
    path('custom-tasks/create/',                   views.create_custom_task, name='create-custom-task'),
    path('custom-tasks/<int:task_id>/delete/',     views.delete_custom_task, name='delete-custom-task'),

    # ── Leaderboard ────────────────────────────────────────
    path('leaderboard/',         views.leaderboard,     name='leaderboard'),
    #-Health-
    path('health/', views.health_check, name='health-check'),
]
