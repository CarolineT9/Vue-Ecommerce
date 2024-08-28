<template>
  <v-row>
    <v-col cols-8>
        <shopping-cart />
    </v-col>
    <v-col cols="4">
      <summary-cart/>
    </v-col>
  </v-row>
  
</template>
<script>
import ShoppingCart from '../components/Cart/ShoppingCart.vue';
import SummaryCart from '../components/Cart/SummaryCart.vue';
export default{
  components: {
    ShoppingCart,
    SummaryCart
  }
}

</script>

<style></style>