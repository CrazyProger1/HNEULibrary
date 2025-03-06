import logging

from rest_framework import viewsets, generics, permissions, response, status
from rest_framework.decorators import action

from src.apps.accounts.serializers import UserRetrieveSerializer, UserCreateSerializer
from src.apps.accounts.services.db import get_all_users, create_user

logger = logging.getLogger(__name__)


class UserViewSet(
    viewsets.GenericViewSet,
    generics.CreateAPIView,
):
    queryset = get_all_users()
    serializer_classes = {
        "create": UserCreateSerializer,
        "me": UserRetrieveSerializer,
    }

    def get_serializer_class(self):
        return self.serializer_classes[self.action]

    def get_object(self):
        return self.request.user

    def create(self, request, *args, **kwargs):
        logger.error("Data %s", request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data

        create_user(
            username=data["username"],
            password=data["password"],
            email=data.get("email"),
        )
        return response.Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
        )

    @action(
        methods=("GET",),
        detail=False,
        url_path="me",
        permission_classes=(permissions.IsAuthenticated,),
    )
    def me(self, request):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return response.Response(data=serializer.data)
