from rest_framework import (
	generics,
	viewsets, 
	permissions
	)

from .models import UserNetwork
from .serializers import (
	UserNetworkSerializer,
	PublicNetworkSerializer
	)


class UserNetworkViewSet(viewsets.ModelViewSet):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = UserNetworkSerializer

	def get_queryset(self):
		user = UserNetwork.objects.filter(user=self.request.user)
		return user

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)


class PublicNetworkView(generics.ListAPIView):
	queryset = UserNetwork.objects.all()
	permission_classes = [permissions.AllowAny]
	serializer_class = PublicNetworkSerializer

	# def get_queryset(self):
	# 	user = UserNetwork.objects.filter(user)  // the owner of the profile
	# 	return user
