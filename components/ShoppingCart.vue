<template>
  <div class="cart-container" :class="{ 'cart-open': isOpen }">
    <div class="cart-header">
      <h2>Mi carrito</h2>
      <button class="close-button" @click="toggleCart">&times;</button>
    </div>
    
    <div v-if="items.length === 0" class="empty-cart">
      <div class="empty-cart-content">
        <img src="/assets/icons/cart-empty.svg" alt="Carrito vacío" class="empty-cart-icon">
        <p class="empty-cart-title">Tu carrito está vacío</p>
        <p class="empty-cart-subtitle">Agrega productos a tu carrito para comenzar a comprar</p>
      </div>
    </div>
    
    <div v-else class="cart-items">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.title" class="item-image">
        <div class="item-details">
          <h3>{{ item.title }}</h3>
          <p class="price">{{ formatPrice(item.price) }}</p>
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
        </div>
        <button class="remove-button" @click="removeItem(item.id)">&times;</button>
      </div>
    </div>
    
    <div v-if="items.length > 0" class="cart-footer">
      <div class="total">
        <span>Total:</span>
        <span class="total-price">{{ formatPrice(totalPrice) }}</span>
      </div>
      <button class="checkout-button" @click="checkout">Proceder al pago</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items, isOpen, totalPrice } = storeToRefs(cartStore)
const { toggleCart, removeItem, updateQuantity } = cartStore

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}

function checkout() {
  // Aquí iría la lógica para procesar el pago
  alert('¡Gracias por tu compra!')
  cartStore.clearCart()
  toggleCart()
}
</script>

<style scoped>
.cart-container {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.cart-open {
  right: 0;
}

.cart-header {
  padding: 1.25rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.2s;
}

.close-button:hover {
  color: #333;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  transition: background-color 0.2s;
}

.cart-item:hover {
  background-color: #f9f9f9;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

.price {
  color: #007bff;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls button {
  background: #f0f0f0;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.quantity-controls button:hover {
  background: #e0e0e0;
}

.quantity-controls span {
  min-width: 24px;
  text-align: center;
  font-weight: 500;
}

.remove-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.remove-button:hover {
  color: #e74c3c;
}

.cart-footer {
  padding: 1.25rem;
  border-top: 1px solid #eee;
  background-color: #f8f9fa;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.total-price {
  color: #007bff;
}

.checkout-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.checkout-button:hover {
  background-color: #0069d9;
}

.empty-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.empty-cart-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
}

.empty-cart-icon {
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.empty-cart-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.empty-cart-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}
</style> 