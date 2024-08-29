<template>
  <v-app-bar>
      <v-container class="fill-height d-flex align-center">
        <RouterLink to="/" custom v-slot="{ navigate }">
          <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home' || category" variant="text" @click="navigate"> Home </v-btn>
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
          <v-badge color="orange" :content="itemsCount" :model-value="itemsCount > 0">
            <v-btn prepend-icon="mdi-cart" :active="$route.name === 'cart'"   variant="text" @click="navigate"> Cart </v-btn>
          </v-badge>
        </RouterLink>
        <RouterLink to="/about-view" custom v-slot="{ navigate }">
          <v-btn prepend-icon="mdi-information"  :active="$route.name === 'about'"  variant="text" @click="navigate"> About </v-btn>
        </RouterLink>
      </v-container>
    </v-app-bar>
</template>

<script>
import { useCartStore } from '../store/cart'
export default {
  computed:{
    itemsCount(){
      const cartStore = useCartStore()
      return cartStore.cartItemsCount;
    }
  }
}
</script>

<style>

</style>