<!-- 
작성일 : 2022.04.30
작성자 : 부설연구소 사원 나민우
설명 : 모달 컴포넌트
-->


<template>
  <div class="modal-wrapper">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="modalTitle"></slot>           
          </h5>
          <button 
            type="button" 
            class="btn-close"
            @click="onClose"
          ></button>
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
  setup(props, { emit }) {
    const onClose = () => {
      emit('close');
    }

    return {
      onClose,
    }
  }
}
</script>


<style scoped>
.modal-wrapper {
  position: fixed !important;
  z-index: 100; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>