from django.db import models

class Home(models.Model):
    title = models.CharField(max_length=200,)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='home_images/',blank=True,null=True)

    def __str__(self):
        return self.title


class About(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    pdf = models.FileField(
        upload_to='pdfs/',
        blank=True,
        null=True
        )

    def __str__(self):
        return self.title


class Service(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Moreinfo(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    linkedin = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email