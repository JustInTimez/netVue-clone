import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

let wishlist = [];
app.provide('wishlist', wishlist);

// store.startListen('abc', (prevState, newState) => {
//     const moviesHasUpdated = prevState.movies !== newState.movies 
//     if (!moviesHasUpdated) return

//     console.log(newState)
// })


// TODO: Use JS to make the background of login the netflix image and then black background for home/dashboard page
// background-image: url('/images/login-bg.jpg');

let userDeets = JSON.parse(localStorage.getItem('user-saved'))
let logoutLink = document.getElementById('logoutLink')

if (userDeets.loggedIn == true) {
    // this.$router.push('/home')
    // window.location.replace("/home")
    logoutLink.classList.remove("d-none")
} else {
    logoutLink.classList.add("d-none")
}
