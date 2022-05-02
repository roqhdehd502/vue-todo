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

      <!-- <form @submit="onUpdate">
        <div class="input-group mb-3">
          <input 
            v-model="todo"
            v-text="subject"
            type="text" 
            class="form-control" 
            placeholder="변경할 Todo 입력"
            maxlength="30"
          />
          <button 
            type="submit" 
            class="btn btn-primary"
          >
            변경
          </button>
        </div>
        
        <div class="alert alert-danger" v-show="hasError">
          내용을 입력해주세요.
        </div> 
      </form>-->
    </template>
  </Modal>
</template>


<script>
//import { ref } from 'vue';

import Modal from '../functional_components/ModalComponent.vue'; // 모달 컴포넌트

export default {
  components: {
    Modal
  },

  // props: {
    
  // },

  emits: [
    //'update',
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

    // const todo = ref(''); // 변경할 todo 정보
    // const hasError = ref(false); // 공백 입력 방지 에러 체크 변수
    // const onUpdate = (e) => { // todo 업데이트
    //   e.preventDefault();

    //   if (todo.value === '') {
    //     hasError.value = true;
    //   } else {
    //     emit('update', {
    //       subject: todo.value,
    //     });
    //     hasError.value = false;
    //     todo.value = '';
    //   }
    // }

    return {
      // todo,
      // hasError,
      // onUpdate,
      onClose,
      onDelete,
    }
  }
}
</script>


<style>

</style>