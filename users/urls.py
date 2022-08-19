from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

from .views import (
	UserLoginAPI,
	UserSignUpAPI,
	UserViewSet
	)

router = routers.DefaultRouter()
router.register('', UserViewSet)


urlpatterns = [
	path('signup/', UserSignUpAPI.as_view(), name='signup'),
	path('login/', UserLoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout')
] + router.urls


"""
	{
		"username": "admin@mymedear.com",
		"password": "MyMeDearAdmin123"
	}
"""

