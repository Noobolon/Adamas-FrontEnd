import { defineStore } from 'pinia'
import api from "@/api";

export const useUserStore = defineStore('user', {

    state() {
        return{
            users: []
        };
    },

    getters: {
        getUsers(state){
            return state.users
        }
    },

    actions: {
        async fetchUsers(){
            try{
                const dados = await api.get("/user/search")
                this.users = dados.data
            }
            catch (error){
                console.log(error)
            }

        },
        
        
    },
})