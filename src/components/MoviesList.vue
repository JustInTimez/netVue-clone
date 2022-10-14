<script>
import MoviePreview from './MoviePreview.vue'
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
    inject: ['wishlist'],
    props: ['genre', 'pagination'],
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
        let hasError = ref(false)

        async function fetchMovies() {
            const movieData = await axios
                /** Grab info from Schalk's hosted data object  */
                .get('https://netflix-cs-api.netlify.app/')
                .then((res) => res.data.data)
                .catch(
                    function () {
                        hasError.value = true
                    }
                )
            movies.value = movieData;
        }

        onMounted(() => {
            fetchMovies()
        });
        return {
            movies,
            hasError
        };
    },
}
</script>

<template>
    <h2>{{ genre }}</h2>
    <template v-if="hasError">
        <h5 class="error">Could not fetch data, please refresh the page to try again!</h5>
    </template>
    <template v-else>
        <div class="movie-preview">
            <ul class="movieContainer" ref='listRef'>
                <li v-for="movie in movies">
                    <MoviePreview :movie="movie" v-if="genre == 'Wish List' && wishlist.includes(movie.id)" />
                    <MoviePreview :movie="movie" v-else-if="movie.genres[0].name == genre" />
                </li>
            </ul>
            <button class="prev d-none d-sm-flex" @click="prev()" aria-label="Go to previous"><img
                    src="/images/arrow.svg"></button>
            <button class="next d-none d-sm-flex" @click="next()" aria-label="Go to next"><img
                    src="/images/arrow.svg"></button>
        </div>
    </template>
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

.movieContainer {
    min-height: 280px;
}

.error {
    padding-left: 18px;
    padding-bottom: 18px;
}

/* Media Queries */
@media (max-width: 935px) {
    .movieContainer {
        min-height: 330px;
    }
}

@media (max-width: 500px) {
    .movieContainer {
        min-height: 320px;
    }
}

@media (max-width: 360px) {
    .movieContainer {
        min-height: 325px;
    }
}
</style>