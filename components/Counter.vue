<template>
  <div class="flex items-center space-x-4">
    <button 
      @click="counter.decrement"
      class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
    >
      -
    </button>
    <span class="text-xl font-bold">{{ counter.count }}</span>
    <button 
      @click="counter.increment"
      class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()
</script> 