<script>
import { ref } from "vue";
export default {
    setup() {
        const baseImgUrl = ref("https://image.tmdb.org/t/p");
        const moviesData = ref([]);
        async function loadData() {
            try {
                const moviedata = await MovieService.getTrendingMovies();
                moviesData.value = moviedata.data.results;
                console.log(moviesData.value);
            } catch (err) {
                console.log(err);
            }
        }
        loadData();
        return { baseImgUrl, moviesData };
    }
};
</script>

<template>

</template>

<script>

</script>