from django.urls import path
from django.views.generic import TemplateView
from shop import views as shop_views
from . import views

urlpatterns = [
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("shop/", shop_views.shop, name="shop"),
    path("product/<int:product_id>/", views.product_detail, name="product_detail"),
    path("login/", views.login_view, name="login"),
    path("register/", views.register_view, name="register"),
    path("product/<int:product_id>/edit/", views.edit_product, name="edit_product"),
    path(
        "product/<int:product_id>/delete/", views.delete_product, name="delete_product"
    ),
]
