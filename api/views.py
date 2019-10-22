from rest_framework import generics
from recipes.models import Recipe
from .serializers import RecipeSerializer


class  RecipeListCreateAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
# Create your views here.
