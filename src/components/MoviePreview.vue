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
        <div class="preview bg-dark">
            <div class="">
                <video class="card-body p-0" 
                ref="video"
                    :muted="muted"
                        src="/videos/placeholder.mp4"
                        loop
                ></video>
            </div>
            <div class="videoInfo bg-dark">
                <span class="label">{{this.label}}</span><br>
                <button @click="toggleMute()">{{this.muted ? "Unmute" : "Mute"}}</button>
                <button @click="wishlistAdd()" class="wishlistButt"><img src="/images/add-new.svg"></button>
                <button @click="wishlistRemove()" class="wishlistButt2"><img src="/images/minus.svg"></button>
            </div>
        </div>
    </div>
</template>


<style>

.videoInfo {
    position: absolute;
    bottom: 0;
    margin-left: 15px;
    /* left: 0;
    right: 0; */
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
}

.preview {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 115%;
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
    transform: scale(1.2);
}

video {
    width: 80;
    height: 200px;
    object-fit: cover;
}
</style>