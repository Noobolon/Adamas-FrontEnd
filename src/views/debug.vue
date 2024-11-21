<script>
import { useProjectStore } from '@/stores/project';
import { useEventStore } from '@/stores/event';
import { useAuthStore } from '@/stores/authentication';

export default{
    name: 'debug',
    
    data(){
        return{
            projects_list: this.projects_list,
            events_list: this.events_list,
            oi: localStorage.getItem("token"),

            projectStore: useProjectStore(),
            eventStore: useEventStore(),
            authStore: useAuthStore()
        }
    },

    created(){
        this.projectStore.fetchProjects()
        this.eventStore.fetchEvents()
    },
    
}

</script>

<template>

    <p><b>usuário: </b>{{ authStore.getUser }}</p>
    <p v-if="authStore.getUser">expira em: {{ authStore.getUser.exp }}</p>
    <p v-if="authStore.checkToken">expirou</p>

    <p> <b>token do localstorage: </b> {{ oi }}</p>
    <p> <b>token do pinia: </b> {{ authStore.getToken }}</p>
    <p> <b>tipo de conta: </b> {{ authStore.getAccType }} </p>

    <button @click="this.authStore.logout()">sair</button>

    <div v-for="project in this.projectStore.getProjects">
        <br>
        {{ project }}
    </div>

    <div v-for="event in this.eventStore.getEvents">
        <br>
        {{ event }}
    </div>

</template>

<style scoped>
@import url(..//assets/css/pesquisas.css);

p{
    margin: 2%;
}

</style>