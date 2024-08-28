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
        { id: 1, name: 'Cadeira', price: 700.00, image: 'https://images.afw.com/images/thumbs/0146271_2334-GY.jpg.jpeg' },
        { id: 2, name: 'Mouse', price: 10.00 , image: '	https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-gaming-mouse/plasma-hero-carbon-gallery-1.png?v=1'},
        { id: 3, name: 'Monitor', price: 400.00, image: '	https://images.philips.com/is/image/philipsconsumer/3b0fe009e2ce4883b552b0220060489c?wid=700&hei=700&$pnglarge$' },
        { id: 4, name: 'Tablet', price: 120.00, image: 'https://cdn.pixabay.com/photo/2019/03/19/17/55/tab-4066426_1280.png' },
        { id: 5, name: 'Teclado', price: 450.00, image:'https://cdn.vectorstock.com/i/500p/49/71/black-keyboard-vector-644971.jpg' },
        { id: 6, name: 'Impressora', price: 900.00, image: 'https://preview.free3d.com/img/2020/03/2279716204216059679/ekux1cwn.jpg' }
      ]
    }
  }
}
</script>

<style>
/* Estilização específica do componente pode ser adicionada aqui */
</style>
