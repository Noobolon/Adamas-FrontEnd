import { defineStore } from 'pinia';
import { router } from '@/router';

import api from '@/api';

export const useAuthStore = defineStore('auth', {
    state() {
        return{
            token: "",
        }       
    },

    getters:{
        getToken(state){
            return state.token
        }
    },

    actions: {
        async loginUser(email, password) {
            try{
                const data = await api.post('/login', {email: email, password: password})
                router.push('/') // retorna pra home

                // atualiza o pinia
                this.token = data.data.token
,
                // coloca dados no local storage pra deixar o usuário logado caso ele reinicie a página
                localStorage.setItem("token", data.data.token)
            } 
            catch (error){
                console.log(error)
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('token');
            router.push('/tipo-de-conta');
        }
    }
});

// https://stackblitz.com/edit/vue-3-pinia-jwt-authentication-tutorial-and-example?file=src%2Fstores%2Fauth.store.js