from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check),
    # Auth
    path('auth/register/', views.register),
    path('auth/login/', views.login_view),
    # Student
    path('submissions/mine/', views.my_submissions),
    path('submissions/', views.submit_work),
    # Teacher
    path('submissions/all/', views.all_submissions),
    path('submissions/<int:submission_id>/grade/', views.grade_submission),
    path('stats/', views.dashboard_stats),
    # Custom tasks
    path('custom-tasks/', views.list_custom_tasks),
    path('custom-tasks/create/', views.create_custom_task),
    path('custom-tasks/<int:task_id>/delete/', views.delete_custom_task),
    # Leaderboard
    path('leaderboard/', views.leaderboard),
    # Director
    path('users/', views.list_users),
    path('users/<int:user_id>/toggle/', views.toggle_user),
    path('users/<int:user_id>/delete/', views.delete_user),
]
