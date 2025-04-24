<script setup lang="ts">
import BaseCircleSlider from './BaseCircleSlider.vue'
const wellnessItems = [
{
      title: 'Genéricos',
      image: '/assets/products/generico.png',
      url: '#'
    },
    {
      title: 'Descongestionantes tópicos',
      image: '/assets/products/vaporud.png',
      url: '#'
    },
    {
      title: 'Diarrea',
      image: '/assets/products/diarrea.png',
      url: '#'
    },
    {
      title: 'Desodorantes',
      image: '/assets/products/desodorante.png',
      url: '#'
    },
    {
      title: 'Suplemento nutricional',
      image: '/assets/products/suplemento.png',
      url: '#'
    },
    {
      title: 'Enjuagues',
      image: '/assets/products/enjuague.png',
      url: '#'
    },
    {
      title: 'Garganta',
      image: '/assets/products/garganta.png',
      url: '#'
    }
]
</script>

<template>
  <BaseCircleSlider
    title="Inspirados en tu bienestar ⭐"
    :items="wellnessItems"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
  />
</template>