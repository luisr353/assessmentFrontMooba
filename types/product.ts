// types/product.ts
export interface Product {
    id: string
    title: string
    price: number
    oldPrice?: number
    discount?: number
    content: string
    image: string
    url: string
    available: boolean
  }