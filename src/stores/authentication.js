import { defineStore } from 'pinia';
import { router } from '@/router';

import api from '@/api';

export const useAuthStore = defineStore('auth', {
    state() {
        return{
            token: localStorage.getItem('token'),
        }       
    },

    actions: {
        async loginUser(email, password) {
            try{
                const data = (await api.post('/login', {email: email, password: password}))
                console.log(data.data)
                router.push('/') // retorna pra home

                // atualiza o pinia
                this.token = data.data

                // coloca dados no local storage pra deixar o usuário logado caso ele reinicie a página
                localStorage.setItem('token', data.data)

            } 
            catch (error){
                console.log(error)
            }
            
                   
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/account/login');
        }
    }
});

// https://stackblitz.com/edit/vue-3-pinia-jwt-authentication-tutorial-and-example?file=src%2Fstores%2Fauth.store.js