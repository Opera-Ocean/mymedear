from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
	country = serializers.CharField()

	class Meta:
		model = User
		fields = ['username', 'country']


class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
    			'username', 
    			'email', 
    			'password'
    			)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
        			validated_data['username'],
        			validated_data['email'],
        			validated_data['password']
        		)
        return user

# class UserProfileSerializer(serializers.ModelSerializer):
