<template>
  <div class="modal-wrapper">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            <slot name="modalTitle"></slot>           
          </h6>
        </div>
        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modalFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ModalComponent',
}
</script>


<style scoped>
.modal-wrapper {
  position: fixed !important;
  z-index: 100; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-title {
  font-weight: bold;
}
</style>