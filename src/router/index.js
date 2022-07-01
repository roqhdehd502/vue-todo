/**
 * 작성일 : 2022.04.30
 * 작성자 : 부설연구소 나민우
 * 설명 : 라우터 인덱스
 */


import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{
    path: '/',
    name: 'TodosList',
    component: () => import('../pages/todos/TodosIndex.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/auth/LoginAuth.vue'),
  },
  {
    path: '/todo/:id',
    name: 'Todo',
    component: () => import('../pages/todos/_id.vue'),
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../pages/users/_id.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router