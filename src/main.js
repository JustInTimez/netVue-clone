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

// TODO: Use JS to make the background of login the netflix image and then black background for home/dashboard page
// background-image: url('/images/login-bg.jpg');

// let userDeets = JSON.parse(localStorage.getItem('user-saved'))

// Checking if logged in or not for display of logout button

// if (loggedIn = true) {
//     document.getElementById('logoutLink').classList.add('d-none')
// } else {
//     document.getElementById('logoutLink').classList.remove('d-none')
// }

