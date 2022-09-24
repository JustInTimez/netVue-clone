<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import HomeView from './views/HomeView.vue'

</script>

<template>
  <Header></Header>
  <!-- <HomeView></HomeView> -->

  <div class="container-fluid myContainer">
  <!-- Views in here --> 
  

  </div>

  <!-- previous footer here -->
  <Footer></Footer>
  
  <RouterView />
</template>

<style scoped>


</style>
