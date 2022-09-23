<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-center nav">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><span class="nav-link active">netVue</span></li>
                    <li v-for="link in navLinks" :key="link.name">
                        <span class="nav-link">
                            <router-link :to="link.href">
                                {{ link.name }}</router-link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.nav {
    min-width: 100%;

}







</style>

<script>
import { ref } from "vue"
export default {
    setup() {
        const navLinks = ref({
            Home: {
                name: "Home",
                href: "/",
            },
            TvShows: {
                name: "TV Shows",
                href: "/about",
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
            },
            BrowseLang: {
                name: "Browse by Languages",
                href: "#",
            }
        })
        return { navLinks }
    }
}
</script>