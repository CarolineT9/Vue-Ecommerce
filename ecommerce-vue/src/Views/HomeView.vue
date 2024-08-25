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
import CategoryList from '../components/CategoryList.vue'
import ProductList from '../components/ProductList.vue'

export default {
  components: { ProductList, CategoryList },


}
</script>

<style></style>