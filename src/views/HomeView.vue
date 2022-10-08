<script>
import MoviesList from '../components/MoviesList.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    MoviesList
  }
}
</script>

<template>
  <div class="jumbotron jumbotron-fluid">
    <div style="
      background-image: url('https://wallpapercave.com/wp/wp6193606.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
     " class="text-left text-white pt-5">
      <div class="mt-5 px-5">
        <h1 class="mb-3 fw-bold display-1">
          COMING SOON
        </h1>
        <p class="mb-4 fw-semibold lead">
          Check out this upcoming title!
        </p>

        <div>
          <div class="baseButtons">
            <button class="butts fw-bold text-center">
              Play
            </button>
            <button class="butts fw-bold text-center">
              More Info
            </button>
          </div>
        </div>
      </div>
      <div class="fadeBot"></div>
    </div>
  </div>
  <div class="container-fluid">
    <MoviesList genre="Drama" pagination="0" />
    <MoviesList genre="Romance" pagination="0" />
    <MoviesList genre="Horror" pagination="0" />
    <MoviesList genre="Action" pagination="0" />
  </div>
  <footer class="container-fluid bg-dark">
    <div class="container">
      <p class="text-white my-4 text-center">Questions? Call <a href="tel:0 801-000-723">0 810-000-723</a></p>
    </div>
    <div class="row">
      <div class="col-lg-6 text-center">
        <ul class="flex-column footer-links">
          <li class="mb-2"><a href="https://help.netflix.com/support/412" target="_blank" class="p-0 text-muted">FAQ</a>
          </li>
          <li class="mb-2"><a href="https://help.netflix.com/legal/termsofuse" target="_blank"
              class="p-0 text-muted">Terms of Use</a></li>
          <li class="mb-2"><a href="https://www.netflix.com/za/login#" target="_blank" class="p-0 text-muted">Cookie
              Preferences</a></li>
        </ul>
      </div>
      <div class="col-lg-6 text-center">
        <ul class="flex-column footer-links">
          <li class="mb-2"><a href="https://help.netflix.com/" target="_blank" class="p-0 text-muted">Help Center</a>
          </li>
          <li class="mb-2"><a href="https://help.netflix.com/legal/privacy" target="_blank"
              class="p-0 text-muted">Privacy</a></li>
          <li class="mb-2"><a href="https://help.netflix.com/legal/corpinfo" target="_blank"
              class="p-0 text-muted">Corporate Information</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.baseButtons {
  border: 0px none;
  border-radius: 4px;
  display: flex;
  opacity: 1;
  padding: 0.8rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  position: relative;
  user-select: none;
  word-break: break-word;
  white-space: nowrap;
  padding-left: 2rem;
}

.butts {
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

}

.butts:hover {
  color: black;
  background-color: #e6e6e6;
  transition: all 0.3s;
}

/* Create the fade effect bottom of hero */
.fadeBot {
  height: 4rem;
  background: linear-gradient(180deg, transparent, rgba(33, 37, 41, 1) 85%);
}
</style>