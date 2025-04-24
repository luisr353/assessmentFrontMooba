<template>
  <div class="min-h-screen bg-gray-50">
    <Navigation />
    <main>
      <slot />
    </main>
    <ShoppingCart />
    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          © 2025 Luis R. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navigation from '~/components/Navigation.vue'
import ShoppingCart from '~/components/ShoppingCart.vue'
</script> 