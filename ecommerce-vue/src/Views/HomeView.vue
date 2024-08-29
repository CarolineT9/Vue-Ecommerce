<template>
  <div>
    <v-row>
      <v-col cols="2">
       <category-list/>
      </v-col>
      <v-col cols="10">
        <product-list />
      </v-col>
    </v-row>


  </div>


</template>

<script>
import { mapActions } from 'pinia'
import CategoryList from '../components/CategoryList.vue'
import ProductList from '../components/ProductList.vue'
import { useProductsStore } from '../store/products'

export default {
  components: { ProductList, CategoryList },


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