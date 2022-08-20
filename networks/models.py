from django.db import models
from cloudinary.models import CloudinaryField


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
