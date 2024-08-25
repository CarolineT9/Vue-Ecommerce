<template>
  <v-row>
    <v-col v-for="p in products" :key="p.id" cols="4">
      <product-card :product="p"/>
    </v-col>
  </v-row>
  
</template>

<script>
import ProductCard from './ProductCard.vue'; // Certifique-se de importar o componente filho
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: {
    ProductCard,
    ShoppingCart
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Mouse', price: 120.00 },
        { id: 2, name: 'Teclado', price: 250.00 },
        { id: 3, name: 'Monitor', price: 900.00 },
        { id: 1, name: 'Mouse', price: 120.00 },
        { id: 2, name: 'Teclado', price: 250.00 },
        { id: 3, name: 'Monitor', price: 900.00 }
      ]
    }
  }
}
</script>

<style>
/* Estilização específica do componente pode ser adicionada aqui */
</style>
