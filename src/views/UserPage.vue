<script>
import ProjectComponent from '@/components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';
import api from '@/api'
import { getProjectsFromUserID } from '@/assets/scripts/project_scripts';

export default {
    name: "UserPage",
    components: { ProjectComponent },

    data(){
        return{
            projectStore: useProjectStore(),

            u_id: this.$route.params,
            user_projects: {}
        }
    },

    methods: {
        
    },

    created(){
        getProjectsFromUserID(1)
        .then(projects => {
            this.user_projects = projects
        })
        .catch(error => {
            console.error(error)
        })
        
    }

}

</script>


<template>

<div id="banner">
    <img src="" alt="">
</div>

<div class="container">
    <div class="user_container">
        <img src="/symbols/UserIcon.png" alt="Usuário">
        <h1>Usuário</h1>
        <ul>
            <li>Descrição</li>
            <li>E-mail</li>
        </ul>
        <ul>
            <li>???</li>
            <li>Sair</li>
        </ul>
    </div>

    <main>
        <div class="cntnt_container">
            <ProjectComponent
            v-for="project in this.user_projects"
            :project="project"
            :key="project.project_id" />

        </div>
        
    </main>

</div>
 
</template>


<style scoped>
@import url(@/assets/css/pesquisas.css);
@import url(@/assets/css/categorias.css);

main{
    display: flex;
    justify-content: center;
}

#banner{
    min-width: 100%;
    min-height: 20vh;
    background-color: var(--SubBackgroundColor);
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.user_container{
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
}

.cntnt_container{
    width: 100%;
}

</style>