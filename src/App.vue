<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

</script>

<template>
  <Header></Header>


  <div class="container-fluid myContainer">
  <!-- Views in here -->

  </div>

  <!-- previous footer here -->

  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->
  <RouterView />
</template>

<style scoped>


</style>
