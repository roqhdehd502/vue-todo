<!--
작성일 : 2022.04.28
작성자 : 부설연구소 사원 나민우
설명 : Todo 리스트
-->


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
            <div class="col">
              <button 
                class="btn btn-success btm-sm" 
                type="button" 
                @click.stop="openModal(todo.id)"
              >
                ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <teleport to='#modal'>
      <Modal 
        v-if="showModal" 
        @close="closeModal" 
        @delete="deleteTodo"
      />
    </teleport>
</template>


<script>
import { ref } from 'vue';

import Modal from '@/components/todos/TodoModal.vue'; // Todo 모달 컴포넌트

import router from '@/router'; // 라우터

export default {
    components: {
      Modal
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

      const toggleTodo = (index, event) => { // to-do 토글
        emit('toggle-todo', index, event.target.checked);
      };
      
      const deleteTodo = () => { // to-do 삭제
        emit('delete-todo', infoId.value);
        showModal.value = false;
        infoId.value = null;
      };

      const showModal = ref(false);
      const infoId = ref(null);
      const openModal = (id) => {
        infoId.value = id;
        showModal.value = true;
      };
      const closeModal = () => {
        infoId.value = null;
        showModal.value = false;
      };

      return {
        moveToPage,
        toggleTodo,
        deleteTodo,
        showModal,
        openModal,
        closeModal,
      }
    }
}
</script>


<style scoped>
.check {
  text-decoration: line-through;
  color: gray;
}
.todo-cursor {
  cursor: pointer
}
</style>