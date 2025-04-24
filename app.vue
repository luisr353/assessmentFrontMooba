<template>
  <div class="bg-slate-50">
    <TopBanner />
    <Navigation />
    <MainMenu />
    <div class="container mx-auto">
      <PromoSlider />
      <FeaturedProducts />
      <BannerMedium />
      <ProductSlider />
      <ProductCategories />
      <ProductsMoreSearched />
      <BannerFinish />
      <PromoSlider />
      
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import TopBanner from '~/components/TopBanner.vue'
import Navigation from '~/components/Navigation.vue'
import MainMenu from '~/components/MainMenu.vue'
import PromoSlider from '~/components/PromoSlider.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
import ProductCategories from '~/components/ProductCategories.vue'
import ProductSlider from '~/components/ProductSlider.vue'
import BannerMedium from '~/components/BannerMedium.vue'
import Footer from '~/components/Footer.vue'
import BannerFinish from './components/BannerFinish.vue'
</script>
