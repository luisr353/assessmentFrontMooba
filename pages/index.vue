<template>
  <div class="bg-slate-50">
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
</template>

<script setup lang="ts">
import PromoSlider from '~/components/PromoSlider.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
import ProductCategories from '~/components/ProductCategories.vue'
import BannerMedium from '~/components/BannerMedium.vue'
import ProductSlider from '~/components/ProductSlider.vue'
import ProductsMoreSearched from '~/components/ProductsMoreSearched.vue'
import SliderWellness from '~/components/SliderWellness.vue'
import BannerFinish from '~/components/BannerFinish.vue'
import SliderBrandsFeatured from '~/components/SliderBrandsFeatured.vue'
import SliderMarcas from '~/components/SliderMarcas.vue'

</script> 