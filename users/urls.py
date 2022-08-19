from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

from .views import (
	LoginAPI,
	UserViewSet
	)

router = routers.DefaultRouter()
router.register('', UserViewSet)


urlpatterns = [
	path('auth/login/', LoginAPI.as_view(), name='login'),
    path('auth/logout/', knox_views.LogoutView.as_view(), name='logout')
] + router.urls


"""
	{
		"username": "admin@mymedear.com",
		"password": "MyMeDearAdmin123"
	}
"""

