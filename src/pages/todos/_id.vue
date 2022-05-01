<!--
작성일 : 2022.04.30
작성자 : 부설연구소 사원 나민우
설명 : to-do 상세 페이지
-->


<template>
  <div 
    v-if="loading"
    class="spinner-border text-success justify-content-center" 
    role="status"
  >
    <span class="visually-hidden">Loading...</span>
  </div>

  <form v-else @submit="onUpdate">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label>목표</label>
          <input 
            v-model="todo.subject"
            type="text" 
            class="form-control" 
          />
        </div>
      </div>
      <div class="col-6">
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
    <div class="row">
      <div class="col">
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="!isTodoUpdated"
        >
          저장
        </button>
      </div>
      <div class="col">
        <button class="btn btn-outline-dark" @click="moveToTodoListPage">
          이전
        </button>
      </div>
    </div>
  </form>
  
  <transition name="fade">
    <Toast 
      v-if="showToast" 
      :message="toastMessage" 
      :type="toastAlertType"
    />
  </transition>
</template>


<script>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import _ from 'lodash';
import axios from 'axios';

import Toast from '@/components/functional_components/ToastComponent.vue'; // 토스트 컴포넌트

import { useToast } from '@/composables/toast'; // 토스트 컴포저블

export default {
  components: {
    Toast
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const moveToTodoListPage = () => { // to-do 리스트 페이지 이동
      router.push({
        name: 'TodosList'
      });
    }
    
    const getId = route.params.id; // to-do 정보 불러오기
    const loading = ref(true);
    const todo = ref(null);
    const originTodo = ref(null);
    const getTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/todos/${getId}`);
        todo.value = { ...res.data };
        originTodo.value = { ...res.data };
        loading.value = false;
      } catch(err) {
        triggerToast('내용을 불러올 수 없습니다!', 'danger');
      }
    };
    getTodo();

    const isTodoUpdated = computed(() => { // to-do 토글 상태
      return !_.isEqual(todo.value, originTodo.value);
    });
    const toggleTodoStatus = () => { 
      try {
        todo.value.isCompleted = !todo.value.isCompleted;
      } catch(err) {
        triggerToast('오류로 인해 변경할 수 없습니다!', 'danger');
      }
    }

    const onUpdate = async (e) => { // to-do 업데이트
      e.preventDefault();
      try {
        const res = await axios.put(`http://localhost:3000/todos/${getId}`, {
          subject: todo.value.subject,
          isCompleted: todo.value.isCompleted,
        });
        originTodo.value = {...res.data};
        //triggerToast('변경되었습니다.');
        router.push({
          name: 'TodosList'
        });
      } catch(err) {
        triggerToast('오류로 인해 변경할 수 없습니다!', 'danger');
      }
    }

    const {
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast
    } = useToast(); // 변경 사항시 알림

    return {
      loading,

      todo,
      originTodo,

      toggleTodoStatus,
      onUpdate,
      isTodoUpdated,

      moveToTodoListPage,

      showToast,
      toastMessage,
      toastAlertType,
    }
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
</style>