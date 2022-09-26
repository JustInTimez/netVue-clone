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
    mounted() {
        store.startListen(this.label, (prev, next) => {
            if (prev.phase !== next.phase && next.phase === 'resting') {
                this.movies = next.movies.slice(0, 28)
            }
        })
    }
}


</script>

<style>
    * { 
        box-sizing: border-box 
    }

    h2 {
        font-family: sans-serif;
        font-size: 48px;
    }

    .heuheu {
        transition: transform 600ms;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        /* transform: translateX(`${this.pagination * width}px`); TODO make inline */
    }
</style>

<template>
<div>
    <h2>{{label}}</h2>

    <div class="d-flex heuheu">
        <MoviePreview v-for="movie in movies" :key="movie.id" :label="movie.name" :image="movie.image" />
    </div>

    <button>></button>
</div>
</template>