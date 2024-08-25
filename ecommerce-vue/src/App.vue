<template>
  <v-app>
    <top-bar/>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
<script>
import TopBar from './components/TopBar.vue'

export default{
  components:{
    TopBar
  }
}
</script>