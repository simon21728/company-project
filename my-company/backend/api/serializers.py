from rest_framework import serializers
from .models import Service, Contact,Home, About,Moreinfo


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
class MoreinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moreinfo
        fields = "__all__"