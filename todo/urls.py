from rest_framework.routers import  DefaultRouter

from .views import TodoViewSet, TestViewSet


router = DefaultRouter()
router.register('todos', TodoViewSet, basename='todo-view')
router.register('tests', TestViewSet, basename='test-view')
urlpatterns = router.urls
