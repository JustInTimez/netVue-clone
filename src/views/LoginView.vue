<template>
    <main>
      <div class="container">
        <LoginForm></LoginForm>
      </div>
    </main>
  </template>
  
  <script setup>
  import LoginForm from "../components/LoginForm.vue"
  </script>
  
  <style>
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