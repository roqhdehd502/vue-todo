import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
          {
            path: '/',
            name: 'TodosList',
            component: () => import('@/views/todos/TodosIndex.vue'),
          },
          {
            path: '/todo/:id',
            name: 'Todo',
            component: () => import('@/views/todos/_id.vue'),
          },
      ],
  },
  
  {
      path: '/',
      name: 'emptyLayout',
      component: () => import('@/layouts/EmptyLayout.vue'),
      children: [
          {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/auth/LoginAuth.vue'),
          },
          {
            path: '/signup',
            name: 'SignUp',
            component: () => import('@/views/auth/SignUpAuth.vue'),
          },
          {
            path: '/findpassword',
            name: 'FindPassword',
            component: () => import('@/views/auth/FindPassword.vue'),
          },
          {
            path: '/user/:id',
            name: 'User',
            component: () => import('@/views/users/_id.vue'),
          },
      ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router