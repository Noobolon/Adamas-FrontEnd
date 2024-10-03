<script>
import { useProjectStore } from '@/stores/project';

export default{
    name: 'debug',
    
    data(){
        return{
            projeto_exemplo: {"name": "adamas", "owner": "aluno", "desc": "descrição boa"},
            projects_list: this.projects_list
        }
    },

    setup() {
        const projectStore = useProjectStore()
        return { projectStore }
    },

    created(){
        this.projectStore.fetchProjects()
    },

    mounted(){
        setTimeout(() => {
            this.projects_list = this.projectStore.projects
            console.log("Local list: ", this.projects_list)
        }, 2000)
        
    }
}

</script>

<template>
    <div v-for="project in projects_list">
        {{ project.title }}
    </div>

</template>

<style scoped>
@import url(..//assets/css/pesquisas.css);


</style>