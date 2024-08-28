<template>
  <tr>
    <td>
      <v-avatar>
        <v-img class="align-end text-white" :src="productImageUrl" cover></v-img>
      </v-avatar>
    </td>
    <td class="text-center">
      <v-btn size="x-small" @click="incrementQuantity(detail.product.id)">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      Quantidade: {{ detail.quantity }}
      <v-btn size="x-small" @click="decrementQuantity(detail.product.id)">
        <v-icon>mdi-minus</v-icon>
      </v-btn>

    </td>
    <td>
      {{ detail.product.price }}
    </td>
    <td>
      {{subtotal}}
    </td>
    <td>
      <v-btn size="x-small" @click="deleteProduct(detail.product.id)">
        <v-icon class="ml-2">mdi-delete</v-icon>
      </v-btn>
    </td>
  </tr>

</template>

<script>
import { mapActions} from 'pinia'
import { useCartStore } from '../../store/cart'
export default {
  props: {
    detail: {
      type: Array,
      required: true
    }

  },
  methods: {
    // decrementQuantity(productId) {
    //   this.cartStore.decrement(productId)
    // },
    // incrementQuantity(productId) {
    //   this.cartStore.increment(productId)
    // },
    // deleteProduct(productId) {
    //   this.cartStore.deleteProduct(productId)
    // },



    //utilização de mapAction para mapear métodos e açoes. Esse código é uma abreviação dos métodos a cima. 

    ...mapActions(useCartStore, {
      decrementQuantity: 'decrement',
      incrementQuantity: 'increment',
      deleteProduct: 'deleteProduct'
    })
  },
  computed: {
    productImageUrl() {
      return this.detail.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    subtotal(){
      return this.detail.product.price * this.detail.quantity
    }
  }
}
</script>

<style></style>