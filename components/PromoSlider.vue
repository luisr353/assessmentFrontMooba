<template>
  <div class="relative w-full h-[420px] overflow-hidden">
    <!-- Slides -->
    <div class="flex transition-transform duration-500 ease-in-out h-full" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="w-full h-full flex-shrink-0">
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Navigation buttons -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 focus:outline-none">
      <img src="/assets/icons/chevron-left.svg" alt="Previous" class="w-6 h-6 invert" />
    </button>
    <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 focus:outline-none">
      <img src="/assets/icons/chevron-right.svg" alt="Next" class="w-6 h-6 invert" />
    </button>

    <!-- Dots indicator -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-colors duration-200"
        :class="index === currentSlide ? 'bg-primary' : 'bg-white'"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: '/images/slider1.png',
    alt: 'Día de la Economía - Hasta 20% de descuento'
  },
  {
    image: '/images/slider2.png',
    alt: 'Ofertas especiales en medicamentos'
  },
  {
    image: '/images/slider3.png',
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
</style> 