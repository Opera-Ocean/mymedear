from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
	list_display = ['username', 'email', 'is_active']


admin.site.register(User, UserAdmin)

"""
	user:     Admin
	email:    admin@mymedear.com
	password: MyMeDearAdmin123
"""
