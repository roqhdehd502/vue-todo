<template>
  <div class="d-flex">
    <div class="input-group mb-3">
      <input 
        @keyup.enter="addTodo" 
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
import { useStore } from 'vuex';

import { todoMessages } from '@/common/messages';

import { getUserInfo } from '@/remote/auth';


export default { 
  name: 'TodoForm',

  emits: [
    'add-todo',
  ],

  setup(props, { emit }) {
    const store = useStore();

    const userId = ref(null);
    const getUserId = () => {
      userId.value = getUserInfo().uid;
    }
    getUserId();


    const todo = ref('');
    const addTodo = () => {
      if (todo.value === '' || todo.value === null) {
        store.dispatch('toast/triggerToast', todoMessages.INVALID_TODO_INFO);
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
      todo,
      addTodo,
    };
  }
}
</script>