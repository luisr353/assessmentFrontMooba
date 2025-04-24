<template>
  <!-- Menú Desktop - Solo se muestra si no está en modo mobile-only -->
  <div v-if="!mobileOnly" class="w-full bg-primary text-white hidden md:block">
    <div class="container mx-auto">
      <nav class="flex">
        <div v-for="(menu, index) in menus" 
             :key="index" 
             class="group relative"
             @mouseenter="activeMenu = index"
             @mouseleave="activeMenu = null">
          <button class="flex items-center px-6 py-4 text-sm hover:bg-primary-600 transition-colors duration-200">
            <span class="font-medium">{{ menu.title }}</span>
            <img 
              src="/assets/icons/down-negro.svg" 
              alt="down" 
              class="w-4 h-4 ml-1.5 invert transition-transform duration-200"
              :class="{ 'transform rotate-180': activeMenu === index }" />
          </button>
          
          <!-- Dropdown menu -->
          <div 
            class="absolute left-0 w-[320px] bg-white shadow-xl rounded-b-lg z-50 transition-all duration-200 opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <div class="h-1 bg-primary rounded-t-lg"></div>
            <div class="p-6">
              <div v-for="(column, colIndex) in menu.columns" :key="colIndex">
                <div v-for="(category, catIndex) in column" 
                     :key="catIndex" 
                     class="submenu-category mb-8 last:mb-0">
                  <h3 class="font-semibold text-primary text-[15px] mb-4 flex items-center">
                    <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {{ category.title }}
                  </h3>
                  <div class="grid gap-3">
                    <a v-for="(link, linkIndex) in category.links" 
                       :key="linkIndex"
                       :href="link.url"
                       class="submenu-link text-[13px] text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group/link">
                      <span class="w-1 h-1 bg-gray-300 rounded-full mr-2 group-hover/link:bg-primary transition-colors duration-200"></span>
                      {{ link.text }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <!-- Menú Mobile -->
  <div class="md:hidden">
    <!-- Overlay para cerrar al hacer clic fuera -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-30"
      @click="closeMobileMenu">
    </div>
    
    <!-- Panel móvil -->
    <div 
      class="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white z-40 transition-transform duration-300 transform shadow-lg"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'">
      
      <!-- Botón cerrar -->
      <button 
        @click="closeMobileMenu" 
        class="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div class="h-full overflow-y-auto pt-20 pb-6 px-6">
        <div v-for="(menu, menuIndex) in menus" :key="menuIndex" class="mb-6">
          <button 
            @click="toggleMobileSubmenu(menuIndex)"
            class="w-full flex items-center justify-between py-3 text-gray-800 border-b">
            <span class="font-medium">{{ menu.title }}</span>
            <img 
              src="/assets/icons/down-negro.svg" 
              alt="down" 
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'transform rotate-180': activeMobileMenu === menuIndex }" />
          </button>

          <!-- Submenú móvil -->
          <div 
            v-if="activeMobileMenu === menuIndex"
            class="py-4 pl-4">
            <div v-for="(column, colIndex) in menu.columns" :key="colIndex">
              <div v-for="(category, catIndex) in column" 
                   :key="catIndex" 
                   class="mb-6 last:mb-0">
                <h3 class="font-medium text-primary mb-3 flex items-center">
                  <span class="w-1 h-1 bg-primary rounded-full mr-2"></span>
                  {{ category.title }}
                </h3>
                <div class="space-y-3 pl-3">
                  <a v-for="(link, linkIndex) in category.links" 
                     :key="linkIndex"
                     :href="link.url"
                     @click="closeMobileMenu"
                     class="block text-gray-600 hover:text-primary transition-colors duration-200">
                    {{ link.text }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  mobileMenuOpen: {
    type: Boolean,
    default: false
  },
  hideMobileButton: {
    type: Boolean,
    default: false
  },
  mobileOnly: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['update:mobileMenuOpen'])

const activeMenu = ref<number | null>(null)
const isMobileMenuOpen = ref(props.mobileMenuOpen)
const activeMobileMenu = ref<number | null>(null)

// Sincronizar estado interno con props
watch(() => props.mobileMenuOpen, (newValue) => {
  isMobileMenuOpen.value = newValue
})

