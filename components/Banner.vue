<script setup lang="ts">
interface Props {
  imageSrc: string
  altText: string
  additionalClasses?: string
}

const props = defineProps<Props>()

// Manejar carga de imagen (para placeholders)
const handleImageLoad = (event: Event) => {
const img = event.target as HTMLImageElement
if (img.dataset.src) {
  img.src = img.dataset.src
  img.classList.remove('opacity-0')
  img.classList.add('opacity-100')
}
}
</script>

<template>
    <div class="w-full">
      <img 
        :src="imageSrc" 
        :alt="altText" 
        :class="['w-full h-auto', additionalClasses]"
        loading="lazy"
        @load="handleImageLoad"
      />
    </div>
  </template>
