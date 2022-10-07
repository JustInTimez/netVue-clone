<template>
    <div class="login-box">
        <h2 class="mb-3 signInText">Sign In</h2>
        <div class="input-box">
            <input id="userInput" type="text" placeholder="Email address" v-model="userInput">
            <p id="userError" class="d-none errorMsg">Please enter your valid email address</p>
            <input id="userPassword" type="password" placeholder="Password" v-model="userPassword">
            <p id="passwordError" class="d-none errorMsg">Password incorrect</p>
            <button type="button" class="btn btn-danger" @click="checkLogin()">Sign In</button>
        </div>
        <!-- Just for fun and to seem visually the same, not going to be tying this to localStorage -->
        <div class="rememberMe-box">
            <div>
                <input type="checkbox">
                <label for="">Remember Me?</label>
            </div>
            <span>Need help?</span>
        </div>
    </div>
</template>


<script>

// import { userDeets } from '../main.js'

export default {
    data() {
        return {
            userInput: '',
            userPassword: '',
            loggedIn: false,
            wishlisted: '',
        }
    },
    methods: {
        checkLogin() {
            let firstField = false
            let secondField = false
            let isloggedIn = false
            if (this.userInput == '') {
                document.getElementById("userError").classList.remove("d-none")
            } else {
                document.getElementById("userError").classList.add("d-none")
                firstField = true
            }
            if (this.userPassword == '') {
                document.getElementById("passwordError").classList.remove("d-none")
            } else {
                document.getElementById("passwordError").classList.add("d-none")
                secondField = true
            }
            if (firstField && secondField) {
                isloggedIn = true
                let userDeets = { user: this.userInput, password: this.userPassword, loggedIn: isloggedIn, wishlist: [] }
                localStorage.setItem("user-saved", JSON.stringify(userDeets))
                document.getElementById("logoutLink").classList.remove("d-none")
                this.$router.push({ path: "/home" })
            }
        },
    }
}
</script>



<style scoped>
.signInText {
    color: white;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 28px;
}

.login-box {
    width: 50%;
    background-color: #0000008a;
    margin: 15% auto 0 auto;
    border-radius: 3px;
    color: white;
    padding: 20px;
}

.login-box .input-box {
    display: flex;
    flex-direction: column;
}

.login-box .input-box input {
    border: none;
    padding: 15px;
    margin: 10px;
    font-size: 1em;
    background-color: #333;
    color: white;
}

.login-box .input-box button {
    border: none;
    padding: 15px;
    margin: 50px 10px 0 10px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    border-radius: 3px;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1;
    /* Firefox */
}

.login-box .rememberMe-box {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

input:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
    border-color: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(129, 129, 129, 0.603);
    outline: 0 none;
}

.errorMsg {
    margin-bottom: 0px;
    color: orange;
    text-align: center;
    font-size: 13px;
}

/* Media Queries */
@media (max-width: 768px) {
    .login-box {
        width: 95%;
    }
}
</style>