// Sincronizar cambios internos con el parent
watch(isMobileMenuOpen, (newValue) => {
  emit('update:mobileMenuOpen', newValue)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  activeMobileMenu.value = null  // Resetear el submenú activo
}

const toggleMobileSubmenu = (index: number) => {
  activeMobileMenu.value = activeMobileMenu.value === index ? null : index
}

const menus = [
  {
    title: 'Medicamentos',
    columns: [
      [
        {
          title: 'Vitaminas Minerales y Suplementos',
          links: [
            { text: 'Multivitamínicos', url: '/categoria/vitaminas-minerales-y-suplementos/multivitaminicos' },
            { text: 'Vitaminas', url: '/categoria/vitaminas-minerales-y-suplementos/vitaminas' },
            { text: 'Suplemento nutricional', url: '/categoria/vitaminas-minerales-y-suplementos/suplemento-nutricional' }
          ]
        },
        {
          title: 'Dermatológicos',
          links: [
            { text: 'Antimicóticos', url: '/categoria/dermatologicos/antimicoticos' },
            { text: 'Antipiojos', url: '/categoria/dermatologicos/antipiojos' },
            { text: 'Irritación', url: '/categoria/dermatologicos/irritacion' }
          ]
        }
      ]
    ]
  },
  {
    title: 'Botiquín',
    columns: [
      [
        {
          title: 'Alivio del dolor',
          links: [
            { text: 'Cabeza y general', url: '/categoria/alivio-del-dolor/cabeza-y-general' },
            { text: 'Muscular y articular', url: '/categoria/alivio-del-dolor/muscular-y-articular' }
          ]
        },
        {
          title: 'Gripa, tos',
          links: [
            { text: 'Tos', url: '/categoria/gripa,-tos/tos' },
            { text: 'Malestar gripa', url: '/categoria/gripa,-tos/malestar-gripa' },
            { text: 'Garganta', url: '/categoria/gripa,-tos/garganta' }
          ]
        }
      ]
    ]
  },
  {
    title: 'Salud y belleza',
    columns: [
      [
        {
          title: 'Cuidado de la piel',
          links: [
            { text: 'Tratamiento facial', url: '/categoria/cuidado-de-la-piel/tratamiento-facial' },
            { text: 'Bloqueador', url: '/categoria/cuidado-de-la-piel/bloqueador' }
          ]
        },
        {
          title: 'Maquillaje',
          links: [
            { text: 'Bases y polvos', url: '/categoria/maquillaje/bases-y-polvos' },
            { text: 'Labiales', url: '/categoria/maquillaje/labiales' }
          ]
        }
      ]
    ]
  },
  {
    title: 'Cuidado del bebé',
    columns: [
      [
        {
          title: 'Cuidado del bebé',
          links: [
            { text: 'Fórmulas infantiles', url: '/categoria/cuidado-del-bebe/formulas-infantiles' },
            { text: 'Pañales', url: '/categoria/cuidado-del-bebe/panales' },
            { text: 'Leches infantiles', url: '/categoria/cuidado-del-bebe/leches-infantiles' },
            { text: 'Pañitos húmedos', url: '/categoria/cuidado-del-bebe/panitos-humedos' }
          ]
        }
      ]
    ]
  },
  {
    title: 'Alimentos y bebidas',
    columns: [
      [
        {
          title: 'Bebidas',
          links: [
            { text: 'Agua', url: '/categoria/bebidas/agua' },
            { text: 'Gaseosas', url: '/categoria/bebidas/gaseosas' },
            { text: 'Jugos', url: '/categoria/bebidas/jugos' }
          ]
        },
        {
          title: 'Alimentos',
          links: [
            { text: 'Víveres', url: '/categoria/alimentos/viveres' },
            { text: 'Snacks', url: '/categoria/alimentos/snack' }
          ]
        }
      ]
    ]
  },
  {
    title: 'Varios',
    columns: [
      [
        {
          title: 'Aseo hogar',
          links: [
            { text: 'Aseo hogar', url: '/categoria/aseo-hogar/aseo-hogar' }
          ]
        },
        {
          title: 'Mascotas',
          links: [
            { text: 'Aseo', url: '/categoria/mascotas/aseo' }
          ]
        }
      ]
    ]
  }
]
</script>

<style scoped>
/* Estilos base */
.group:hover .group-hover\:block {
  display: block;
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Estilos para el submenu */
.submenu-category {
  position: relative;
}

.submenu-category::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #e5e7eb 0%, transparent 100%);
}

.submenu-category:last-child::after {
  display: none;
}

/* Efecto hover para los links */
.submenu-link {
  position: relative;
  padding-left: 0.5rem;
  transition: all 0.2s ease;
}

.submenu-link:hover {
  padding-left: 0.75rem;
}

/* Sombra personalizada */
.shadow-xl {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Estilos adicionales para móvil */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E0 #EDF2F7;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #EDF2F7;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #CBD5E0;
  border-radius: 2px;
}

/* Prevenir scroll cuando el menú móvil está abierto */
:root {
  overflow: hidden;
}

/* Modificación para el overlay */
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
</style> 