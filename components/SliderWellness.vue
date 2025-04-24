<template>
    <div class="w-full py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6">Inspirados en tu bienestar  <div class="icono"><img src="/assets/icons/estrella.png" style="width: 24px"></div></h2>
        
        <swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="slidesPerView"
          :space-between="5"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          class="relative"
        >
          <swiper-slide v-for="(product, index) in products" :key="index">
            <div class="flex flex-col items-center">
              <div class="bg-white rounded-full p-4 mb-3 w-[120px] h-[120px] flex items-center justify-center">
                <img :src="product.image" :alt="product.title" class="max-w-full max-h-full object-contain">
              </div>
              <span class="text-center text-sm font-medium">{{ product.title }}</span>
            </div>
          </swiper-slide>
  
          <!-- Botones de navegación -->
          <div class="swiper-button-prev !text-white !w-10 !h-10 bg-primary !rounded-full !shadow-md after:!text-xl"></div>
          <div class="swiper-button-next !text-white !w-10 !h-10 bg-primary !rounded-full !shadow-md after:!text-xl"></div>
        </swiper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  
  const SwiperAutoplay = Autoplay
  const SwiperNavigation = Navigation
  
  const products = [
    {
      title: 'Genéricos',
      image: '/assets/products/generico.png',
      url: '/busqueda/[code]genfar'
    },
    {
      title: 'Descongestionantes tópicos',
      image: '/assets/products/vaporud.png',
      url: '/categoria/gripa/descongestion'
    },
    {
      title: 'Diarrea',
      image: '/assets/products/diarrea.png',
      url: '/categoria/estomago/diarrea'
    },
    {
      title: 'Desodorantes',
      image: '/assets/products/desodorante.png',
      url: '/categoria/cuidado-personal/desodorante'
    },
    {
      title: 'Suplemento nutricional',
      image: '/assets/products/suplemento.png',
      url: '/categoria/vitaminas/suplemento'
    },
    {
      title: 'Enjuagues',
      image: '/assets/products/enjuague.png',
      url: '/categoria/cuidado-oral/enjuague'
    },
    {
      title: 'Garganta',
      image: '/assets/products/garganta.png',
      url: '/categoria/gripa/garganta'
    }
  ]
  
  const slidesPerView = computed(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 3
      if (window.innerWidth < 768) return 3
      if (window.innerWidth < 1024) return 4
      return 5
    }
    return 5
  })
  </script>
  
  <style scoped>
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    top: 50%;
  }
  
  :deep(.swiper-button-prev) {
    left: 2px;
    z-index: 10;
  }
  
  :deep(.swiper-button-next) {
    right: 2px;
    z-index: 10;
  }
  
  :deep(.swiper-button-disabled) {
    opacity: 0.5 !important;
  }
  </style> 