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
            oi: localStorage.getItem("token")
        }
    },

    setup() {
        const projectStore = useProjectStore()
        const eventStore = useEventStore()
        const authStore = useAuthStore()
        return { projectStore, eventStore, authStore }
    },

    created(){
        this.projectStore.fetchProjects()
        this.eventStore.fetchEvents()
    },

}

</script>

<template>

    <p> <b>token do localstorage: </b> {{ oi }}</p>
    <p> <b>token do pinia: </b> {{ authStore.getToken }}</p>


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


</style>