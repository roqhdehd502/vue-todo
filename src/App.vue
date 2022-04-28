<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : App 메인 파일
-->

<template>
  <div class="container">
    <div>
      <h1 class="title">To-Do-List</h1>
    </div>

    <div class="row">
      <ToDoSimpleForm @add-todo="addTodo" />
    </div>

    <div v-if="!todos.length">
      추가된 할 일이 없습니다.
    </div>
    
    <div class="row">
      <ToDoList :todos="todos" />
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';

import ToDoList from './components/ToDoList.vue';
import ToDoSimpleForm from './components/ToDoSimpleForm.vue';

export default {
  components: {
    ToDoList, // Todo 목록 컴포넌트
    TodoSimpleForm, // Todo form 컴포넌트
  },

  setup() {
    const todos = ref([]);

    const addTodo = (todo) => { // to-do 추가
      todos.value.push(todo);
    };

    const deleteTodo = (index) => { // to-do 삭제
      todos.value.splice(index, 1);
    }

    return {
      todos,
      addTodo,
      deleteTodo,
    };
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.container {
  text-align: center;
}

.row {
  padding: 10px;
  margin: 10px 0px 10px 0px;
}

.column {
  padding: 10px;
  margin: 0px 10px 0px 10px;
}

.title {
  background-color: beige;
}

.error-message {
  color: red;
}

.card {
  margin: 20px;
  border: 1px solid beige;
  border-radius: 5px;
  background-color: beige;
  width: 300px; height: auto;
}

.check {
  text-decoration: line-through;
  color: gray;
}

.delete-button {
  background-color: red; color: white;
  border: 1px solid red; border-radius: 5px;
  padding: 5px;
}
</style>