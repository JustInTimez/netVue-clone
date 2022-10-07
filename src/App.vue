<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

export default {
  components: {
    Header,
    RouterView
  },
}
</script>

<template>
  <Header></Header>
  <RouterView />

</template>

<style scoped>


</style>
