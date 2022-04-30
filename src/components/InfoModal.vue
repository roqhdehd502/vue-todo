<!-- 
작성일 : 2022.04.30
작성자 : 부설연구소 사원 나민우
설명 : to-do 페이지 index
-->


<template>
  <div class="modal-wrapper">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Todo 제목</h5>
          <button 
            type="button" 
            class="btn-close"
            @click="onClose"
          ></button>
        </div>
        <div class="modal-body">
          Todo 상세 내용
        </div>
        <div class="modal-footer">
          <button 
            type="button"
            class="btn btn-secondary"
            @click="onClose"
          >
            닫기
          </button>
          <button 
            type="button" 
            class="btn btn-primary"
          >
            수정
          </button>
          <button 
            type="button" 
            class="btn btn-danger"
            @click="onDelete"
          >
            삭제
          </button>
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

    const onDelete = () => {
      emit('delete');
    }

    return {
      onClose,
      onDelete,
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