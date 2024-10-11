import { defineStore } from 'pinia'
import api from "@/api";

export const useEventStore = defineStore('events', {

    state() {
        return{
            events: []
        };
    },

    getters: {
        getEvents(state){
            return state.events
        }
    },

    actions: {
        async fetchEvents(){
            try{
                const dados = await api.get("/event/search")
                console.log(dados)
                this.events = dados
            }
            catch (error){
                console.log(error)
            }

        }
    },
})