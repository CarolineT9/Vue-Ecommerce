<template>
  <v-card class="mt-4">
    <v-card-title>
      Produtos adicionados ao carrinho:
    </v-card-title>
    <v-card-text>
      <v-list-item v-for="detail in details" :key="detail.id">
        <v-list-item-title>
          Product {{ detail.id }} (Qty: {{ detail.quantity }})
        </v-list-item-title>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
import { useCartStore } from '../store/cart'

export default {
  computed: {
    details() {
      const cartStore = useCartStore()
      return cartStore.details
    }
  }
}
</script>

<style>
/* Adicione estilos se necessário */
</style>
