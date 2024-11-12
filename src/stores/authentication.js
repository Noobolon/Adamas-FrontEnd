import { defineStore } from 'pinia';
import { router } from '@/router';

import api from '@/api';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null,
        refresh: null
    }),

    actions: {
        async loginUser(email, password) {
            api.post('/login', email, password)
            .then(function (response) {
                if (response){
                    console.log(response)
                    router.push('/')
                    console.log("deu certo")
                }
            })
            .catch(function (error) {                    
                console.log(error);
            });

            // // atualiza o pinia
            // this.user = user

            // coloca dados no local storage pra deixar o usuário logado caso ele reinicie a página
            // localStorage.setItem('user', JSON.stringify(user))
        
            
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/account/login');
        }
    }
});

// https://stackblitz.com/edit/vue-3-pinia-jwt-authentication-tutorial-and-example?file=src%2Fstores%2Fauth.store.js