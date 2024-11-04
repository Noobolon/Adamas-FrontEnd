<script>
import { useProjectStore } from '@/stores/project';
import { useEventStore } from '@/stores/event';

export default{
    name: 'debug',
    
    data(){
        return{
            projeto_exemplo: {"name": "adamas", "owner": "aluno", "desc": "descrição boa"},
            projects_list: this.projects_list,
            events_list: this.events_list
        }
    },

    setup() {
        const projectStore = useProjectStore()
        const eventStore = useEventStore()
        return { projectStore, eventStore }
    },

    created(){
        this.projectStore.fetchProjects()
        this.eventStore.fetchEvents()
    },

}

</script>

<template>
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