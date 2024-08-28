<template>
  <v-card >
    <v-card-title> Produtos adicionados ao carrinho: </v-card-title>
    <v-card-text>
      <v-table>
        <thead v-if="details.length > 0">
          <tr>
            <th class="text-left">Produto</th>
            <th class="text-center">Quantidade</th>
            <th class="text-left">Preço</th>
            <th class="text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <shopping-car-item
            :detail="detail"
            v-for="detail in details"
            :key="detail.product.id"
          />
        </tbody>
      </v-table>
      <p >
        Você ainda não adicionou produtos ao carrinho de compras.
        <router-link to="/">Clique aqui</router-link> para ver os produtos
        disponíveis.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../../store/cart";
import ShoppingCarItem from "./ShoppingCarItem.vue";
export default {
  components: {
    ShoppingCarItem,
  },
  computed: {
    cartStore() {
      return useCartStore();
    },
    // details() {
    //   return this.cartStore.details
    // }

    //uso de mapState do pinia para rastrear o estado do array details.
    //essa função faz exatamente o metodo descrito a cima.
    ...mapState(useCartStore, ["details"]),
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
      decrementQuantity: "decrement",
      incrementQuantity: "increment",
      deleteProduct: "deleteProduct",
    }),
  },
};
</script>

<style>
/* Adicione estilos se necessário */
</style>
