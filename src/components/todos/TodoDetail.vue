<!--
작성일 : 2022.05.01
작성자 : 부설연구소 사원 나민우
설명 : Todo 수정 및 삭제
-->


<template>
  <Modal>
    <template #modalTitle>
      정말 삭제하시겠습니까?
    </template>

    <template #modalBody>
      <div class="btn-group me-2">
        <button 
          type="button" 
          class="btn btn-danger"
          @click="onDelete"
        >
          삭제
        </button>
      </div>
      <div class="btn-group me-2">
        <button 
          type="button"
          class="btn btn-secondary"
          @click="onClose"
        >
          취소
        </button>
      </div>
    </template>
  </Modal>
</template>


<script>
import Modal from '../functional_components/ModalComponent.vue'; // 모달 컴포넌트

export default {
  components: {
    Modal
  },

  emits: [
    'close',
    'delete',
  ],

  setup(props, { emit }) {
    const onClose = () => { // 모달창 닫기
      emit('close');
    }

    const onDelete = () => { // todo 삭제
      emit('delete');
    }

    return {
      onClose,
      onDelete,
    }
  }
}
</script>


<style>

</style>