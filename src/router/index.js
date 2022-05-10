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
import PageNotFound from '../pages/errors/ErrorIndex.vue'; // 에러 페이지

//import { useAuth } from '@/composables/auth'; // 유저 인증 컴포저블

const authGuard = (to,from,next) => { // 인증 처리 가드
  const loggedIn = sessionStorage.getItem('userToken');

  if (!loggedIn) {
    return next('/login');
  }

  next();
}

// const accessGuard = (to,from,next) => { // 접근제어 처리 가드
//   const loggedIn = sessionStorage.getItem('userToken');

//   if (!loggedIn) {
//     return next('/login');
//   }

//   next();
// }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
    {
      path: '/404',
      component: PageNotFound,
    },
    {
      path: '/',
      name: 'TodosList',
      component: TodosList,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/todo/:id',
      name: 'Todo',
      component: Todo,
      beforeEnter: authGuard,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      beforeEnter: authGuard,
    },
  ]
});

export default router;