<!-- components/products/ProductSlider.vue -->
<template>
    <div class="banner">
      <div class="titulo-grande pb-5 font-semibold cursor-default flex justify-start items-center">
        {{ title }}
        <div class="icono">
          <img :src="iconSrc" :alt="title" style="width: 24px">
        </div>
        <NuxtLink :to="seeAllLink" class="vertodo">Ver todos</NuxtLink>
      </div>
      
      <div class="swiper-container">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div v-for="product in products" :key="product.id" class="swiper-slide slide-product">
              <ProductCard :product="product" @add-to-cart="addToCart" />
            </div>
          </div>
          <div class="swiper-button-prev-eco bg-primary">
            <img src="/assets/icons/left.svg" alt="Anterior" style="width:20px">
          </div>
          <div class="swiper-button-next-eco bg-primary">
            <img src="/assets/icons/right.svg" alt="Siguiente" style="width:20px">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '../../types/product'
  import Swiper from 'swiper'
  import { Navigation, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/autoplay'
  
  interface Props {
    title: string
    iconSrc: string
    seeAllLink: string
    products: Product[]
    autoplay?: boolean
  }
  
  const props = withDefaults(defineProps<Props>(), {
    autoplay: false
  })
  
  const emit = defineEmits(['add-to-cart'])
  
  const addToCart = (productId: string) => {
    emit('add-to-cart', productId)
  }
  
  onMounted(() => {
    const swiperConfig = {
      modules: [Navigation, Autoplay],
      slidesPerView: 6,
      spaceBetween: 32,
      navigation: {
        nextEl: '.swiper-button-next-eco',
        prevEl: '.swiper-button-prev-eco',
      },
      loop: true,
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 25 },
        1024: { slidesPerView: 6, spaceBetween: 32 },
      }
    }
  
    if (props.autoplay) {
      swiperConfig.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }
    }
  
    new Swiper('.swiper', swiperConfig)
  })
  </script>
  