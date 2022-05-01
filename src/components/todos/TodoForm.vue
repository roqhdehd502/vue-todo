<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : Todo 폼
-->


<template>
  <form @submit="addTodo">
    <div class="d-flex">
      <div class="flex-grow-1 mr-2">
        <input 
          class="form-control"
          type="text" 
          v-model="todo"
          placeholder="추가할 Todo 입력"
        />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">
          추가
        </button>
      </div>
    </div>
    <div class="alert alert-danger" v-show="hasError">
      내용을 입력해주세요.
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';

export default { 
  emits: [
    'add-todo',
  ],

  setup(props, { emit }) {
    const todo = ref(''); // to-do 내용
    const hasError = ref(false); // 공백 입력 방지 에러 체크 변수
    
    const addTodo = (e) => { // to-do list 등록
      e.preventDefault();

      if (todo.value === '') {
        hasError.value = true;
      } else {
        emit('add-todo', {
            //id: Date.now(),
            subject: todo.value,
            isCompleted: false,
        });
        hasError.value = false;
        todo.value = '';
      }
    }

    return {
      todo,
      addTodo,
      hasError,
    };
  }
}
</script>


<style>

</style>