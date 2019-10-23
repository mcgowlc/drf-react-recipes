from django.urls import path

from .views import RecipeListCreateAPIView

urlpatterns = [
    path('recipes/', RecipeListCreateAPIView.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>', RecipeRetrieveUpdateDestroyAPIView.as_view(), name='recipe-delete'),
    path('rest-auth/', include('rest_auth.urls')),

]
