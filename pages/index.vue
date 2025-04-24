<script setup lang="ts">
import PromoSlider from '~/components/PromoSlider.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
import ProductCategories from '~/components/ProductCategories.vue'
import Banner from '~/components/Banner.vue'
import SliderWellness from '~/components/sliders/SliderWellness.vue'
import SliderBrandsFeatured from '~/components/sliders/SliderBrandsFeatured.vue'
import SliderMarcas from '~/components/SliderMarcas.vue'
import FeaturedOffers from '~/components/FeaturedOffers.vue'
import MostSearchedProducts from '~/components/MostSearchedProducts.vue'

</script> 
<template>
  <PromoSlider />
  <div id="home-cont" class="max-width bg-slate-50">
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
</template>

<style scoped>
#home-cont {
    position: relative;
}
.max-width {
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 80px;
}
</style>


