<template>
  <div class="w-full py-8">
    <div class="container mx-auto px-4">
      <div class="relative">
        <!-- Carrusel de productos destacados -->
        <div class="flex justify-center overflow-hidden touch-pan-x">
          <div 
            class="flex transition-transform duration-500 ease-in-out" 
            :style="{ transform: `translateX(-${currentPosition}px)` }"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div v-for="(item, index) in featuredItems" :key="index" 
                 class="w-[160px] md:w-[220px] mx-2">
              <a :href="item.url" class="h-full mt-5 relative flex flex-col items-center text-center">
                <!-- Círculo de fondo -->
                <div class="circle"></div>
                <!-- Contenido -->
                  <img :src="item.image" :alt="item.title" 
                       class="img-promo hover:scale-110 transition-transform duration-300" 
                       :class="{ 'grayscale': index === featuredItems.length - 1 }" />
                  <span class="text-sm text-center font-medium mt-2" 
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
import { ref, computed, onMounted } from 'vue'

const featuredItems = [
  {
    title: 'Productos Estrella',
    image: '/assets/icons/start/productos-estrella.png',
    url: '/busqueda/[banner]741'
  },
  {
    title: 'Dermocosmética',
    image: '/assets/icons/start/dermocosmetica.png',
    url: '/busqueda/[code]86107384322'
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
const touchStartX = ref(0)
const touchEndX = ref(0)
const isMobile = ref(true) // Valor por defecto

const itemWidth = computed(() => isMobile.value ? 164 : 224)
const visibleItems = computed(() => isMobile.value ? 3 : 5)

const maxPosition = computed(() => {
  return Math.max(0, (featuredItems.length - visibleItems.value) * itemWidth.value)
})

const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchMove = (event: TouchEvent) => {
  touchEndX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeDistance = touchStartX.value - touchEndX.value
  
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

const nextSlide = () => {
  if (currentPosition.value < maxPosition.value) {
    currentPosition.value += itemWidth.value
  } else {
    currentPosition.value = 0
  }
}

const prevSlide = () => {
  if (currentPosition.value > 0) {
    currentPosition.value -= itemWidth.value
  } else {
    currentPosition.value = maxPosition.value
  }
}

onMounted(() => {
  // Inicializar isMobile aquí
  isMobile.value = window.innerWidth < 768
  
  // Listener para cambios de tamaño
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
    currentPosition.value = 0
  })
})
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

@media (max-width: 768px) {
  .circle {
    height: 70px;
    width: 70px;
  }
  
  .img-promo {
    height: 90px;
  }
}
</style> 