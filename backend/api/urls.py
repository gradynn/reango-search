from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='health-check'),
    path('search/<str:country_name>', views.search, name="search-for-country")
]
