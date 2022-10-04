<script>
import MoviePreview from './MoviePreview.vue'
import { store } from '../store.js'

export default {
    props: ['label', 'pagination', 'previews'],
    data() {
        return {
            movies: [],
        }
    },
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
    mounted() {
        store.startListen(this.label, (prev, next) => {
            if (prev.phase !== next.phase && next.phase === 'resting') {
                this.movies = next.movies.slice(0, 28)
            }
        })
    }
}


</script>

<template>
    <div>
        <h2>{{label}}</h2>

        <div class="d-flex movie-preview">
            <MoviePreview v-for="movie in movies" :key="movie.id" :label="movie.name" :image="movie.image" />
        </div>

        <button>></button>
    </div>
    <div>
        <h2>{{label}}</h2>

        <div class="d-flex movie-preview">
            <MoviePreview v-for="movie in movies" :key="movie.id" :label="movie.name" :image="movie.image" />
        </div>

        <button>></button>
    </div>


    <h2>{{ this.label }}</h2>
    <div class="d-flex movie-preview">
        <ul ref='listRef'>
            <!-- ${this.movies.map(({ name, image }) => {
            <movie-preview image="${image}" label="${name}"></movie-preview>
            })} -->

            <li v-for="movie in movies">
                <MoviePreview :key="movie.id" :label="movie.name" :image="movie.image" />
            </li>
        </ul>

        <button class="prev" @click="prev()" aria-label="Go to previous"><img src="/assets/icon.svg"></button>
        <button class="next" @click="next()" aria-label="Go to next"><img src="/assets/icon.svg"></button>
    </div>
</template>



<style scoped>
div {
    position: relative;
}

img {
    height: 24px;
    width: 24px;
}

button {
    position: absolute;
    top: 50%;
    background: black;
    fill: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

button:hover {
    opacity: 0.7;
}

.next {
    right: 0;
}

.prev {
    left: 0;
    transform: rotate(180deg)
}

h2 {
    font-family: sans-serif;
    font-size: 48px;
}

ul {
    transition: transform 600ms;
    list-style: none;
    margin: 0;
    padding: 2rem;
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