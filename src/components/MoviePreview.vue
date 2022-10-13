<script>
import InfoModal from './InfoModal.vue'

export default {
    inject: ['wishlist'],
    props: ['movie'],
    components: {
        InfoModal
    },
    data() {
        return {
            backgroundStyle: `background-image: url('${this.movie.image}')`,
            showModal: false,
        }
    },
    computed: {
        userDeets() {
            return localStorage.getItem('user-saved') !== null ? JSON.parse(localStorage.getItem('user-saved')) : {}
        },
    },
    methods: {
        /** Methods to save, add and remove from wishlist as well as to save that state to LocalStorage */
        saveWishlist() {
            if (this.userDeets.hasOwnProperty('wishlist')) {
                this.userDeets.wishlist = this.wishlist
                localStorage.setItem("user-saved", JSON.stringify(this.userDeets))
            }
        },
        wishlistAdd() {
            this.wishlist.push(this.movie.id)
            this.saveWishlist()
        },
        wishlistRemove() {
            let index = this.wishlist.indexOf(this.movie.id)
            if (index > -1) {
                this.wishlist.splice(index, 1)
                this.saveWishlist()
                window.location.reload()
            }
        },
    }
}
</script>

<template>
    <div class="resting container-fluid" :style="backgroundStyle">
        <div class="preview bg-dark">
            <div class="movieImage" :style="backgroundStyle">
            </div>
            <div class="movieInfo bg-dark d-flex align-items-center justify-content-between">
                <span class="label text-truncate">{{this.movie.name}}</span>
                <div class="actionButtons">
                    <button @click="wishlistAdd()" title="Add to wishlist" class="optionsBtn"><img
                            src="/images/add-new.svg"></button>
                    <button @click="wishlistRemove()" title="Remove from wishlist" class="optionsBtn"><img
                            src="/images/minus.svg"></button>
                    <button @click="showModal = true" title="More info" class="optionsBtn"><img
                            src="/images/down.svg"></button>
                </div>
            </div>
        </div>
    </div>

    <transition name="modal">
        <InfoModal v-if="showModal" :movie="movie" @close="showModal = false" />
    </transition>
</template>


<style>
.actionButtons {
    display: flex;
}

.movieInfo {
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: 100%;
}

.resting {
    border: 1px solid grey;
    padding: 1rem;
    background-color: grey;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    position: relative;
    min-height: 200px;
    width: 350px;
    margin-right: 7px;
}

.preview {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background: black;
    color: white;
    transform: scale(1);
    transition: transform 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.resting:hover {
    z-index: 10;
}

.resting:hover>.preview {
    opacity: 1;
    transform: scale(1.2);
}

.movieImage {
    background-size: cover;
    min-height: 200px;
    object-fit: cover;
}

.optionsBtn {
    background: none;
    border: none;
}

.optionsBtn img {
    width: 28px;
    height: 28px;
}

.movieInfo .label {
    max-width: 60%;
    margin-left: 7px;
}

/* Media Queries */
@media (max-width: 500px) {
    .resting {
        min-height: 150px;
        width: 300px;
        margin-right: 7px;
    }

    .movieImage {
        min-height: 150px;
    }
}

@media (max-width: 360px) {
    .movieImage {
        min-height: 100px;
    }

    .resting {
        width: 260px;
    }
}
</style>