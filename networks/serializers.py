from rest_framework import serializers

from .models import Network, UserNetwork


class UserNetworkSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(default=serializers.CurrentUserDefault(), read_only=True)
	network = serializers.SlugRelatedField(
        queryset=Network.objects.all(),
        slug_field='name'
		)

	# def get_network(self, obj):
	# 	return UserNetwork.objects.get(network=network.id)

	class Meta:
		model = UserNetwork
		fields = ['user', 'network', 'url', 'name', 'html']

