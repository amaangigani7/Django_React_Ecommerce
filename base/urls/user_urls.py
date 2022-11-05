from django.urls import path
from base.views import user_views as views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    # path('users/login/', TokenObtainPairView.as_view(), name='login'),
    path("login/", views.MyTokenObtainPairView.as_view(), name="login"),
    path("register/", views.register_user, name="register"),
    path("", views.get_users, name="get_users"),
    path("profile/", views.get_user_profile, name="get_user_profile"),
    path("profile/update/", views.update_user_profile, name="update_user_profile"),
    path('<str:pk>/', views.getUserById, name='user'),
    path('update/<str:pk>/', views.updateUser, name='user-update'),
    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),
]