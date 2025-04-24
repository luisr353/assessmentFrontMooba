<template>
    <div class="relative w-screen md:w-full overflow-hidden">
      <!-- Slides -->
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="w-screen md:w-full flex-shrink-0">
          <img 
            :src="slide.image" 
            :alt="slide.alt" 
            class="w-full h-auto object-contain" 
          />
        </div>
      </div>
  
      <!-- Navigation buttons -->
      <button @click="prevSlide" class="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center hover:bg-primary-600 focus:outline-none">
        <img src="/assets/icons/chevron-left.svg" alt="Previous" class="w-6 h-6 invert" />
      </button>
      <button @click="nextSlide" class="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center hover:bg-primary-600 focus:outline-none">
        <img src="/assets/icons/chevron-right.svg" alt="Next" class="w-6 h-6 invert" />
      </button>
  
      <!-- Dots indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          @click="goToSlide(index)"
          class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200"
          :class="index === currentSlide ? 'bg-primary' : 'bg-white'"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const slides = [
    {
      image: '/images/banner-marcas.png',
      alt: 'Día de la Economía - Hasta 20% de descuento'
    },
    {
      image: '/images/slider2.png',
      alt: 'Ofertas especiales en medicamentos'
    },
    {
      image: '/images/banner-marcas.png',
      alt: 'Productos para el cuidado de la salud'
    },
    {
      image: '/images/slider2.png',
      alt: 'Descuentos en productos seleccionados'
    }
  ]
  
  const currentSlide = ref(0)
  const autoplayInterval = ref<number | null>(null)
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  }
  
  const goToSlide = (index: number) => {
    currentSlide.value = index
  }
  
  const startAutoplay = () => {
    autoplayInterval.value = window.setInterval(() => {
      nextSlide()
    }, 5000) // Cambiar slide cada 5 segundos
  }
  
  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value)
      autoplayInterval.value = null
    }
  }
  
  onMounted(() => {
    startAutoplay()
  })
  
  onUnmounted(() => {
    stopAutoplay()
  })
  </script>
  
  <style scoped>
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }
  
  /* Ajustes para móvil */
  @media (max-width: 768px) {
    .w-screen {
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      margin-right: calc(-50vw + 50%);
    }
  }
  </style> 