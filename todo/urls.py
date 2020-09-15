from rest_framework.routers import  DefaultRouter

from .views import TodoViewSet


router = DefaultRouter()
router.register('todos', TodoViewSet, basename='todo-view')
urlpatterns = router.urls
