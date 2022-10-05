<script>
export default {
    props: ['label', 'image', 'wishlisted'],
    data() {
        return {
            muted: true,
            backgroundStyle: `background-image: url('${this.image}')`,
        }
    },
    methods: {
        play() {
            this.$refs.video.play()
        },

        pause() {
            this.$refs.video.pause()
        },

        toggleMute() {
            this.muted = !this.muted
        },
    },
}
</script>

<template>
    <!-- <div class="card resting" :style="backgroundStyle" @mouseover="play()" @mouseout="pause()">
        <img src="..." class="card-img-top" alt="movies!">
        <video class="card-body p-0 card-img-top" alt="movies!" 
        ref="video"
            :muted="muted"
                src="/videos/placeholder.mp4"
                loop
        ></video>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> -->
    <div class="resting"
        :style="backgroundStyle"
        @mouseover="play()"
        @mouseout="pause()"
    >
        <div class="card preview bg-dark">
            <div class="card-body">
                <video class="card-body p-0" 
                ref="video"
                    :muted="muted"
                        src="/videos/placeholder.mp4"
                        loop
                ></video>
                <button @click="toggleMute()">{{this.muted ? "Unmute" : "Mute"}}</button>
                <button @click="wishlistAdd()" class="wishlistButt"><img src="/images/add-new.svg"></button>
                <button @click="wishlistRemove()" class="wishlistButt2"><img src="/images/minus.svg"></button>

                <span class="label">{{this.label}}</span>
            </div>
        </div>
    </div>
</template>


<style>
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
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    transform: scale(1);
    transition: transform 0.3s;
}

.resting:hover {
    z-index: 10;
}

.resting:hover>.preview {
    opacity: 1;
    transform: scale(1.3)
}

video {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>