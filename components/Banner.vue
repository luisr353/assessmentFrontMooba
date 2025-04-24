<!-- components/common/Banner.vue -->
<template>
    <div class="w-full">
      <img 
        :src="imageSrc" 
        :alt="altText" 
        :class="['w-full h-auto', additionalClasses]"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    imageSrc: string
    altText: string
    additionalClasses?: string
  }
  
  const props = defineProps<Props>()
  </script>