<!-- components/products/ProductCard.vue -->
<template>
    <div class="product-item bg-white" :class="{ agotado: !product.available }">
      <div class="item">
        <div class="image">
          <NuxtLink :to="product.url">
            <img 
              :src="product.image" 
              :alt="product.title" 
              @error="handleImageError"
              loading="lazy"
            >
          </NuxtLink>
        </div>
        <div class="info">
          <NuxtLink :to="product.url">
            <div class="titulo">{{ product.title }}</div>
            <div class="precio">${{ formatPrice(product.price) }}</div>
            <div v-if="product.oldPrice" class="antes">${{ formatPrice(product.oldPrice) }}</div>
            <div class="contenido">{{ product.content }}</div>
            <div v-if="product.discount" class="descuento"><b>{{ product.discount }}%</b></div>
            <div v-if="!product.available" class="descuento">No disponible</div>
          </NuxtLink>
          <div class="button-add">
            <button 
              @click.stop="$emit('add-to-cart', product.id)" 
              class="bg-primary"
              :disabled="!product.available"
            >
              <img src="/assets/icons/cart-button.svg" alt="Carrito" style="width:20px; padding-right: 7px">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '~/types/product'
  
  interface Props {
    product: Product
  }
  
  defineProps<Props>()
  defineEmits(['add-to-cart'])
  
  const handleImageError = (e: Event) => {
    const img = e.target as HTMLImageElement
    img.src = '/assets/products/product_1.png'
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO').format(price)
  }
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    margin: 2rem 0;
    padding: 0 64px;
    position: relative;
  }
  
  .swiper-container {
    overflow: hidden;
    position: relative;
  }
  
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    width: auto;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .banner {
      padding: 0 20px;
    }
  
    .swiper-slide {
      width: calc(50% - 5px) !important;
    }
  
    .product-item {
      margin: 0 5px;
    }
  
    .swiper-button-prev-eco {
      left: 5px;
    }
  
    .swiper-button-next-eco {
      right: 5px;
    }
  }
  
  .titulo-grande {
      color: #111;
      font-size: 1.4em;
      font-weight: 600;
      cursor: default;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }
  
  .product-item {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .product-item.agotado {
    opacity: 0.7;
  }
  
  .item {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .image {
    text-align: center;
    margin-bottom: 1rem;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  
  .info {
    text-align: left;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .info > a {
    flex-grow: 1;
    text-decoration: none;
  }
  
  .titulo {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .precio {
    font-size: 1.5em;
    font-weight: bold;
    color: #000;
  }
  
  .antes {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
  }
  
  .contenido {
    font-size: 0.8em;
      color: #666;
      font-weight: 300;
      margin: 0px 0px 10px 0px;
  }
  
  .descuento {
    color: #e4022d;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  
  .button-add button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    color: white;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .refresh button:hover {
    background: #0056b3;
  }
  
  .swiper-button-prev-eco,
  .swiper-button-next-eco {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    cursor: pointer;
    border-radius: 50%;
    padding: 7px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .swiper-button-prev-eco {
    left: 20px;
    transform: translateX(-50%) translateY(-50%);
  }
  
  .swiper-button-next-eco {
    right: 20px;
    transform: translateX(50%) translateY(-50%);
  }
  
  .swiper-button-prev-eco img,
  .swiper-button-next-eco img {
    width: 35px;
    height: 35px;
  }
  </style> 