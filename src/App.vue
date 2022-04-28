<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : App 메인
-->

<template>
  <div class="container">
    <div>
      <h1 class="title">To-Do-List</h1>
    </div>

    <div class="row">
      <input
        type="text"
        v-model="searchTodo"
        placeholder="검색"
      />
      <h4>등록된 할 일 : {{ todos.length }}</h4>
    </div><hr />

    <div class="row">
      <ToDoSimpleForm @add-todo="addTodo" />
    </div>

    <!-- <div v-if="!todos.length">
      추가된 할 일이 없습니다.
    </div> -->
    <div v-if="!filteredTodos.length">
      추가된 할 일이 없습니다.
    </div>
    
    <div class="row">
      <!-- <ToDoList 
        :todos="todos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      /> -->
      <ToDoList 
        :todos="filteredTodos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      />
    </div>
  </div>
</template>


<script>
import { ref, computed } from 'vue';

import ToDoList from './components/ToDoList.vue'; // Todo 목록 컴포넌트
import ToDoSimpleForm from './components/ToDoSimpleForm.vue'; // Todo form 컴포넌트

export default {
  components: {
    ToDoList, 
    ToDoSimpleForm, 
  },

  setup() {
    const todos = ref([]); // to-do 리스트

    const addTodo = (todo) => { // to-do 추가
      todos.value.push(todo);
    };

    const toggleTodo = (index) => { // to-do 토글
      todos.value[index].iscompleted = !todos.value[index].iscompleted;
    };

    const deleteTodo = (index) => { // to-do 삭제
      todos.value.splice(index, 1);
    };

    const searchTodo = ref(''); // 검색할 to-do 리스트 키워드

    const filteredTodos = computed(() => { // 필터링하여 to-do 리스트 검색
      if(searchTodo.value) {
        return todos.value.filter(todo => {
          return todo.subject.includes(searchTodo.value);
        });
      }

      return todos.value;
    }); 

    return {
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      searchTodo,
      filteredTodos,
    };
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
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