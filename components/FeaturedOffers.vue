<!-- components/FeaturedOffers.vue -->
<script setup lang="ts">
import type { Product } from '~/types/product'

const products: Product[] = [
{
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 29300,
    content: 'unidad a 2,441.67',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
]
</script>

<template>
  <ProductSlider
    title="Las mejores ofertas"
    icon-src="/assets/icons/alarma.png"
    see-all-link="/busqueda/ofertas"
    :products="products"
    :autoplay="true"
  />
</template>