import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import './assets/main.css'

const app = createApp(App)
app.use(router)

let userDeets = JSON.parse(localStorage.getItem('user-saved'))
app.provide('wishlist', userDeets.wishlist);

app.mount('#app')

// TODO: Use JS to make the background of login the netflix image and then black background for home/dashboard page
// background-image: url('/images/login-bg.jpg');
let logoutLink = document.getElementById('logoutLink')
if (userDeets.loggedIn == true) {    
    // this.$router.push('/home')
    // window.location.replace("/home")
    logoutLink.classList.remove("d-none")
} else {
    logoutLink.classList.add("d-none")
}
