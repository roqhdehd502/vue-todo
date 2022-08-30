<template>
  <div 
    v-if="loading"
    class="spinner-border text-success justify-content-center" 
    role="status"
  >
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="row form-style">
    <div class="col-8">
      <div class="form-group">
        <label>목표</label>
        <input 
          v-model="todo.subject"
          type="text" 
          class="form-control" 
        />
      </div>
    </div>
    <div class="col-4">
      <div class="form-group">
        <label>상태</label>
        <div>
          <button 
            type="button"
            class="btn"
            :class="todo.isCompleted ? 'btn-success' : 'btn-outline-success'"
            @click="toggleTodoStatus"
          >
            {{ todo.isCompleted ? '완료됨' : '완료하기' }}
          </button>
        </div>
      </div>
    </div>
  </div><br />
  <div class="row g-2">
    <button
      @click="onUpdate(docId)"
      type="button" 
      class="btn btn-success"
      :disabled="!isTodoUpdated"
    >
      저장
    </button>
    <button type="button" class="btn btn-secondary" @click="moveToTodoListPage">
      이전
    </button>
  </div>
</template>



<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

import _ from 'lodash';

import { todoMessages } from '@/common/messages';


export default {
  name: 'todos_id',
  
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    
    const docId = route.params.id;
    const loading = ref(true);
    const todo = ref(null);
    const originTodo = ref(null);
    
    const getTodo = async (id) => {
      try {
        await store.dispatch('todosInfo/getTodoInfo', id);
        const res = computed(() => store.getters['todosInfo/getTodo']);
        todo.value = { ... res.value };
        originTodo.value = { ... res.value };
        loading.value = false;
      } catch(err) {
        store.dispatch('toast/triggerToast', todoMessages.FAILED_TODO_INFO);
      }
    };
    getTodo(docId);

    const isTodoUpdated = computed(() => {
      return !_.isEqual(todo.value, originTodo.value);
    });

    const toggleTodoStatus = () => { 
      try {
        todo.value.isCompleted = !todo.value.isCompleted;
      } catch(err) {
        store.dispatch('toast/triggerToast', todoMessages.FAILED_UPDATE_TODO_INFO);
      }
    }

    const onUpdate = async (id) => {
      try {
        if (
          todo.value.subject === "" ||
          todo.value.subject === null
        ) {
          store.dispatch('toast/triggerToast', todoMessages.INVALID_UPDATE_TODO_INFO);
          return;
        } else {
          const updateTodoObj = {
            userId: originTodo.value.userId,
            subject: todo.value.subject,
            isCompleted: todo.value.isCompleted,
          }
          await store.dispatch('todosInfo/updateTodoInfo', { id, updateTodoObj });
          store.dispatch('toast/triggerToast', todoMessages.SUCCESS_UPDATE_TODO_INFO);
          router.push({
            name: 'TodosList'
          });
        }
      } catch(err) {
        store.dispatch('toast/triggerToast', todoMessages.FAILED_UPDATE_TODO_INFO);
      }
    }

    const moveToTodoListPage = () => {
      router.push({
        name: 'TodosList'
      });
    }

    return {
      docId,
      loading,
      todo,
      originTodo,
      
      isTodoUpdated,
      toggleTodoStatus,
      onUpdate,
      moveToTodoListPage,
    }
  }
}
</script>



<style scoped>
.form-style {
  justify-content: center;
  align-items: center;
  padding-top: 3vh;
}
</style>