<template>
  <div>
    <div class="card">
      <CoinList />
    </div><br />

    <div v-if="isLogin">
      <input
        class="form-control"
        type="text"
        v-model="searchTodo"
        placeholder="검색할 Todo 입력"
        @keyup.enter="searchTodoKeyup"
      /><br />

      <div class="row"> 
        <TodoForm @add-todo="addTodo" />
      </div>

      <div v-if="!todos.length">
        추가된 할 일이 없습니다.
      </div>

      <ToDoList 
        :todos="todos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      /><br />

      <nav>
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
    <div v-else class="input-group mb-3">
      <input 
        class="form-control" 
        type="text" 
        value="로그인 상태에서만 작성 가능합니다" 
        disabled 
        readonly
      >
      <button 
        class="btn btn-outline-secondary" 
        type="button"
        @click="moveToLogin"
      >
        로그인
      </button>
    </div>
  </div>
</template>


<script>
import { ref, computed, watch } from 'vue';
import router from '@/router';

import axios from 'axios';

import CoinList from '@/components/coins/CoinMarketPrice.vue'; // 코인 시세 리스트 컴포넌트
import ToDoList from '@/components/Main/todos/TodoList.vue'; // Todo 목록 컴포넌트
import TodoForm from '@/components/Main/todos/TodoForm.vue'; // Todo form 컴포넌트

import { useAuth } from '@/composables/auth'; // 유저 인증정보 컴포저블
import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default {
  components: {
    CoinList,
    ToDoList, 
    TodoForm,
  },

  setup() {
    const isLogin = useAuth().isLogin(); // 로그인 여부
    const getUserId = useAuth().getUserObj.userObj.userId; // 로그인한 유저 Id

    const moveToLogin = () => { // 로그인 페이지로 이동
      router.push({
        name: 'Login',
      });
    }

    let limitInPage = 3; // to-do 페이징
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
      }, 100);
    });
    
    const todos = ref([]); // to-do 리스트 (본인이 작성한 Todo 리스트만 출력)
    const getTodos = async (page = currentPage.value) => {
      currentPage.value = page;
      try {
        const res =  await axios.get(
          `http://localhost:3000/todos?_sort=id&_order=desc&enabled=true&userId=${getUserId}&subject_like=${searchTodo.value}&_page=${currentPage.value}&_limit=${limitInPage}`
        );
        numberOfTodos.value = res.headers['x-total-count'];
        todos.value = res.data;
      } catch(err) {
        err.value = '오류로 인해 불러올 수 없습니다!';
        triggerToast(err.value, 'danger');
      }
    }
    getTodos();

    const addTodo = async (todo) => { // to-do 추가
      try {
        await axios.post('http://localhost:3000/todos', {
          userId: todo.userId,
          subject: todo.subject,
          isCompleted: todo.isCompleted,
          enabled: todo.enabled,
        });
        triggerToast('성공적으로 추가 되었습니다.');
        getTodos(1);
      } catch(err) {
        err.value = '오류로 인해 추가할 수 없습니다!';
        triggerToast(err.value, 'danger');
      }
    };

    const deleteTodo = async (getId) => { // to-do 삭제 (실제로는 enabled 값만 바꿔서 비활성화)
      try {
        await axios.patch(`http://localhost:3000/todos/${getId}`, {
          enabled: false
        });
        triggerToast('성공적으로 삭제 되었습니다.');
        getTodos(1);
      } catch(err) {
        err.value = '오류로 인해 삭제할 수 없습니다!'
        triggerToast(err.value, 'danger');
      }
    };

    const toggleTodo = async (index, checked) => { // to-do 토글
      const getId = todos.value[index].id;
      try {
        await axios.patch(`http://localhost:3000/todos/${getId}`, {
          isCompleted: checked
        });
        todos.value[index].iscompleted = checked;
        triggerToast('성공적으로 변경 되었습니다.');
      } catch(err) {
        err.value = '오류로 인해 변경할 수 없습니다!'
        triggerToast(err.value, 'danger');
      }
    };

    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    } = useToast(); // 변경 사항시 알림

    return {
      isLogin,
      moveToLogin,

      numberOfPages,
      currentPage,

      todos,
      getTodos,
      addTodo,
      deleteTodo,
      toggleTodo,
      searchTodo,
      searchTodoKeyup,

      showToast,
      toastMessage,
      toastAlertType,
    };
  }
}
</script>


<style scoped>
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

.page-cursor {
  cursor: pointer;
}
</style>