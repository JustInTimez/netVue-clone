<script>
export default {
    inject: ['wishlist'],
    props: ['label', 'image', 'wishlisted'],
    data() {
        return {
            backgroundStyle: `background-image: url('${this.image}')`,
        }
    },
    methods: {
        wishlistAdd() {
            console.log(this.wishlist)
        },
        wishlistRemove() {
        },
    }
}
</script>

<template>
    <div class="resting container-fluid"
        :style="backgroundStyle">
        <div class="preview bg-dark">
            <div class="movieImage" :style="backgroundStyle">
            </div>
            <div class="movieInfo bg-dark d-flex align-items-center justify-content-between">
                <span class="label text-truncate">{{this.label}}</span>
                <div>
                    <button @click="wishlistAdd()" title="Add to wishlist" class="wishlistBtn"><img src="/images/add-new.svg"></button>
                    <button @click="wishlistRemove()" title="Remove from wishlist" class="wishlistBtn"><img src="/images/minus.svg"></button>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

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
    height: 200px;
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
    height: 200px;
    object-fit: cover;
}

.wishlistBtn {
    background: none;
    border: none;
}

.wishlistBtn img {
    width: 28px;
    height: 28px;
}

.movieInfo .label {
    max-width: 75%;
}
</style>