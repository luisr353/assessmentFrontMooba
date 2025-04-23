<template>
  <div class="w-full bg-primary text-white">
    <div class="max-w-7xl mx-auto">
      <nav class="flex">
        <div v-for="(menu, index) in menus" :key="index" class="group relative">
          <button class="flex items-center px-4 py-3 text-sm hover:bg-primary-600">
            <span>{{ menu.title }}</span>
            <img src="/assets/icons/down.svg" alt="down" class="w-5 h-5 ml-1 invert" />
          </button>
          
          <!-- Dropdown menu -->
          <div class="absolute left-0 hidden group-hover:block w-[300px] bg-white shadow-lg z-50">
            <div class="h-1 bg-primary"></div>
            <div class="p-4">
              <div v-for="(column, colIndex) in menu.columns" :key="colIndex">
                <div v-for="(category, catIndex) in column" :key="catIndex" class="mb-6 last:mb-0">
                  <h3 class="font-bold text-primary mb-3">{{ category.title }}</h3>
                  <div class="flex flex-col space-y-3">
                    <a v-for="(link, linkIndex) in category.links" 
                       :key="linkIndex"
                       :href="link.url"
                       class="text-sm text-gray-600 hover:text-primary">
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
</template>

<script setup lang="ts">
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
.group:hover .group-hover\:block {
  display: block;
}
</style> 