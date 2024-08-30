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
import { useCategoriesStore } from '../store/categories'

export default {
  components: { ProductList, LeftMenu },


  
    beforeRouteEnter(to){
    console.log('beforeRouteEnter', to.params)
    const productsStore = useProductsStore()
    productsStore.selectCategory(to.params.categoryId)
  },
  beforeRouteUpdate(to){
        console.log('beforeRoute.update', to.params)
        const productsStore = useProductsStore()
        productsStore.selectCategory(to.params.categoryId)
    },
    mounted(){
      console.log('mounted')
      const productsStore = useProductsStore()
      productsStore.fetchProducts()

      const categoriesStore = useCategoriesStore()
      categoriesStore.fetchCategories()

    }

}
</script>

<style></style>