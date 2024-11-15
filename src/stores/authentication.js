import { defineStore } from 'pinia';
import { router } from '@/router';

import api from '@/api';

export const useAuthStore = defineStore('auth', {
    state() {
        return{
            token: localStorage.getItem("token"),
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
                const data = await api.post('/login',
                    {
                    email: email,
                    password: password
                    }
                )
                // router.push('/') // retorna pra home

                // atualiza o pinia
                this.token = data.data.token

                // coloca dados no local storage pra deixar o usuário logado caso ele reinicie a página
                localStorage.setItem("token", data.data.token)

            } catch (error) {
                console.log(error)
            }
        },

        async regUser(username, nickname, email, password) {
            try{
                if (nickname){ // se o usuário digitou um apelido
                    const data = await api.post('/create', 
                        {   
                            name: username,
                            nickname: nickname,
                            email: email,
                            password: password,
                        }
                    )
                    this.token = data.data.token
                    localStorage.setItem("token", data.data.token)

                } else {
                    const data = await api.post('/create', 
                        {   
                            name: username,
                            nickname: null,
                            email: email,
                            password: password,
                        }
                    )
                    this.token = data.data.token
                    localStorage.setItem("token", data.data.token)
                }

                // router.push('/')
                
            } catch (error) {
                console.log(error)
            }
        },


        logout() {
            this.token = null;
            localStorage.removeItem('token');
            router.push('/tipo-de-conta');
        }
    }
});

// https://stackblitz.com/edit/vue-3-pinia-jwt-authentication-tutorial-and-example?file=src%2Fstores%2Fauth.store.js