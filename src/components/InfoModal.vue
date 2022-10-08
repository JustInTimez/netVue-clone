<script>
export default {
    /** Include all movie.data object details so that it can be accessed in the template output below */
    props: ['movie'],
    emits: ['close'],
}
</script>
    
<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container bg-dark">

                <div class="modal-header">
                    <slot name="header">
                        <div class="headerSection">
                            <h1>{{ movie.name }}</h1>
                            <p class="mb-0"><small>Released: {{ movie.release_date }} </small></p>
                        </div>
                        <button class="modal-close-button" @click="$emit('close')"><img class="closeButt"
                                src="/images/cross.svg" width="24" height="24"></button>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <p class="mb-0"> {{ movie.description }}</p>
                        <p> {{'Duration: ' + movie.duration + 'mins' }}</p>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <p class="border border-white rounded px-1 mx-2" v-for="genre in movie.genres"> {{ genre.name}}
                        </p>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headerImage {
    width: 300px;
    height: 300px;
}

.modal-mask {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    display: flex;
    flex-flow: column;
    opacity: 0.9;
    width: 80rem;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
}

.modal-body {
    margin: 20px 0;
}

.modal-close-button {
    background: none !important;
    border: none !important;
    color: white;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.closeButt {
    position: relative;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
    