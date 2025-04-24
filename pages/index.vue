<template>
  <div>
    <!-- Banner principal -->
    <div class="bg-primary text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">La Economía Droguería</h1>
        <p class="text-xl mb-8">Los mejores precios en medicamentos y productos de salud</p>
        <button class="bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors">
          Ver ofertas
        </button>
      </div>
    </div>

    <!-- Productos en oferta -->
    <div class="container mx-auto px-4 py-8">
      <ProductSlider />
    </div>

    <!-- Lo más buscado -->
    <div class="container mx-auto px-4 py-8">
      <ProductsMoreSearched />
    </div>

    <!-- Productos destacados -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-8">Productos Destacados</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import ProductSlider from '~/components/ProductSlider.vue'
import ProductsMoreSearched from '~/components/ProductsMoreSearched.vue'

// Datos de ejemplo
const products = [
  {
    id: '1',
    title: 'Paracetamol 500mg',
    price: 15000,
    image: 'https://via.placeholder.com/300x300?text=Paracetamol'
  },
  {
    id: '2',
    title: 'Ibuprofeno 400mg',
    price: 18000,
    image: 'https://via.placeholder.com/300x300?text=Ibuprofeno'
  },
  {
    id: '3',
    title: 'Omeprazol 20mg',
    price: 25000,
    image: 'https://via.placeholder.com/300x300?text=Omeprazol'
  },
  {
    id: '4',
    title: 'Aspirina 100mg',
    price: 12000,
    image: 'https://via.placeholder.com/300x300?text=Aspirina'
  },
  {
    id: '5',
    title: 'Loratadina 10mg',
    price: 22000,
    image: 'https://via.placeholder.com/300x300?text=Loratadina'
  },
  {
    id: '6',
    title: 'Vitamina C 500mg',
    price: 30000,
    image: 'https://via.placeholder.com/300x300?text=Vitamina+C'
  },
  {
    id: '7',
    title: 'Diclofenaco 100mg',
    price: 20000,
    image: 'https://via.placeholder.com/300x300?text=Diclofenaco'
  },
  {
    id: '8',
    title: 'Metformina 850mg',
    price: 28000,
    image: 'https://via.placeholder.com/300x300?text=Metformina'
  }
]
</script> 