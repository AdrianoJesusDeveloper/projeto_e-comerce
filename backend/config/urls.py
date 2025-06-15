from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from store.views import ProductViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')


def redirect_root(request):
    return redirect('/api/')

urlpatterns = [
    path('', redirect_root),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/', include('produtos.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

