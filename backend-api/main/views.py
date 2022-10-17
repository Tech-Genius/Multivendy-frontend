
from django.shortcuts import render
from rest_framework import generics,permissions, pagination, viewsets
from . import serializers
from . import models
# Create your views here.



class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


class ProductList(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductListSerializer
    # permission_classes = [permissions.IsAuthenticated]



class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerListSerializer
    # permission_classes = [permissions.IsAuthenticated]



class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderListSerializer
    pagination_class = pagination.LimitOffsetPagination
    # permission_classes = [permissions.IsAuthenticated]



class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

# class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
#     # queryset = models.Order.objects.all()
#     serializer_class = serializers.OrderDetailSerializer
#     def get_queryset(self):
#         order_id = self.kwargs['pk']
#         order = models.Order.objects.get(id=order_id)
#         order_items = models.OrderItems.objects.filter(order=order)
#         return order


class OrderItemsList(generics.ListCreateAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemsListSerializer
     



class OrderItemsDetail(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderItemsDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddress.objects.all()




class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()

