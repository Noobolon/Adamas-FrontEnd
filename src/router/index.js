import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authentication.js' 


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

    {
      path: '/criar-projeto',
      name: 'criar projeto',
      component: () => import('../views/CreateProject.vue')
    },

    {
      path: '/criar-evento',
      name: 'criar evento',
      component: () => import('../views/CreateEvent.vue')
    },

    {
      path: '/projeto/:id',
      name: 'projeto',
      component: () => import('../views/ProjectPage.vue')
    },

    {
      path: '/usuario/:id',
      name: 'usuário',
      component: () => import('../views/UserPage.vue')
    },
    
    {
      path: '/evento/:id',
      name: 'evento',
      component: () => import('../views/EventPage.vue')
    },

    {
      path: '/instituicao/:id',
      name: 'instituição',
      component: () => import('../views/InstitutionPage.vue')
    },
    {
      path: '/instituicao/editar-evento/:e_id',
      name: 'editar evento',
      component: () => import('../views/EventEditor.vue')
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


    // Página de debug (será removido na versão final)
    {
      path: '/debug',
      name: 'o debugas',
      component: () => import('../views/debug.vue')
    },

    // Redireciona páginas não-existentes pra home 
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


router.beforeEach(async (to) => {
  const privateCommonPages = ['/criar-projeto'];
  const privateInstPages = ['/criar-evento', '/instituicao/:id'];

  const userAuthRequired = privateCommonPages.includes(to.path);
  const instAuthRequired = privateInstPages.includes(to.path) || to.path.startsWith('/instituicao/'); 

  const authStore = useAuthStore();
  const token = authStore.getToken;
  const accType = authStore.getAccType;

  // se requirir autenticação, o tipo de conta não for comum ou o token está inválido
  if (userAuthRequired && accType !== 'common' && (!token || !authStore.checkToken)) {
    return {
      path: '/tipo-de-conta',
      query: { returnUrl: to.fullPath }
    };
  }

  if (instAuthRequired && accType !== 'institution' && (!token || !authStore.checkToken)) {
    return {
      path: '/tipo-de-conta',
      query: { returnUrl: to.fullPath }
    };
  }
}); 

export default router