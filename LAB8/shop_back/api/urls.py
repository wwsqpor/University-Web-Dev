from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.productsList, name='product_list'),
    path('categories/', views.categoriesList, name='categories_list'),
    path('categories/<int:pk>/', views.CategoryView.as_view(), name='category'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    path('categories/<int:pk>/products/', views.ProductsByCategoryView.as_view(), name='products_by_category')
]