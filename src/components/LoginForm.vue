<template>
    <!-- <form @submit.prevent="submit"> -->
    <div class="login-box">
        <h2 class="mb-3 signInText">Sign In</h2>
        <div class="input-box">
            <input type="text" placeholder="Email or phone number">
            <input type="password" placeholder="Password">
            <button type="button" class="">Sign In</button>
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

<style scoped>
.signInText {
    color: white;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 28px;
}

.login-box {
    width: 40%;
    position: absolute;
    background-color: #0000008a;
    top: 25%;
    margin: 0 auto;
    right: 0;
    left: 0;
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
}

.login-box .input-box button {
    border: none;
    padding: 15px;
    margin: 50px 10px 0 10px;
    background-color: red;
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
</style>

<script>

</script>