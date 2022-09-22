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
            <img src="@/assets/netflix-logo.png" class="logo" alt="netVue Logo" width="200" height="100">
          </a>
        </div>
        <!-- Remove these links? Won't be needed to navigate between the two as it will be automated (logging in and out) -->
        <RouterLink to="/" hidden>Login</RouterLink>
        <RouterLink to="/dashboard" hidden>Dashboard</RouterLink>
      </nav>
      <RouterView />
    </div>
  </header>
  <footer class="container-fluid">
    <div class="container">
      <p class="lead my-4 text-center">Questions? Call <a href="tel:0 801-000-723">0 810-000-723</a></p>
    </div>
    <div class="row row-cols-2 row-cols-lg-6">
      <div class="col">
        <ul class="nav flex-column footer-links">
          <li class="nav-item mb-2"><a href="https://help.netflix.com/support/412" target="_blank" class="nav-link p-0 text-muted">FAQ</a></li>
          <li class="nav-item mb-2"><a href="https://help.netflix.com/legal/termsofuse" class="nav-link p-0 text-muted">Terms of Use</a></li>
          <li class="nav-item mb-2"><a href="https://www.netflix.com/za/login#" class="nav-link p-0 text-muted">Cookie Preferences</a></li>
        </ul>
      </div>
      <div class="col">
        <ul class="nav flex-column footer-links">
          <li class="nav-item mb-2"><a href="https://help.netflix.com/" class="nav-link p-0 text-muted">Help Center</a></li>
          <li class="nav-item mb-2"><a href="https://help.netflix.com/legal/privacy" class="nav-link p-0 text-muted">Privacy</a></li>
          <li class="nav-item mb-2"><a href="https://help.netflix.com/legal/corpinfo" class="nav-link p-0 text-muted">Corporate Information</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

template {
  background-image: url('../public/images/login-bg.jpg');
  background-color: black;
}

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

.footer-links {
  font-size: 13px;
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
  line-height: 45px;
  }
}
</style>