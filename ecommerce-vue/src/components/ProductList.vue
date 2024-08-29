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

export default {
  components: {
    ProductCard,
    ShoppingCart
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Cadeira', price: 700.00, image: '/public/cadeira_gamer.png', categoryId: 2 },
        { id: 2, name: 'Mouse', price: 10.00 , image: '/public/mouse.png', categoryId: 1},
        { id: 3, name: 'Monitor', price: 400.00, image: '/public/monitor.png', categoryId: 2},
        { id: 4, name: 'Tablet', price: 120.00, image: '/public/tablet.png', categoryId: 2 },
        { id: 5, name: 'Teclado', price: 450.00, image:'/public/teclado.png', categoryId: 1},
        { id: 6, name: 'Impressora', price: 900.00, image: '/public/impressora.png', categoryId: 2}
      ]
    }
  }
}
</script>

<style>
/* Estilização específica do componente pode ser adicionada aqui */
</style>
