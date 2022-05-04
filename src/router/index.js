/**
 * 작성일 : 2022.04.30
 * 작성자 : 부설연구소 나민우
 * 설명 : 라우터 인덱스
 */


import { createRouter, createWebHistory } from 'vue-router';

import TodosList from '../pages/todos/TodosIndex.vue'; // todos 목록 페이지
import Todo from '../pages/todos/_id.vue'; // todo 수정 페이지

import User from '../pages/users/_id.vue'; // User 상세 페이지

import Login from '../pages/auth/LoginAuth.vue'; // 로그인 페이지

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'TodosList',
      component: TodosList,
    },
    {
      path: '/:id',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
});

export default router;