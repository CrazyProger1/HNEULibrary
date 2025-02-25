from django.shortcuts import get_object_or_404, render, redirect
from .models import Product
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import user_passes_test


def home(request):
    return render(request, "home.html")


def shop(request):
    query = request.GET.get("query")
    if query:
        products = Product.objects.filter(title__icontains=query)
    else:
        products = Product.objects.all()
    return render(request, "shop/shop.html", {"products": products})


def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    return render(request, "shop/product_detail.html", {"product": product})


def register_view(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")  # Перенаправление
    else:
        form = UserCreationForm()
    return render(request, "reg.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("home")
    else:
        form = AuthenticationForm()
    return render(request, "login.html", {"form": form})


# @user_passes_test(lambda u: u.is_staff or u.is_superuser)
def edit_product(request, product_id):
    # Получить товар по его ID
    product = Product.objects.get(pk=product_id)

    if request.method == "POST":
        # Обработать форму редактирования товара
        product.title = request.POST["title"]
        product.price = request.POST["price"]
        product.description = request.POST["description"]
        product.save()
        # Перенаправить пользователя на страницу с подробностями о товаре после редактирования
        return redirect("product_detail", product_id=product.id)

    return render(request, "shop/edit_product.html", {"product": product})


# @user_passes_test(lambda u: u.is_staff or u.is_superuser)
def delete_product(request, product_id):
    # Получить товар по его ID
    product = Product.objects.get(pk=product_id)

    if request.method == "POST":
        # Удалить товар
        product.delete()
        # Перенаправить пользователя на страницу со списком товаров после удаления
        return redirect("shop")

    # Вернуть шаблон для подтверждения удаления товара
    return render(request, "shop/delete_product.html", {"product": product})
