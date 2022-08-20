from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

from .views import (
	UserLoginAPI,
	UserSignUpAPI,
	UserList
	)
from networks.views import UserNetworkViewSet

router = routers.DefaultRouter()
router.register('', UserNetworkViewSet, basename='user_network')


urlpatterns = [
	path('signup/', UserSignUpAPI.as_view(), name='signup'),
	path('login/', UserLoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('users/', UserList.as_view(), name='users')
] + router.urls



"""
	{
		"username": "admin@mymedear.com",
		"password": "MyMeDearAdmin123"
	}
"""

