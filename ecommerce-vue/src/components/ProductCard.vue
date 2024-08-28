<template>
  <v-container>
    <v-card>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-img class="align-end text-white" height="200" :src="productImageUrl" cover></v-img>
      <v-card-text>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde amet rerum sed debitis deleniti saepe. Veniam ipsum autem commodi?</p>
        <v-chip class="mt-3">
          R$: {{ product.price }}
        </v-chip>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" @click="onAddButtonClick">Colocar no carrinho</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import {useCartStore} from '../store/cart'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods:{
    onAddButtonClick(){
      const cartStore = useCartStore();
      cartStore.addProduct(this.product);
    }
  },
  computed:{
    productImageUrl(){
      return this.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    }
  }
}
</script>

<style>
/* Estilização específica do componente pode ser adicionada aqui */
</style>
