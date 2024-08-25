// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: []
  }),
  getters:{
    // calcular um valor a partir de um estadoo...
    cartItemsCount: (state) =>{
      let count = 0
      state.details.forEach(detail => {
          count += detail.quantity
      })
      return count
    }
  },
  actions: {
    addProduct(productId) {
      const detailFound = this.details.find(d => d.id === productId)
      if (detailFound) {
        detailFound.quantity += 1
      } else {
        this.details.push({
          id: productId,
          quantity: 1
        })
      }
    }
  }
})
