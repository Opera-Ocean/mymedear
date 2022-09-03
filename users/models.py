from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField


class User(AbstractUser):
	country = CountryField(blank_label='(Select country)')
	pass

	def __str__(self):
		return self.username



"""
Smithson
tolulope111
"""
 