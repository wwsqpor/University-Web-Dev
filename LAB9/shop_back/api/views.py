from django.shortcuts import render
from .models import Product, Category
from django.views.generic import DetailView

def productsList(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    return render(request, 'api/productsList.html', {'products': products, 'categories': categories})

def categoriesList(request):
    categories = Category.objects.all()
    return render(request, 'api/categories_list.html', {'categories': categories})

class ProductDetailView(DetailView):
    model = Product
    template_name = 'api/product_detail.html'
    context_object_name = 'product'

class CategoryView(DetailView):
    model = Category
    template_name = 'api/category.html'
    context_object_name = 'category'

class ProductsByCategoryView(DetailView):
    model = Category
    template_name = 'api/products_by_category.html'
    context_object_name = 'category'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.filter(category=self.object)
        return context