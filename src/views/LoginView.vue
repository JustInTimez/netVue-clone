<template>
  <main>
    <div class="container">
      <form @submit.prevent="submit">
        <h2 class="mb-3">Sign In</h2>
        <div class="input">
          <label for="email">Email or phone number</label>
          <input class="form-control" type="text" name="email" placeholder="email@address.com" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input class="form-control" type="password" name="password" placeholder="password123" />
        </div>
        <div class="alternative-option mt-4">
          New to Netflix? <a href="#">Sign up now</a>
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Sign In
        </button>
        <div class="alert alert-warning alert-dismissible fade show mt-5 d-none" role="alert" id="alert_1">
          HEY!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>

</script>

<style>
.container {
  margin: 0 auto;
  padding: 0 5%;
}

button {
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  background: #e50914;
  width: 100%;
  display: block;
  line-height: 40px;
  box-shadow: 0 1px 0 rgba(0,0,0,.55);
  color: #fff;
  border: 0;
}










</style>