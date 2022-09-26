<script>
import { ref } from "vue"
export default {
      data() {
          return {
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
            })
          }
      },
  }
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark position-sticky sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/home"><svg viewBox="0 0 111 30" fill="#e50914" id="netflix-logo" width="100%"
                    height="100%">
                    <path
                        d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z">
                    </path>
                </svg></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                    <li v-for="link in navLinks" :key="link.name" class="nav-item">
                        <span class="nav-link fw-semibold">
                            <router-link :to="link.href">
                                {{ link.name }}</router-link>
                        </span>
                    </li>
                    <li id="logoutLink"  class="nav-item">
                        <a class="nav-link fw-semibold text-danger" href="#">Logout</a>
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
</style>