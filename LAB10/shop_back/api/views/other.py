from django.shortcuts import render
from ..models import Product, Category
from django.views.generic import DetailView

def categoriesList(request):
    categories = Category.objects.all()
    return render(request, 'api/categories_list.html', {'categories': categories})

class CategoryView(DetailView):
    model = Category
    template_name = 'api/category.html'
    context_object_name = 'category'