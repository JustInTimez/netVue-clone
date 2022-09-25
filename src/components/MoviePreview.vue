<script>
export default {
    props: ['label', 'image', 'wishlisted'],
    data() {
        return {

        }
    },
}
</script>

<style>
* { 
    box-sizing: border-box
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
    width: 400px;
}

.preview {
    display: none;
    position: absolute;
    top: -50%;
    left: -20%;
    width: 140%;
    height: 200%;
    background: black;
    color: white;
}

.resting:hover {
    z-index: 10;
}

:host([image]) .resting:hover > .preview {
    display: block;
}

video {
    width: 100%;
}
</style>

<template>
<!-- <div class="resting" style="background: url('{{image}}')">
    <div class="preview">
        <video src="/assets/placeholder.mp4" loop ></video>
        <span class="label">{{ label }}</span>
        <button class="wishlist">{{this.wishlisted ? 'Unlist' : 'Wishlist'}}</button>
    </div>
</div> -->
</template>