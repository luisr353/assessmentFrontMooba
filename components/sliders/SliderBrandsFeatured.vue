
<template>
  <BaseCircleSlider
    title="Marcas destacadas 😊"
    :items="featuredBrands"
    :show-titles="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
  />
</template>


<script setup lang="ts">
import BaseCircleSlider from './BaseCircleSlider.vue'
const featuredBrands = [
{

  image: '/assets/products/colgate.png',
  url: '#'
  },
  {
  image: '/assets/products/engystol.png',
  url: '#'
  },
  {
  image: '/assets/products/electrolit.png',
  url: '#'
  },
  {

  image: '/assets/products/neutrogena.png',
  url: '#'
  },
  {
  image: '/assets/products/vick.png',
  url: '#'
  },
  {

  image: '/assets/products/garganta.png',
  url: '#'
  }
  // ... otros items
]
</script>