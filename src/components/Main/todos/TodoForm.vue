<template>
  <div class="d-flex">
    <div class="input-group mb-3">
      <input 
        class="form-control"
        type="text" 
        v-model="todo"
        placeholder="추가할 할 일 입력"
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

import { useToast } from '@/composables/toast';

export default { 
  emits: [
    'add-todo',
  ],

  setup(props, { emit }) {
    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    } = useToast();

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

    const todo = ref('');
    const addTodo = () => {
      if (todo.value === '' || todo.value === null) {
        triggerToast('내용을 입력해주세요!', 'danger');
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

    

    return {
      showToast,
      toastMessage,
      toastAlertType,

      todo,
      addTodo,
    };
  }
}
</script>



<style scoped>

</style>