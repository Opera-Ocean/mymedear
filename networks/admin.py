from django.contrib import admin

from .models import (
	Category,
	Network,
	UserNetwork
)


class NetworkAdmin(admin.ModelAdmin):
	list_display = ['name', 'category']


class UserNetworkAdmin(admin.ModelAdmin):
	list_display = ['user', 'network', 'date_added']


admin.site.register(Category)
admin.site.register(Network, NetworkAdmin)
admin.site.register(UserNetwork, UserNetworkAdmin)
