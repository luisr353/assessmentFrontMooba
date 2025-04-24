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
      <SliderWellness />
      <BannerFinish />
      <SliderBrandsFeatured />
      <SliderMarcas class="pb-10" />
    </div>
  </div>
  <Footer class="mt-10"/>
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
import SliderMarcas from './components/SliderMarcas.vue'
import SliderWellness from './components/SliderWellness.vue'
import SliderBrandsFeatured from './components/SliderBrandsFeatured.vue'
</script>
