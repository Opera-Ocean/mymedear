from rest_framework import viewsets, permissions

from .models import UserNetwork
from .serializers import UserNetworkSerializer


class UserNetworkViewSet(viewsets.ModelViewSet):
	permission_classes =[permissions.IsAuthenticated]
	serializer_class = UserNetworkSerializer

	def get_queryset(self):
		user = UserNetwork.objects.filter(user=self.request.user)
		return user

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)
