<template>
  <v-row>
    <v-col v-for="p in products" :key="p.id" cols="4">
      <product-card :product="p"/>
    </v-col>
  </v-row>
  
</template>

<script>
import ProductCard from './ProductCard.vue'; // Certifique-se de importar o componente filho
import ShoppingCart from '../components/Cart/ShoppingCart.vue';
import { mapState } from 'pinia';
import {useProductsStore} from '../store/products'

export default {
  components: {
    ProductCard,
    ShoppingCart
  },
  computed: {
    ...mapState(useProductsStore, ['products'])
  }
}
</script>

<style>
/* Estilização específica do componente pode ser adicionada aqui */
</style>
