import { defineStore } from 'pinia'
import { ref, computed, watch, onMounted } from 'vue'

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

// Función para obtener datos del localStorage de forma segura
function getFromLocalStorage(key: string, defaultValue: any): any {
  if (process.client) {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : defaultValue
  }
  return defaultValue
}

// Función para guardar datos en localStorage de forma segura
function saveToLocalStorage(key: string, value: any): void {
  if (process.client) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const useCartStore = defineStore('cart', () => {
  // Inicializar con un array vacío
  const items = ref<CartItem[]>([])
  const isOpen = ref(false)

  // Cargar datos desde localStorage cuando el componente se monte
  onMounted(() => {
    try {
      const storedItems = localStorage.getItem('cart-items')
      if (storedItems) {
        items.value = JSON.parse(storedItems)
      }
    } catch (error) {
      console.error('Error al cargar el carrito desde localStorage:', error)
    }
  })

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  function addItem(product: Omit<CartItem, 'quantity'>) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
    
    // Guardar en localStorage después de cada modificación
    saveToLocalStorage()
  }

  function removeItem(productId: string) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
      // Guardar en localStorage después de cada modificación
      saveToLocalStorage()
    }
  }

  function updateQuantity(productId: string, quantity: number) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(0, quantity)
      if (item.quantity === 0) {
        removeItem(productId)
      } else {
        // Guardar en localStorage después de cada modificación
        saveToLocalStorage()
      }
    }
  }

  function clearCart() {
    items.value = []
    // Guardar en localStorage después de cada modificación
    saveToLocalStorage()
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  // Función para guardar en localStorage
  function saveToLocalStorage() {
    try {
      localStorage.setItem('cart-items', JSON.stringify(items.value))
    } catch (error) {
      console.error('Error al guardar el carrito en localStorage:', error)
    }
  }

  return {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart
  }
}) 