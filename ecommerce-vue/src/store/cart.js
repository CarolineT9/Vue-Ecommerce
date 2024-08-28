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
    },
    totalAmount: (state) => {
      let total = 0
      state.details.forEach(d => {
       total += d.product.price * d.quantity
       
    })
    return total

    }
  },
  actions: {
    //função para adicionar o produto ao carrinho de compra
    addProduct(product) {
      const detailFound = this.details.find(d => d.product.id === product.id)
      if (detailFound) {
        detailFound.quantity += 1
      } else {
        this.details.push({
          product,
          quantity: 1
        })
      }
    },
    //função para deletar o produto do carrinho de compras
    deleteProduct(productId){
    
      const index = this.details.findIndex(d => d.product.id === productId)
      this.details.splice(index, 1)
    },
    //função que aumenta quantidade de produto no carrinho
    increment(productId){
      const detailFound = this.details.find(d => d.product.id === productId)
      if(detailFound){
        detailFound.quantity += 1
      }
    },
    //função que diminui quatidade de produto no carrinho
    decrement(productId){
      const detailFound = this.details.find(d => d.product.id === productId)
      if(detailFound){
        detailFound.quantity -= 1
        if(detailFound.quantity === 0){
          this.deleteProduct(productId)
        }
      }
    }
  }
})
