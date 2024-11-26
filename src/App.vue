<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/structure/NavBar.vue'
import Footer1 from '../src/components/structure/Footer1.vue'
import { useAuthStore } from './stores/authentication';

export default{

  components: {
    NavBar, Footer1, RouterView, RouterLink,
  },

  data(){
    return{
      authStore: useAuthStore()
    }
  },

  mounted() {
    if (this.authStore.checkToken){
      this.authStore.clearUserData()
      location.reload()
    }
  }
  
};


</script>

<template>
  <NavBar />

  <RouterView />

  <Footer1 />
</template>

<style>


</style>
