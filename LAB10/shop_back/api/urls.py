from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import fbv
from .views import cbv

urlpatterns = [
    path('products_list/', fbv.products_list),
    path('products_list/<int:pk>/', fbv.product_detail),
    path('products_list_api/', cbv.ProductListAPIView.as_view()),
    path('products_list_api/<int:pk>/', cbv.ProductDetailAPIView.as_view()),
]