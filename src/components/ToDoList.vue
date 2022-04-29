<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : Todo 리스트 불러오기 및 수정, 삭제
-->

<template>
    <div 
      class="row"
      v-for="(todo, index) in todos" 
      :key="todo.id" 
    >
      <div class="col-3">
        <input 
          class="form-check-input mt-0"
          type="checkbox" 
          v-model="todo.isCompleted" 
          @change="toggleTodo(index)"
        />
      </div>

      <div class="col-3">
        <label :class="{ check: todo.isCompleted }">
          {{ todo.subject }}
        </label>
      </div>

      <div class="col-3">
        <button 
          class="btn btn-warning" 
          type="button" 
          @click="deleteTodo(index)"
        >
          Delete
        </button>
      </div>
    </div>
</template>


<script>
export default {
    props: {
        todos: {
          type: Array,
          required: true,
        }
    },

    emits: [
      'toggle-todo',
      'delete-todo',
    ],

    setup(props, { emit }) {
      const toggleTodo = (index) => { // to-do 토글
        emit('toggle-todo', index);
      }
      
      const deleteTodo = (index) => { // to-do 삭제
        emit('delete-todo', index);
      };

      return {
        toggleTodo,
        deleteTodo,
      }
    }
}
</script>


<style>
.check {
  text-decoration: line-through;
  color: gray;
}
</style>