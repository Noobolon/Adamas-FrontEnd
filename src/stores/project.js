import { defineStore } from 'pinia'
import api from "@/api";

export const useProjectStore = defineStore('counter', {
    state: () => ({ 
        projects: []
    }),

    getters: {
        getProjects(state){
            return state.projects
        }
    },

    actions: {
        async fetchProjects(){
            try{
                const dados = await api.get("/project/search")
                this.projects = dados.data
            }
            catch (error){
                console.log(error)
            }
        }

    },
})