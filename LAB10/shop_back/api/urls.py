from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import fbv

urlpatterns = [
    path('products_list/', fbv.products_list),
    path('products_list/<int:pk>/', fbv.product_detail)
]