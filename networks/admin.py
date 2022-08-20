from django.contrib import admin

from .models import (
	Category,
	Network
)


class NetworkAdmin(admin.ModelAdmin):
	list_display = ['category', 'name']


admin.site.register(Category)
admin.site.register(Network, NetworkAdmin)
