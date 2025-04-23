<template>
  <div>
    <TopBanner />
    <Navigation />
    <MainMenu />
    <div class="container mx-auto">
      <PromoSlider />
      <FeaturedProducts />
      <BannerMedium />
      <ProductSlider />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBanner from '~/components/TopBanner.vue'
import Navigation from '~/components/Navigation.vue'
import MainMenu from '~/components/MainMenu.vue'
import PromoSlider from '~/components/PromoSlider.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
import ProductSlider from '~/components/ProductSlider.vue'
import BannerMedium from '~/components/BannerMedium.vue'
</script>
