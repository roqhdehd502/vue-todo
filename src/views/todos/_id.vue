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
      @click="onUpdate"
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

import { doc, getDoc, updateDoc } from "firebase/firestore";
import _ from 'lodash';

import { db } from "../../firebaseConfig";


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
    
    const getTodo = async () => {
      try {
        const docRef = doc(db, "todos", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          todo.value = { ...docSnap.data() };
          originTodo.value = { ...docSnap.data() };
        } else {
          store.dispatch('toast/triggerToast', { 
              message: '내용을 불러올 수 없습니다!', 
              type: 'danger' 
          }); 
        }
        loading.value = false;
      } catch(err) {
        err.value = '내용을 불러올 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'danger' 
        });
      }
    };
    getTodo();

    const isTodoUpdated = computed(() => {
      return !_.isEqual(todo.value, originTodo.value);
    });

    const toggleTodoStatus = () => { 
      try {
        todo.value.isCompleted = !todo.value.isCompleted;
      } catch(err) {
        err.value = '오류로 인해 변경할 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'warning' 
        });
      }
    }

    const onUpdate = async () => {
      try {
        const docRef = doc(db, "todos", docId);
        await updateDoc(docRef, {
          userId: originTodo.value.userId,
          subject: todo.value.subject,
          isCompleted: todo.value.isCompleted,
          enabled: originTodo.value.enabled,
        });
        store.dispatch('toast/triggerToast', { 
            message: '성공적으로 변경 되었습니다.', 
            type: 'success' 
        });
        router.push({
          name: 'TodosList'
        });
      } catch(err) {
        err.value = '오류로 인해 변경할 수 없습니다!';
        store.dispatch('toast/triggerToast', { 
            message: err.value, 
            type: 'warning' 
        });
      }
    }

    const moveToTodoListPage = () => {
      router.push({
        name: 'TodosList'
      });
    }

    return {
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
  padding-top: 20vh;
}
</style>