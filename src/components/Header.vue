<script>
import { ref } from "vue"
export default {
    inject: ['wishlist'],
    data() {
        return {
            /** Nav links */
            navLinks: ref({
                Home: {
                    name: "Home",
                    href: "/home",
                },
                TvShows: {
                    name: "TV Shows",
                    href: "#",
                },
                Movies: {
                    name: "Movies",
                    href: "#",
                },
                NewPopular: {
                    name: "New & Popular",
                    href: "#",
                },
                MyList: {
                    name: "My List",
                    href: "/my-list",
                }
            }),
        }
    },
    methods: {
        /** When logging out, clear localStorage as required */
        logOut() {
            let userDeets = { user: '', password: '', loggedIn: false, wishlist: this.wishlist }
            localStorage.setItem("user-saved", JSON.stringify(userDeets))
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark position-sticky sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><svg viewBox="0 0 111 30" fill="#e50914" id="netflix-logo" width="100%"
                    height="100%">
                    <path
                        d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z">
                    </path>
                </svg></a>
            <button class="navbar-toggler text-center mobileMenuHover" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon hamburger"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2">
                    <li v-for="link in navLinks" :key="link.name" class="nav-item">
                        <span class="nav-link fw-semibold">
                            <router-link :to="link.href">
                                {{ link.name }}</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold text-danger logout" id="logoutLink" href="/"
                            @click="logOut()">Logout</a>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style>
.nav {
    min-width: 100%;

}

.navbar {
    margin-bottom: 0;
    border-radius: 0;
}

svg {
    margin-top: 5px;
    margin-left: 20px;
    width: 110px;
    height: auto;
}

a,
.green {
    text-decoration: none;
    color: white;
    transition: 0.4s;
}

.logout {
    border: 1px solid;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
}

.btn {
    --bs-btn-font-size: 15px;
}

.mobileMenuHover {
    border: 2px solid #dc3545;
}

.hamburger {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(220, 53, 69, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    border-color: #dc3545;
}
</style>