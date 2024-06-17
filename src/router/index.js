import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AccountType from '../views/register/AccountType.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/tipo-de-conta',
      name: 'tipo de conta',
      component: AccountType
    },

    {
      path: '/register/',
      name: 'registrar-se como aluno',
      component: ''
    }
    
  ]
})

export default router



// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
  // component: () => import('../components/pages/CreateAccount.vue')