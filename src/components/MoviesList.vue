<script>
import MoviePreview from './MoviePreview.vue'
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
    inject: ['wishlist'],
    props: ['genre', 'pagination', 'previews'],
    components: {
        MoviePreview
    },
    methods: {
        next() {
            const ulWidth = this.$refs.listRef.clientWidth
            const currentScroll = this.$refs.listRef.scrollLeft
            const newScroll = currentScroll + ulWidth
            this.$refs.listRef.scrollLeft = newScroll
        },

        prev() {
            const ulWidth = this.$refs.listRef.clientWidth
            const currentScroll = this.$refs.listRef.scrollLeft
            const newScroll = currentScroll - ulWidth
            this.$refs.listRef.scrollLeft = newScroll
        },
    },
    setup() {
        let movies = ref([])

        async function fetchMovies() {
            const movieData = await axios
                .get('https://netflix-cs-api.netlify.app/')
                .then((res) => res.data.data);
            movies.value = movieData;
        }

        onMounted(() => {
            fetchMovies()
        });
        return {
            movies
        };
    },
}

</script>

<template>
    <h2>{{ genre }}</h2>
    <div class="movie-preview">
        <ul ref='listRef'>
            <li v-for="movie in movies">
                <MoviePreview :movie="movie" v-if="genre == 'Wish List' && wishlist.includes(movie.id)" />
                <MoviePreview :movie="movie" v-else-if="movie.genres[0].name == genre" />
            </li>
        </ul>
        <button class="prev" @click="prev()" aria-label="Go to previous"><img src="/images/arrow.svg"></button>
        <button class="next" @click="next()" aria-label="Go to next"><img src="/images/arrow.svg"></button>
    </div>
</template>



<style scoped>
div {
    position: relative;
}

img {
    height: 34px;
    width: 34px;
}

button {
    border: none;
    position: absolute;
    top: 20%;
    background: black;
    opacity: 0.5;
    fill: white;
    width: 35px;
    height: 150px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

button:hover {
    opacity: 0.7;
}

.next {
    right: 20px;
}

.prev {
    left: 20px;
    transform: rotate(180deg)
}

h2 {
    font-family: sans-serif;
    font-size: 48px;
    padding-left: 18px;
}

ul {
    transition: transform 600ms;
    list-style: none;
    margin: 0;
    padding: 30px 20px 50px 20px;
    display: flex;
    transform: translateX(0px);
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

ul::-webkit-scrollbar {
    display: none;
}
</style>