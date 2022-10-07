<script>
import MoviesList from '../components/MoviesList.vue'

export default {
    components: {
        MoviesList
    },
}
</script>

<template>
    <div class="container-fluid">
      <MoviesList genre="Wish List" pagination="0" />
    </div>
</template>