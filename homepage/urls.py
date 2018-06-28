from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.top_page, name='top_page'),
    path('members/', views.members, name='members'),
]