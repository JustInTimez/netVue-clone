<script>
    export default {
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
                <div class="d-flex align-items-center justify-content-between">
                    <h3>{{ movie.name }}</h3>
                    <button class="modal-close-button" @click="$emit('close')">
                        X
                    </button>
                </div>
            </slot>
          </div>  

          <div class="modal-body">
            <slot name="body">
              body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              footer
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
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

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
    