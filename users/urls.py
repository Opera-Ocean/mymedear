from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

from .views import (
	UserLoginAPI,
	UserSignUpAPI,
	UserList,
	UserDetailAPIView
	)
from networks.views import (
	UserNetworkViewSet,
	PublicNetworkView
	)

router = routers.DefaultRouter()
router.register('', UserNetworkViewSet, basename='user_network')
# router.register('public', PublicNetworkViewSet, basename='user_public_network')


urlpatterns = [
	path('public/', PublicNetworkView.as_view(), name='public'),
	path('signup/', UserSignUpAPI.as_view(), name='signup'),
	path('login/', UserLoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('users/', UserList.as_view(), name='users'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user-detail')
] + router.urls



"""
	{
		"username": "admin@mymedear.com",
		"password": "MyMeDearAdmin123"
	}

"""

