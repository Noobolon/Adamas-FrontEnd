import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/authentication' 


export const router = createRouter({
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

    // Usuário (temporário, depois provavelmente será colocado em um lugar próprio)
    {
      path: '/user',
      name: 'usuário',
      component: () => import('../views/UserPage.vue')
    },
    

    // Pesquisas 
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/search/Projects.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/search/Events.vue')
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/search/Users.vue')
    },


    // Telas de cadastro
    {
      path: '/cadastrar/usuario',
      name: 'cadastrar-se como usuário comum',
      component: () => import('../views/register/RegUser.vue')
    },
    {
      path: '/cadastrar/instituicao',
      name: 'cadastrar-se como instituição',
      component: () => import('../views/register/RegInstitution.vue')
    },
    {
      path: '/login/usuario',
      name: 'login como usuário',
      component: () => import('../views/register/LogUser.vue')
    },
    {
      path: '/login/instituicao',
      name: 'login como instituição',
      component: () => import('../views/register/LogInstitution.vue')
    },


    // página de debug (será removido na versão final)
    {
      path: '/debug',
      name: 'o debugas',
      component: () => import('../views/debug.vue')
    },

    { 
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
    
  ],
  scrollBehavior(to, from, savedPosition) {
    // voltar ao topo
    return { top: 0 }
  },
})


// router.beforeEach(async (to) => {
//   // redireciona pra página de login
//   const publicPages = ['/', '/tipo-de-conta', '/cadastrar/usuario', '/login/usuario']; // temporário 
//   const authRequired = !publicPages.includes(to.path);
//   const authStore = useAuthStore();

//   if (authRequired && !authStore.user) {
//       return {
//           path: '/tipo-de-conta',
//           query: { returnUrl: to.href }
//       };
//   }
// }); 
//  tutoriwilson
//  https://jasonwatmore.com/vue-3-pinia-jwt-authentication-with-refresh-tokens-example-tutorial




export default router


