from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import fbv
from .views import cbv
from .views import mixins

urlpatterns = [
    path('products_list_fbv/', fbv.products_list),
    path('products_list_fbv/<int:pk>/', fbv.product_detail),
    path('products_list_cbv/', cbv.ProductListAPIView.as_view()),
    path('products_list_cbv/<int:pk>/', cbv.ProductDetailAPIView.as_view()),
    path('products_list_mixins/', mixins.ProductListAPIView.as_view()),
    path('products_list_mixins/<int:pk>/', mixins.ProductDetailAPIView.as_view()),
]