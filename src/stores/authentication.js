import { defineStore } from 'pinia';
import { router } from '@/router';
import { jwtDecode } from 'jwt-decode';

import api from '@/api';

export const useAuthStore = defineStore('auth', {
    state() {
        return{
            token: localStorage.getItem("token"),
            acc_type: localStorage.getItem("acc_type"),
        }       
    },

    getters:{
        getToken(state){
            return state.token
        },

        getAccType(state){
            return state.acc_type
        },

        getUser(state){
            try {
                if (state.token){
                    return jwtDecode(state.token)
                }
            } catch (error) {
                console.log(error)
            }
        },

        checkToken(){
            if (this.token != null){
                const timeNow = Math.floor(Date.now() / 1000)
                return this.getUser.exp < timeNow
            }
        },
     
    },

    actions: {
        clearUserData() {
            this.token = null;
            this.acc_type = null;
            localStorage.removeItem("token");
            localStorage.removeItem("acc_type");
        },

        async loginUser(email, password) {
            try{
                const data = await api.post('/login',
                    {
                    email: email,
                    password: password
                    }
                )

                // atualiza o pinia
                this.token = data.data.token
                // coloca dados no local storage pra deixar o usuário logado caso ele reinicie a página
                localStorage.setItem("token", data.data.token)

                // faz o mesmo pra especificação de tipo de usuário
                this.acc_type = "common"
                localStorage.setItem("acc_type", "common")

                // retorna pra home
                await router.push('/') 
                location.reload()


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

                this.acc_type = "common"
                localStorage.setItem("acc_type", "common")

                await router.push('/') 
                location.reload()

            } catch (error) {
                console.log(error)
            }
        },

        async loginInstitution(email, password) {
            try{
                const data = await api.post('/login/institution',
                    {
                    email: email,
                    password: password
                    }
                )
                
                this.token = data.data.token
                localStorage.setItem("token", data.data.token)

                this.acc_type = "institution"
                localStorage.setItem("acc_type", "institution")

                await router.push('/') 
                location.reload()

            } catch (error) {
                console.log(error)
            }
        },

        async regInstitution(username, cnpj, email, password) {
            try{
                const data = await api.post('/create/institution ', 
                    {
                        name: username,
                        cnpj: cnpj,
                        email: email,
                        password: password,
                    }
                )
            
                this.token = data.data.token
                localStorage.setItem("token", data.data.token)

                this.acc_type = "institution"
                localStorage.setItem("acc_type", "institution")

                await router.push('/') 
                location.reload()

                
            } catch (error) {
                console.log(error)
            }
        },



        async logout() {
            this.token = null;
            this.acc_type = null;
            localStorage.removeItem('token');
            localStorage.removeItem('acc_type');
            await router.push('/');
            location.reload();
        }
    }
});

