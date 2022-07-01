<template>
    <div 
      v-for="(todo, index) in todos" 
      :key="todo.id" 
      class="card mt-2"
    >
      <div 
        class="card-body p-2 d-flex align-items-center todo-cursor"
        @click="moveToPage(todo.id)"
      >
        <div class="flex-glow-1">
          <input 
            class="ml-2 mr-2"
            type="checkbox" 
            v-model="todo.isCompleted" 
            @change="toggleTodo(index, $event)"
            @click.stop
          />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-9">
              <label class="form-check-label" :class="{ check: todo.isCompleted }">
                {{ todo.subject }}
              </label>
            </div>
            <div class="col" style="text-align:right">
              <button 
                class="btn btn-danger btm-sm" 
                type="button" 
                @click.stop="openModal(todo.id)"
              >
                <span class="material-icons">
                  delete_outline
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <teleport to='#modal'>
      <TodoDetail 
        v-if="showModal" 
        @close="closeModal" 
        @delete="deleteTodo"
      />
    </teleport>
</template>


<script>
import { ref } from 'vue';

import router from '@/router';

import TodoDetail from '@/components/todos/TodoDetail.vue'; // Todo 상세 컴포넌트

export default {
  components: {
    TodoDetail
  },

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
    const moveToPage = (getId) => { // to-do 상세 페이지 이동
      router.push({
        name: 'Todo',
        params: {
          id: getId
        }
      });
    }

    const todoId = ref(null); // to-do id

    const showModal = ref(false); // to-do 모달
    const openModal = (getId) => {
      todoId.value = getId;
      showModal.value = true;
    };
    const closeModal = () => {
      todoId.value = null;
      showModal.value = false;
    };
    
    const deleteTodo = () => { // to-do 삭제
      emit('delete-todo', todoId.value);
      showModal.value = false;
      todoId.value = null;
    };

    const toggleTodo = (index, event) => { // to-do 토글
      emit('toggle-todo', index, event.target.checked);
    };

    return {
      moveToPage,
      showModal,
      openModal,
      closeModal,
      deleteTodo,
      toggleTodo,
    }
  }
}
</script>


<style scoped>
.check {
  text-decoration: line-through;
  color: gray;
}
.todo-cursor:hover {
  cursor: pointer;
  background-color: rgba(20, 20, 20, 0.15);
}
</style>