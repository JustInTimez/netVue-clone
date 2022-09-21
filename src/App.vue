<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="navbar navbar-dark">
        <!-- <img alt="netVue logo" class="logo" src="@/assets/netflix-logo.png"> -->
        <div id="navHeading" class="navbar-brand">
          <a class="navbar-brand" href="#">
            <img src="@/assets/netflix-logo.png" alt="netVue Logo" width="200" height="100">
          </a>




        </div>
        <!-- Remove these links? Won't be needed to navigate between the two as it will be automated (logging in and out) -->        
        <RouterLink to="/" hidden>Login</RouterLink>
        <RouterLink to="/dashboard" hidden>Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  height: 100px;
  width: 200px;
  vertical-align: middle;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 740px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    height: 20px;
    width: 75px;

  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}

@media (min-width: 440px) {
  .logo {
  height: 20px;
  width: 75px;
  }
}
</style>
