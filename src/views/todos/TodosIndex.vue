<template>
  <div>
    <div v-if="isLogin">
      <div class="row todo-form-sticky"> 
        <TodoForm @add-todo="addTodo" />
      </div>

      <div 
        v-if="!loading"
        class="mb-3 bg-light text-success spinner-border" 
        role="status"
        style="margin-left: 45%"
      >
        <span class="visually-hidden">Loading...</span>
      </div>

      <div v-if="loading && !todos.length" class="card p-3 bg-secondary text-center" style="color: white;">
        추가된 할 일이 없습니다.
      </div>

      <div class="todo-list-overflow">
        <ToDoList 
          v-if="loading"
          :todos="todos" 
          @toggle-todo="toggleTodo" 
          @delete-todo="deleteTodo"
        />
      </div>
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
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

import { todoMessages } from '@/common/messages';

import { getUserInfo } from '@/remote/auth';
import { loadTodos, createTodo, updateToggleTodo, disabledTodo } from '@/remote/todos';

import ToDoList from '@/components/todos/TodoList.vue';
import TodoForm from '@/components/todos/TodoForm.vue';


export default {
  name: 'TodoIndex',

  components: {
    ToDoList, 
    TodoForm,
  },

  setup() {
    const store = useStore();

    const loading = ref(false); 
    const isLogin = ref(false);
    const userId = ref("");
    const todos = ref([]);

    const getTodos = async () => {
      if (getUserInfo()) {
        try {
          userId.value = getUserInfo().uid;
          isLogin.value = true;
          loading.value = false;
          todos.value = await loadTodos(userId.value);
          loading.value = true;
        } catch(err) {
          store.dispatch('toast/triggerToast', todoMessages.FAILED_TODOS_INFO);
        }
      } else {
        isLogin.value = false;
      }
    };
    onMounted(() => { getTodos() });
    

    const addTodo = async (todo) => {
      try {
        const addTodoObj = {
          userId: todo.userId,
          subject: todo.subject,
          uploadDate: todo.uploadDate,
          isCompleted: todo.isCompleted,
          enabled: todo.enabled,
        }
        await createTodo(addTodoObj);
        getTodos();
      } catch(err) {
        store.dispatch('toast/triggerToast', todoMessages.FAILED_CREATE_TODO_INFO);
      }
    };

    const toggleTodo = async (index, isChecked) => {
      const docId = todos.value[index].docId;
      try {
        await updateToggleTodo(docId, isChecked);
        store.dispatch('toast/triggerToast', todoMessages.SUCCESS_UPDATE_TODO_INFO);
        getTodos();
      } catch(err) {
        store.dispatch('toast/triggerToast', todoMessages.FAILED_UPDATE_TODO_INFO);
      }
    };

    const deleteTodo = async (docId) => {
      try {
        await disabledTodo(docId);
        store.dispatch('toast/triggerToast', todoMessages.SUCCESS_DELETE_TODO_INFO);
        getTodos();
      } catch(err) {
        console.log(err);
        store.dispatch('toast/triggerToast', todoMessages.FAILED_DELETE_TODO_INFO);
      }
    };

    const moveToLogin = () => {
      router.push({
        name: 'Login',
      });
    }

    return {
      loading,
      isLogin,
      todos,

      getTodos,
      addTodo,
      toggleTodo,
      deleteTodo,
      moveToLogin,
    };
  }
}
</script>



<style scoped>
.todo-form-sticky {
  top: 0;
  position: sticky;
  z-index: 5;
}

.todo-list-overflow {
  border-top: 1px solid #dcdcdc; border-bottom: 1px solid #dcdcdc;
  overflow: auto;
  height: 300px;
}
</style>