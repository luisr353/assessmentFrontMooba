<template>
  <!-- Desktop Navigation -->
  <nav class="bg-white shadow-sm py-4 hidden md:block">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img class="w-auto" src="/assets/logo.svg" alt="La Economía Droguería" />
        </div>

        <div class="flex-1 max-w-[760px] mx-6 relative">
          <div class="relative">
            <input
              type="text"
              placeholder="Buscar por productos, marcas y más..."
              class="w-full px-4 py-2 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Elementos de la derecha -->
        <div class="flex items-center space-x-6">
          <!-- Ubicación -->
          <div class="relative">
            <button @click="toggleLocationDropdown" 
                    class="flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <img src="/assets/icons/location.svg" alt="Ubicación" class="w-6 h-6">
              <span class="capitalize">{{ selectedCity }}</span>
              <img 
                src="/assets/icons/down-negro.svg" 
                alt="down" 
                class="w-5 h-5 transition-transform duration-200"
                :class="{ 'transform rotate-180': isLocationDropdownOpen }">
            </button>

            <!-- Dropdown Menu -->
            <div v-if="isLocationDropdownOpen"
                 class="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto">
              <div class="py-1">
                <div v-for="city in cities" 
                     :key="city.id"
                     @click="selectCity(city.name)"
                     class="px-4 py-2 text-sm capitalize cursor-pointer hover:bg-gray-100"
                     :class="{'bg-blue-50 text-blue-700': selectedCity === city.name}">
                  {{ city.name }}
                </div>
              </div>
            </div>
          </div>

          <!-- Usuario -->
          <div class="flex items-center text-gray-700">
            <a href="/cuenta">
              <img src="/assets/icons/user.svg" alt="Usuario" class="w-6 h-6">
            </a>
            <span>Edgardo</span>
          </div>

          <!-- Cupones -->
          <div class="flex items-center text-gray-700">
            <a href="/cupones">
              <img src="/assets/icons/coupon.svg" alt="Cupones" class="w-6 h-6">
            </a>
            <span>Cupones</span>
          </div>

          <!-- Carrito -->
          <div class="relative">
            <button @click="toggleCart" class="flex items-center">
              <img src="/assets/icons/cart.svg" alt="Carrito" class="w-6 h-6">
              <span v-if="totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {{ totalItems }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation -->
  <div class="block md:hidden">
    <!-- Top Row: Logo and Icons -->
    <div class="flex justify-between items-center p-4 bg-white">
      <div class="logo">
        <img src="/assets/logo.svg" alt="La Economía" class="h-8">
      </div>
      <div class="flex items-center space-x-4">
        <a href="/cuenta">
          <img src="/assets/icons/user.svg" alt="Usuario" class="w-6 h-6">
        </a>
        <a href="/cupones">
          <img src="/assets/icons/coupon.svg" alt="Cupones" class="w-6 h-6">
        </a>
        <button @click="toggleCart" class="relative">
          <img src="/assets/icons/cart.svg" alt="Carrito" class="w-6 h-6">
          <span v-if="totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {{ totalItems }}
          </span>
        </button>
      </div>
    </div>

    <!-- Second Row: Menu and Search -->
    <div class="px-4 pb-2 bg-white">
      <div class="flex items-center space-x-2 mb-2">
        <button @click="toggleMenu" class="p-2 relative">
          <!-- Icono hamburguesa cuando menú cerrado -->
          <img v-if="!isMenuOpen" src="/assets/icons/menu.svg" alt="Abrir Menú" class="w-6 h-6">
          <!-- Icono X cuando menú abierto -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex-grow">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            class="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm"
          >
        </div>
      </div>
    </div>

    <!-- Third Row: Location -->
    <div class="px-4 py-2 bg-blue-900 text-white">
      <div class="flex items-center space-x-2">
        <img src="/assets/icons/location.svg" alt="Ubicación" class="w-5 h-5">
        <span class="text-sm capitalize">{{ selectedCity }}</span>
      </div>
    </div>
  </div>
  
  <!-- Importamos solo la versión móvil de MainMenu -->
  <MainMenu 
    :mobile-menu-open="isMenuOpen" 
    @update:mobile-menu-open="isMenuOpen = $event" 
    hide-mobile-button 
    mobile-only
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from './MainMenu.vue'
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'

const isMenuOpen = ref(false)
const isLocationDropdownOpen = ref(false)
const selectedCity = ref('Bogotá')

const cities = [
  { id: 1, name: 'Bogotá' },
  { id: 2, name: 'Medellín' },
  { id: 3, name: 'Cali' },
  { id: 4, name: 'Barranquilla' },
  { id: 5, name: 'Cartagena' },
  { id: 6, name: 'Cúcuta' },
  { id: 7, name: 'Bucaramanga' },
  { id: 8, name: 'Pereira' },
  { id: 9, name: 'Santa Marta' },
  { id: 10, name: 'Ibagué' },
  { id: 11, name: 'Manizales' },
  { id: 12, name: 'Pasto' },
  { id: 13, name: 'Neiva' },
  { id: 14, name: 'Armenia' },
  { id: 15, name: 'Villavicencio' },
  { id: 16, name: 'Sincelejo' },
  { id: 17, name: 'Popayán' },
  { id: 18, name: 'Valledupar' },
  { id: 19, name: 'Montería' },
  { id: 20, name: 'Tunja' }
]

const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)
const { toggleCart } = cartStore

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLocationDropdown = () => {
  isLocationDropdownOpen.value = !isLocationDropdownOpen.value
}

const selectCity = (cityName: string) => {
  selectedCity.value = cityName
  isLocationDropdownOpen.value = false
}
</script>

<style scoped>
.logo img {
  object-fit: contain;
}

/* Estilos para el scroll del dropdown */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E0 #EDF2F7;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #EDF2F7;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #CBD5E0;
  border-radius: 3px;
}
</style> 