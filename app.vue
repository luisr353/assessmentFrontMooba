<template>
 <div class="bg-slate-50">
 
    <TopBanner />
    <Navigation />
    <MainMenu />
    <ShoppingCart />
   
    <NuxtPage />
  
    <Footer class="mt-10"/>
  </div>
</template>

<script setup lang="ts">
import TopBanner from '~/components/TopBanner.vue'
import Navigation from '~/components/Navigation.vue'
import MainMenu from '~/components/MainMenu.vue'
import Footer from '~/components/Footer.vue'
import ShoppingCart from '~/components/ShoppingCart.vue'
</script>
