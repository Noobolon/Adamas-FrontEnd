<script>
import { useProjectStore } from '@/stores/project';

const projectStore = useProjectStore()

export default{
    name: 'debug',
    
    data(){
        return{
            projeto_exemplo: {"name": "adamas", "owner": "aluno", "desc": "descrição boa"},
            projects_list: this.projects_list
        }
    },

    mounted(){
        
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