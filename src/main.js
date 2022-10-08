import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)

// make wishlist available to app
let userDeets = JSON.parse(localStorage.getItem('user-saved'))
app.provide('wishlist', userDeets.wishlist)

// register modal component
app.component("modal", {
    template: "#modal-template"
})

app.mount('#app')

let logoutLink = document.getElementById('logoutLink')
if (userDeets.loggedIn == true) {
    logoutLink.classList.remove("d-none")
} else {
    logoutLink.classList.add("d-none")
}

