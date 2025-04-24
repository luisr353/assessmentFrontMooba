<template>
  <div class="bg-slate-50">
    <div class="container mx-auto">
      <PromoSlider />
      <FeaturedProducts />
      <Banner 
        image-src="/images/banner-medium.png" 
        alt-text="Banner promocional"
      />
      <FeaturedOffers />
      <ProductCategories />
      <MostSearchedProducts />
      <SliderWellness />
      <Banner 
        image-src="/images/bn-vida-sana.png" 
        alt-text="Vida sana"
        additional-classes="my-4"
      />
      <SliderBrandsFeatured />
      <SliderMarcas class="pb-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PromoSlider from '~/components/PromoSlider.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
import ProductCategories from '~/components/ProductCategories.vue'
import Banner from '~/components/Banner.vue'
import SliderWellness from '~/components/SliderWellness.vue'
import SliderBrandsFeatured from '~/components/SliderBrandsFeatured.vue'
import SliderMarcas from '~/components/SliderMarcas.vue'
import FeaturedOffers from '~/components/FeaturedOffers.vue'
import MostSearchedProducts from '~/components/MostSearchedProducts.vue'

</script> 