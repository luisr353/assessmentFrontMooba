<template>
    <div class="w-full py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>
        
        <swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="slidesPerView"
          :space-between="spaceBetween"
          :loop="loop"
          :autoplay="autoplayConfig"
          :navigation="navigationConfig"
          class="relative"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <NuxtLink :to="item.url" class="flex flex-col items-center">
              <div class="bg-white rounded-full p-4 mb-3 w-[120px] h-[120px] flex items-center justify-center">
                <img 
                  :src="item.image" 
                  :alt="item.title || item.name" 
                  class="max-w-full max-h-full object-contain"
                  loading="lazy"
                >
              </div>
              <span v-if="showTitles" class="text-center text-sm font-medium">
                {{ item.title || item.name }}
              </span>
            </NuxtLink>
          </swiper-slide>
  
          <!-- Botones de navegación -->
          <div class="swiper-button-prev !text-white !w-10 !h-10 bg-primary !rounded-full !shadow-md after:!text-xl"></div>
          <div class="swiper-button-next !text-white !w-10 !h-10 bg-primary !rounded-full !shadow-md after:!text-xl"></div>
        </swiper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  
  interface SliderItem {
    image: string
    url: string
    title?: string
    name?: string
  }
  
  interface Props {
    title: string
    items: SliderItem[]
    showTitles?: boolean
    spaceBetween?: number
    loop?: boolean
    autoplay?: boolean | object
    slidesPerView?: number | object
  }
  
  const props = withDefaults(defineProps<Props>(), {
    showTitles: true,
    spaceBetween: 5,
    loop: true,
    autoplay: false
  })
  
  const SwiperAutoplay = Autoplay
  const SwiperNavigation = Navigation
  
  const autoplayConfig = computed(() => {
    if (typeof props.autoplay === 'object') return props.autoplay
    return props.autoplay ? { delay: 3000, disableOnInteraction: false } : false
  })
  
  const navigationConfig = computed(() => ({
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }))
  
  const slidesPerView = computed(() => {
    if (typeof props.slidesPerView !== 'undefined') return props.slidesPerView
    
    // Default responsive behavior
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