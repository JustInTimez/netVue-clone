<script>
import MoviePreview from './MoviePreview.vue'
import { store } from '../store.js'

export default {
    props: ['label', 'pagination', 'previews'],
    data() {
    return {}
  },
    components: {
        MoviePreview
    },
    computed: {
        movies() {
            store.startListen(this.label, (prev, next) => {
                if (prev.phase !== next.phase && next.phase === 'resting') {
                    return next.movies.slice(0, 28)
                }
            })
        }
  }
}
</script>

<style>
    * { 
        box-sizing: border-box 
    }

    div {
        padding: 1rem;
    }

    h2 {
        font-family: sans-serif;
        font-size: 48px;
    }

    ul {
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

    <ul>
        <li v-for="movie in movies">
            <MoviePreview label="Horror" />
        </li>
    </ul>

    <!-- <ul>
        ${this.movies.map(({ name, image }) => {
            return /* html */ `
                <li>
                    <movie-preview 
                        label="${name}" 
                        image="${image}"
                    ><movie-preview>
                </li>`
        }).join('')}
    </ul> -->

    <button></button>
</div>
</template>