// import { defineStore } from 'pinia';

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

// export const useUsersStore = defineStore('users', {

//     state() {
//         return{
//             users: []
//         };
//     },

//     actions: {
//         async getAll() {
//             this.users = { loading: true };
//             try{
//                 api.get(baseUrl)
//                 this.users = users
//             }
//             catch{
//                 this.users = { error }
//             }
//         }
//     }
// });