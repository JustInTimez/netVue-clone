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
    <div class="resting"
        :style="backgroundStyle"
        @mouseover="play()"
        @mouseout="pause()"
    >
        <div class="preview">
            <video 
               ref="video"
                :muted="muted"
                    src="/public/videos/placeholder.mp4"
                    loop
            ></video>
            <button @click="toggleMute()">{{this.muted ? 'Unmute' : 'Mute'}}</button>
            <span class="label">{{this.label}}</span>
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