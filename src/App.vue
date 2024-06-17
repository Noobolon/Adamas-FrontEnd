<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/structure/NavBar.vue'
import Footer1 from '../src/components/structure/Footer1.vue'

export default{
  name: "app",

  components: {
    NavBar, Footer1, RouterView, RouterLink,
  },

  mounted() {
    console.log(this.$path)
  }
}
</script>

<template>
  <NavBar />

  <RouterView />

  <Footer1 />
</template>

<style>


</style>
