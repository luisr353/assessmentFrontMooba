<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <Counter />
    </div>
    <Features />
  </div>
</template>

<script setup lang="ts">
import Features from '~/components/Features.vue'
import Counter from '~/components/Counter.vue'

definePageMeta({
  layout: 'default'
})
</script> 