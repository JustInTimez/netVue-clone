<script setup>
import LoginForm from "../components/LoginForm.vue"
</script>

<template>
  <div class="container">
    <LoginForm></LoginForm>
  </div>
</template>
  
<style scoped>
#app {
  margin: 0;
  padding: 0;
  color: white;

}

.container {
  margin: 0 auto;
  padding: 0 5%;
}

@media (max-width: 1024px) {
  .container {
    margin: 0 auto;
    padding: 0 5%;
  }
}

@media (max-width: 740px) {
  .container {
    margin: 0 auto;
    padding: 0 5%;
  }
}
</style>