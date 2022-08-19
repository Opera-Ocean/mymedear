from django.contrib.auth import get_user_model, login
from rest_framework import (
	permissions,
	viewsets
	)
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

from .serializers import UserSerializer
from .permissions import (
	ReadOnly,
	IsOwnerOrReadOnly
)

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	permission_classes = [ReadOnly, IsOwnerOrReadOnly]


class LoginAPI(KnoxLoginView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        username = request.data['username']
        if '@' in username:
            serializer = AuthTokenSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            login(request, user)
            return super(LoginAPI, self).post(request, format=None)
        else:
            return Response({"non_field_errors":["unable to log in with provided credentials"]})

