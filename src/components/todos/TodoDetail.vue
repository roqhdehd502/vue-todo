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
import Modal from '../modals/ModalComponent.vue';

export default {
  name: 'TodoDetail',
  
  components: {
    Modal
  },

  emits: [
    'close',
    'delete',
  ],

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