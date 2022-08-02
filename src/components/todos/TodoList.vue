<template>
    <div 
      v-for="(todo, index) in todos" 
      :key="todo.docId ? todo.docId : index" 
      class="card mt-2"
    >
      <div 
        class="card-body p-2 d-flex align-items-center todo-cursor"
        @click="moveToPage(todo.docId)"
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
                @click.stop="openModal(todo.docId)"
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

import TodoDetail from '@/components/Main/todos/TodoDetail.vue'; // Todo 상세 컴포넌트

export default {
  name: 'TodoList',

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
    const docId = ref(null);
    const showModal = ref(false);

    const openModal = (id) => {
      docId.value = id;
      showModal.value = true;
    };

    const closeModal = () => {
      docId.value = null;
      showModal.value = false;
    };
    
    const deleteTodo = () => {
      emit('delete-todo', docId.value);
      docId.value = null;
      showModal.value = false;
    };

    const toggleTodo = (index, event) => {
      emit('toggle-todo', index, event.target.checked);
    };

    const moveToPage = (docId) => {
      router.push({
        name: 'Todo',
        params: {
          id: docId
        }
      });
    }

    return {
      showModal,
      openModal,
      closeModal,
      deleteTodo,
      toggleTodo,
      moveToPage,
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