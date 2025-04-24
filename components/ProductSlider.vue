<template>
  <div class="banner">
    <div class="titulo-grande pb-5 font-semibold cursor-default flex justify-start items-center">Las mejores ofertas <div class="icono"><img src="/assets/icons/alarma.png" alt="" style="width: 24px"></div> <div class="vertodo" onclick="parent.location='/busqueda/[sales]'">Ver todos</div></div>
    <div class="swiper-container">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div v-for="product in products" :key="product.id" class="swiper-slide slide-product">
            <div class="product-item bg-white" :class="{ agotado: !product.available }">
              <div class="item">
                <div class="image">
                  <a :href="product.url">
                    <img :src="product.image" :alt="product.title" @error="handleImageError">
                  </a>
                </div>
                <div class="info">
                  <a :href="product.url">
                    <div class="titulo">{{ product.title }}</div>
                    <div class="precio">${{ formatPrice(product.price) }}</div>
                    <div v-if="product.oldPrice" class="antes">${{ formatPrice(product.oldPrice) }}</div>
                    <div class="contenido">{{ product.content }}</div>
                    <div v-if="product.discount" class="descuento"><b>{{ product.discount }}%</b></div>
                    <div v-if="!product.available" class="descuento">No disponible</div>
                  </a>
                  <div class="button-add">
                    <button @click="addToCart(product.id)" class="bg-primary">
                      <img src="/assets/icons/cart-button.svg" alt="" style="width:20px; padding-right: 7px">Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev-eco bg-primary">
          <img src="/assets/icons/left.svg" alt="" style="width:20px">
        </div>
        <div class="swiper-button-next-eco bg-primary">
          <img src="/assets/icons/right.svg" alt="" style="width:20px">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { useCartStore } from '../stores/cart'

interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  content: string;
  image: string;
  url: string;
  available: boolean;
}

const products = ref<Product[]>([
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 10250,
    content: 'gramo a $109',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },
  {
    id: '370180',
    title: "Crema Pond's Clarant B3 Piel Normal A Grasa Porte x 100G",
    price: 29300,
    content: 'unidad a 2,441.67',
    image: 'assets/products/product_1.png',
    url: '/products/product1/370180', 
    available: true
  },

])

const cartStore = useCartStore()

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/assets/products/product_1.png' // imagen por defecto
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO').format(price)
}

const addToCart = (productId: string) => {
  const product = products.value.find(p => p.id === productId)
  if (product && product.available) {
    cartStore.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    })
    cartStore.toggleCart()
  }
}

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 6,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next-eco',
      prevEl: '.swiper-button-prev-eco',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
    },
  })
})
</script>

<style scoped>
.banner {
  width: 100%;
  margin: 2rem 0;
  padding: 0 64px;
  position: relative;
}

.swiper-container {
  overflow: hidden;
  position: relative;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: auto;
  height: auto;
}

@media (max-width: 768px) {
  .banner {
    padding: 0 20px;
  }

  .swiper-slide {
    width: calc(50% - 5px) !important;
  }

  .product-item {
    margin: 0 5px;
  }

  .swiper-button-prev-eco {
    left: 5px;
  }

  .swiper-button-next-eco {
    right: 5px;
  }
}

.titulo-grande {
    color: #111;
    font-size: 1.4em;
    font-weight: 600;
    cursor: default;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.product-item {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-item.agotado {
  opacity: 0.7;
}

.item {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image {
  text-align: center;
  margin-bottom: 1rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.info {
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.info > a {
  flex-grow: 1;
  text-decoration: none;
}

.titulo {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.precio {
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
}

.antes {
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
}

.contenido {
  font-size: 0.8em;
    color: #666;
    font-weight: 300;
    margin: 0px 0px 10px 0px;
}

.descuento {
  color: #e4022d;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.button-add button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 1rem;
}

.refresh button:hover {
  background: #0056b3;
}

.swiper-button-prev-eco,
.swiper-button-next-eco {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  border-radius: 50%;
  padding: 7px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev-eco {
  left: 20px;
  transform: translateX(-50%) translateY(-50%);
}

.swiper-button-next-eco {
  right: 20px;
  transform: translateX(50%) translateY(-50%);
}

.swiper-button-prev-eco img,
.swiper-button-next-eco img {
  width: 35px;
  height: 35px;
}
</style> 