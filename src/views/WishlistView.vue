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
      <MoviesList genre="Wish List" pagination="0" previews="123,143,254,353,123" />
    </div>
</template>