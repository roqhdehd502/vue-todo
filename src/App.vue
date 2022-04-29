<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : App 메인
-->

<template>
  <div class="container">
    <div class="row">
      <h1>To-Do-List</h1>
    </div>

    <div class="row">
      <input
        class="form-control"
        type="text"
        v-model="searchTodo"
        placeholder="검색"
      />
      
    </div><hr />

    <div class="row"> 
      <h6>
        등록된 할 일 : {{ todos.length }}
      </h6>
      <ToDoSimpleForm @add-todo="addTodo" />
    </div>

    <div class="small" v-if="!todos.length">
      추가된 할 일이 없습니다.
    </div>
    
    <div class="row">
      <ToDoList 
        :todos="todos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      />
    </div><hr />

    <div class="row">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li v-if="currentPage !== 1" class="page-item">
            <a class="page-link page-cursor" @click="getTodos(currentPage - 1)">
              Prev
            </a>
          </li>
          <li 
            v-for="page in numberOfPages" 
            :key="page"
            class="page-item"
            :class="currentPage === page ? 'active' : ''"
          >
            <a class="page-link page-cursor" @click="getTodos(page)">
              {{ page }}
            </a>
          </li>
          <li v-if="numberOfPages !== currentPage" class="page-item">
            <a class="page-link page-cursor" @click="getTodos(currentPage + 1)">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
import { ref, computed, watch } from 'vue';

import axios from 'axios';

import ToDoList from './components/ToDoList.vue'; // Todo 목록 컴포넌트
import ToDoSimpleForm from './components/ToDoSimpleForm.vue'; // Todo form 컴포넌트

export default {
  components: {
    ToDoList, 
    ToDoSimpleForm, 
  },

  setup() {
    const numberOfTodos = ref(0); // to-do 페이징
    let limitInPage = 5;
    const currentPage = ref(1);

    const numberOfPages = computed(() => {
      return Math.ceil(numberOfTodos.value / limitInPage);
    });

    const searchTodo = ref(''); // 검색할 to-do 리스트 키워드 
    // const filteredTodos = computed(() => { // 필터링하여 to-do 리스트 검색
    //   if(searchTodo.value) {
    //     return todos.value.filter(todo => {
    //       return todo.subject.includes(searchTodo.value);
    //     });
    //   }
    //   return todos.value;
    // }); 
    
    const todos = ref([]); // to-do 리스트
    const getTodos = async (page = currentPage.value) => {
      currentPage.value = page;
      try {
        const res =  await axios.get(
          `http://localhost:3000/todos?_sort=id&_order=desc&subject_like=${searchTodo.value}&_page=${currentPage.value}&_limit=${limitInPage}`
        );
        numberOfTodos.value = res.headers['x-total-count'];
        todos.value = res.data;
      } catch(err) {
        alert('오류로 인해 불러올 수 없습니다!');
      }
    }

    getTodos();

    watch(searchTodo, () => { // to-do 리스트 검색
      getTodos(1);
    });

    const addTodo = async (todo) => { // to-do 추가
      try {
        await axios.post('http://localhost:3000/todos', {
          subject: todo.subject,
          completed: todo.isCompleted,
        });
        getTodos(1);
      } catch(err) {
        alert('오류로 인해 추가할 수 없습니다!');
      }
    };

    const deleteTodo = async (index) => { // to-do 삭제
      const getId = todos.value[index].id;
      try {
        await axios.delete('http://localhost:3000/todos/' + getId);
        getTodos(1);
      } catch(err) {
        alert('오류로 인해 삭제할 수 없습니다!'); // 
      }
    };

    const toggleTodo = async (index) => { // to-do 토글
      const getId = todos.value[index].id;
      try {
        await axios.patch('http://localhost:3000/todos/' + getId, {
          isCompleted: !todos.value[index].iscompleted
        });
        todos.value[index].iscompleted = !todos.value[index].iscompleted;
      } catch(err) {
        alert('오류로 인해 체크할 수 없습니다!'); // 
      }
    };

    return {
      todos,
      getTodos,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchTodo,
      // filteredTodos,
      numberOfPages,
      currentPage,
    };
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.page-cursor {
  cursor: pointer;
}
</style>