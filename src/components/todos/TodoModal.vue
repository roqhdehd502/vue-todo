<!--
작성일 : 2022.05.01
작성자 : 부설연구소 사원 나민우
설명 : Todo 수정 및 삭제
-->


<template>
  <Modal>
    <template #modalTitle>
      Todo
    </template>
    <template #modalBody>
      Todo에 대한 내용
    </template>
    <template #modalFooter>
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
    </template>
  </Modal>
</template>


<script>
import Modal from '../functional_components/ModalComponent.vue'; // 모달 컴포넌트

export default {
  components: {
    Modal
  },

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


<style>

</style>