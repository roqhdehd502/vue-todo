<template>
  <div class="d-flex">
    <div class="input-group mb-3">
      <input 
        class="form-control"
        type="text" 
        v-model="todo"
        placeholder="추가할 Todo 입력"
        maxlength="30"
      />
      <button @click="addTodo" class="btn btn-success" type="button">
        추가
      </button>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';

import { 
  getAuth
  , onAuthStateChanged
} from "firebase/auth";

import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default { 
  emits: [
    'add-todo',
  ],

  setup(props, { emit }) {
    const userId = ref(null);
    const getUserId = () => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          userId.value = user.uid;
          return;
        } else {
          return;
        }
      });
    }
    getUserId();

    const todo = ref(''); // to-do 내용
    const addTodo = () => { // to-do list 등록
      if (todo.value === '' || todo.value === null) {
        triggerToast('Todo 내용을 입력해주세요!', 'danger');
      } else {
        emit('add-todo', {
            userId: userId.value,
            subject: todo.value,
            uploadDate: Date.now(),
            isCompleted: false,
            enabled: true,
        });
        todo.value = '';
      }
    }

    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    } = useToast(); // 변경 사항시 알림

    return {
      todo,
      addTodo,

      showToast,
      toastMessage,
      toastAlertType,
    };
  }
}
</script>



<style scoped>

</style>