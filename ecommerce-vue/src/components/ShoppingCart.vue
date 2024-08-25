<template>
  <v-card class="mt-4">
    <v-card-title>
      Produtos adicionados ao carrinho:
    </v-card-title>
    <v-card-text>
      <v-list v-if="details.length > 0">
        <v-list-item v-for="detail in details" :key="detail.id">
        <v-list-item-title>
          Product {{ detail.id }} 
          <v-btn size="x-small" @click="incrementQuantity(detail.id)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          Quantidade: {{ detail.quantity }}
          <v-btn size="x-small" @click="decrementQuantity(detail.id)">
            <v-icon>mdi-minus</v-icon>
          </v-btn> 
          <v-btn size="x-small" @click="deleteProduct(detail.id)">
            <v-icon class="ml-2">mdi-delete</v-icon>
          </v-btn>   
        </v-list-item-title>
      </v-list-item>
      </v-list>
      <p>Você ainda não itens produtos ao carrinho de compras.
        <router-link   to="/" >Clique aqui</router-link> para ver os produtos disponíveis.
      </p>
      
    </v-card-text>
  </v-card>
</template>

<script>
import { useCartStore } from '../store/cart'

export default {
  computed: {
    cartStore(){
      return useCartStore()
    },
    details() {
      
      return this.cartStore.details
    }
  },
  methods:{
    decrementQuantity(productId){
      
      this.cartStore.decrement(productId)
    },
    incrementQuantity(productId){
      
      this.cartStore.increment(productId)
    },
    deleteProduct(productId){
      this.cartStore.deleteProduct(productId)
    }
  },

}
</script>

<style>
/* Adicione estilos se necessário */
</style>
