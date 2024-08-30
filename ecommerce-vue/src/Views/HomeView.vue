<template>
  <div>
    <v-row>
      <v-col cols="2">
       <left-menu/>
      </v-col>
      <v-col cols="10">
        <product-list />
      </v-col>
    </v-row>


  </div>


</template>

<script>


import ProductList from '../components/ProductList.vue'
import { useProductsStore } from '../store/products'
import LeftMenu from '../components/Left/LeftMenu.vue'

export default {
  components: { ProductList, LeftMenu },


  
    beforeRouteEnter(to, from ){
    console.log('beforeRouteEnter', to.params)
    const productsStore = useProductsStore()
    productsStore.selectCategory(to.params.categoryId)
  },
  beforeRouteUpdate(to, from ){
        console.log('beforeRoute.update', to.params)
        const productsStore = useProductsStore()
        productsStore.selectCategory(to.params.categoryId)
    },

}
</script>

<style></style>