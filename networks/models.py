from django.db import models
from django.contrib.auth import get_user_model
from cloudinary.models import CloudinaryField

User = get_user_model()


class Category(models.Model):
	name = models.CharField(max_length=20)

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['name']
		verbose_name = 'Category'
		verbose_name_plural = 'Categories'


class Network(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	name = models.CharField(max_length=40)
	logo = CloudinaryField('image', folder='MeDear/networks')

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['name']


class UserNetwork(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	network = models.ForeignKey(Network, on_delete=models.CASCADE, related_name='user_url')
	url = models.URLField(null=True, blank=True)
	name = models.CharField(max_length=50, null=True, blank=True)
	html = models.TextField(null=True, blank=True)
	date_added = models.DateTimeField(auto_now_add=True)
	date_updated = models.DateField(auto_now=True)

	def __str__(self):
		return str(self.user)

