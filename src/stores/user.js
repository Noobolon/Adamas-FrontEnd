import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
    state: () => ({ 
        id: 1,
        name: 'Eduardo',
        nickname: 'edu',
        description: '',
        email: 'edu@gmail.com',
        password: 'a'

    }),

    getters: {
      
    },

    actions: {
      
    },
})