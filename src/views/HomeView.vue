<script setup>
</script>

<template>

    <div class="jumbotron jumbotron-fluid">
      <div style="
        background-image: url('https://wallpapercave.com/wp/wp6193606.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
      " class="text-left px-5 text-white pt-5">
        <div class="mt-5">
          <h1 class="mb-3 fw-bold display-1">
            SPIDER-MAN
          </h1>
          <p class="mb-4 fw-semibold lead">
            With great power comes great responsibility
          </p>
          <div>
            <div class="baseButtons">
              <button
                class="butts fw-bold text-center">
                Play
              </button>
              <button
                class="butts fw-bold text-center">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style>
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

</style>