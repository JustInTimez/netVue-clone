import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

store.startListen('abc', (prevState, newState) => {
    const moviesHasUpdated = prevState.movies !== newState.movies 
    if (!moviesHasUpdated) return

    console.log(newState)
})