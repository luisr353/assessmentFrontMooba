<template>
  <div class="w-full bg-white py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="relative">
        <!-- Carrusel de productos destacados -->
        <div class="flex overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentPosition}px)` }">
            <div v-for="(item, index) in featuredItems" :key="index" 
                 class="w-[220px] mr-2">
              <a :href="item.url" class="h-full mt-5 relative flex flex-col items-center text-center">
                <!-- Círculo de fondo -->
                <div class="circle"></div>
                <!-- Contenido -->
                  <img :src="item.image" :alt="item.title" 
                       class="img-promo hover:scale-110 transition-transform duration-300" 
                       :class="{ 'grayscale': index === featuredItems.length - 1 }" />
                  <span class="text-sm text-center font-medium" 
                        :class="{ 'text-gray-400': index === featuredItems.length - 1, 'text-gray-800': index !== featuredItems.length - 1 }">
                    {{ item.title }}
                  </span>

              </a>
            </div>
          </div>
        </div>

        <!-- Botones de navegación 
        <button @click="prevSlide" 
                class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 focus:outline-none">
          <img src="/assets/icons/chevron-left.svg" alt="Previous" class="w-5 h-5" />
        </button>
        <button @click="nextSlide" 
                class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 focus:outline-none">
          <img src="/assets/icons/chevron-right.svg" alt="Next" class="w-5 h-5" />
        </button>
        -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const featuredItems = [
  {
    title: 'Productos Estrella',
    image: '/assets/icons/start/productos-estrella.png',
    url: '/busqueda/[banner]741'
  },
  {
    title: 'Dermocosmética',
    image: '/assets/icons/start/dermocosmetica.png',
    url: '/busqueda/[code]142284142285142286142287142288142289142290142291141989142271142275297017297018043048511630511632270048270046270049000708810979109796953421386104386101386102386106386103386105386108386107384322'
  },
  {
    title: 'Antigripales',
    image: '/assets/icons/start/antigripales.png',
    url: '/categoria/gripa,-tos/malestar-gripa'
  },
  {
    title: 'Snacks',
    image: '/assets/icons/start/snacks.png',
    url: '/categoria/alimentos/snack'
  },
  {
    title: 'Mejores Ofertas',
    image: '/assets/icons/start/mejores-ofertas.png',
    url: '/busqueda/[sales]'
  },
  {
    title: 'Día de salud y bienestar',
    image: '/assets/icons/start/dia-de-salud-y-bienestar-gris.png',
    url: '/#'
  }
]

const currentPosition = ref(0)
const itemWidth = 220 + 10 // Ancho del item + margen
const visibleItems = 5

const maxPosition = computed(() => {
  return Math.max(0, (featuredItems.length - visibleItems) * itemWidth)
})

const nextSlide = () => {
  if (currentPosition.value < maxPosition.value) {
    currentPosition.value += itemWidth
  } else {
    currentPosition.value = 0
  }
}

const prevSlide = () => {
  if (currentPosition.value > 0) {
    currentPosition.value -= itemWidth
  } else {
    currentPosition.value = maxPosition.value
  }
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

.circle {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 3.36px solid rgba(158, 200, 241, 1);
    z-index: 0;
}
.img-promo {
    position: relative;
    z-index: 1;
    height: 120px;
    object-fit: cover;
    transition: transform 0.1s ease-in-out;
}
</style> 