import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{
    path: '/',
    name: 'TodosList',
    component: () => import('../views/todos/TodosIndex.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/LoginAuth.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/auth/SignUpAuth.vue'),
  },
  {
    path: '/todo/:id',
    name: 'Todo',
    component: () => import('../views/todos/_id.vue'),
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/users/_id.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router