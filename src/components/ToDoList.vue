<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : Todo 리스트 불러오기 및 수정, 삭제
-->

<template>
    <div 
      v-for="(todo, index) in todos" 
      :key="todo.id" 
      class="card mt-2"
    >
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-glow-1">
          <input 
            class="form-check-input"
            type="checkbox" 
            v-model="todo.isCompleted" 
            @change="toggleTodo(index)"
          />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-9">
              <label class="form-check-label" :class="{ check: todo.isCompleted }">
                {{ todo.subject }}
              </label>
            </div>
            <div class="col">
              <button 
                class="btn btn-danger" 
                type="button" 
                @click="deleteTodo(index)"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
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
      };
      
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