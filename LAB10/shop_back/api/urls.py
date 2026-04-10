from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import fbv, cbv, mixins, generics

urlpatterns = [
    path('products_list_fbv/', fbv.products_list),
    path('products_list_fbv/<int:pk>/', fbv.product_detail),
    path('products_list_cbv/', cbv.ProductListAPIView.as_view()),
    path('products_list_cbv/<int:pk>/', cbv.ProductDetailAPIView.as_view()),
    path('products_list_mixins/', mixins.ProductListAPIView.as_view()),
    path('products_list_mixins/<int:pk>/', mixins.ProductDetailAPIView.as_view()),
    path('products_list_generics/', generics.ProductListAPIView.as_view()),
    path('products_list_generics/<int:pk>/', generics.ProductDetailAPIView.as_view()),
    path('categories_cbv/', cbv.CategoryListAPIView.as_view()),
    path('categories_cbv/<int:pk>/', cbv.CategoryDetailAPIView.as_view()),
]