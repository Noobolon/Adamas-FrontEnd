import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/tipo-de-conta',
      name: 'tipo de conta',
      component: () => import('../views/register/AccountType.vue')
    },
    {
      path: '/cadastrar/usuario',
      name: 'cadastrar-se como usuário comum',
      component: () => import('../views/register/RegUser.vue')
    },
    {
      path: '/cadastrar/instituicao',
      name: 'cadastrar-se como instituição',
      component: () => import('../views/register/RegInstitution.vue')
    }
    
  ]
})

export default router



// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
  // component: () => import('../components/pages/CreateAccount.vue')