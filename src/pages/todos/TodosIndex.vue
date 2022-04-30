<!-- 
작성일 : 2022.04.30
작성자 : 부설연구소 사원 나민우
설명 : to-do 페이지 index
-->


<template>
  <div class="container">
    <div class="row">
      <input
        class="form-control"
        type="text"
        v-model="searchTodo"
        placeholder="Todo 검색"
        @keyup.enter="searchTodoKeyup"
      />  
    </div><hr />

    <div class="row"> 
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
  
  <transition name="fade">
    <Toast 
      v-if="showToast" 
      :message="toastMessage" 
      :type="toastAlertType"
    />
  </transition>
</template>


<script>
import { ref, computed, watch } from 'vue';

import axios from 'axios';

import ToDoList from '@/components/ToDoList.vue'; // Todo 목록 컴포넌트
import ToDoSimpleForm from '@/components/ToDoSimpleForm.vue'; // Todo form 컴포넌트
import Toast from '@/components/InfoUpdateToast.vue'; // 변경사항 알림 컴포넌트

import { useToast } from '@/composables/toast'; // 변경사항 알림 컴포저블

export default {
  components: {
    ToDoList, 
    ToDoSimpleForm, 
    Toast,
  },

  setup() {
    let limitInPage = 5; // to-do 페이징
    const numberOfTodos = ref(0); 
    const currentPage = ref(1);
    const numberOfPages = computed(() => {
      return Math.ceil(numberOfTodos.value / limitInPage);
    });

    let timeout = null;  // 검색할 to-do 리스트 키워드
    const searchTodo = ref('');
    const searchTodoKeyup = () => {
      clearTimeout(timeout);
      getTodos(1);
    };

    watch(searchTodo, () => { // to-do 리스트 검색
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getTodos(1);
      }, 1000);
    });
    
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
        triggerToast('오류로 인해 불러올 수 없습니다!', 'danger');
      }
    }
    getTodos();

    const addTodo = async (todo) => { // to-do 추가
      try {
        await axios.post('http://localhost:3000/todos', {
          subject: todo.subject,
          completed: todo.isCompleted,
        });
        getTodos(1);
        triggerToast('추가 되었습니다.');
      } catch(err) {
        triggerToast('오류로 인해 추가할 수 없습니다!', 'danger');
      }
    };

    const deleteTodo = async (getId) => { // to-do 삭제
      try {
        await axios.delete('http://localhost:3000/todos/' + getId);
        getTodos(1);
        triggerToast('삭제 되었습니다.');
      } catch(err) {
        triggerToast('오류로 인해 삭제할 수 없습니다!', 'danger');
      }
    };

    const toggleTodo = async (index, checked) => { // to-do 토글
      const getId = todos.value[index].id;
      try {
        await axios.patch('http://localhost:3000/todos/' + getId, {
          isCompleted: checked
        });
        todos.value[index].iscompleted = checked;
        triggerToast('변경 되었습니다.');
      } catch(err) {
        triggerToast('오류로 인해 체크할 수 없습니다!', 'danger');
      }
    };

    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    } = useToast(); // 변경 사항시 알림

    return {
      searchTodoKeyup,
      
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchTodo,
      numberOfPages,
      currentPage,
      getTodos,
      toastMessage,
      toastAlertType,
      showToast,    
    };
  }
}
</script>


<style scoped>
.page-cursor {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
} 
</style>