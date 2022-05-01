/**
 * 작성일 : 22년 04월 30일
 * 작성자 : 부설연구소 나민우
 * 설명 : 라우터 인덱스
 */


import { createRouter, createWebHistory } from 'vue-router';

import TodosList from '../pages/todos/TodosIndex.vue'; // todos 목록 페이지

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'TodosList',
      component: TodosList,
    }
  ]
});

export default router;