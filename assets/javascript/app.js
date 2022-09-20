import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Login from "/views/login.vue";

createApp(Login).mount('#app-login')



// createApp({
//   data() {
//     return {
//       message: 'This is going to be the login section!'
//     }
//   }
// }).mount('#app-login')
