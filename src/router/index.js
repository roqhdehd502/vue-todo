/**
 * 작성일 : 22년 04월 30일
 * 작성자 : 나민우
 * 설명 : router index
 */


import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/HomeIndex.vue'; // 메인 페이지
import TodosList from '../pages/todos/TodosIndex.vue'; // todos 목록 페이지
import Todo from '../pages/todos/_id.vue'; // todo 수정 페이지


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todos',
      name: 'TodosList',
      component: TodosList,
    },
    {
      path: '/todos/:id',
      name: 'Todo',
      component: Todo,
    },
  ]
});

export default router;