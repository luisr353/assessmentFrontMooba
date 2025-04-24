<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.title"  loading="lazy">
    </div>
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <button class="add-to-cart" @click="addToCart">
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'

interface Product {
  id: string
  title: string
  price: number
  image: string
}

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}

const addToCart = () => {
  cartStore.addItem(props.product)
  cartStore.toggleCart()
}
</script>

<style scoped>
.product-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 1rem;
}

.product-info h3 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.price {
  color: #007bff;
  font-weight: bold;
  margin: 0.5rem 0;
}

.add-to-cart {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style> 