<script>
import ProjectComponent from '@/components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';
import api from '@/api'

export default {
    name: "UserPage",
    components: { ProjectComponent },

    data(){
        return{
            user_projects: {}
        }
    },

    

    setup() {
        const projectStore = useProjectStore()
        return { projectStore }
    },

    methods: {
        async getProjectsFromUserID(userID) {
            try {
                const response = await api.get(`project/user/${userID}`)
                .then(function (response) {
                    const dados = response.data;
                    var user_projects = dados
                });

            } catch (error) {
                console.log(error);
            }
        }
    },

    mounted(){
        this.getProjectsFromUserID(1)
        
    }

}

</script>


<template>

<div id="banner">
    <img src="" alt="">
</div>

<div class="container">
    <aside class="user_container">
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
    </aside>

    <main>
        <div class="cntnt_container">
            <div v-for="project in this.user_projects">
                <ProjectComponent :project="project" :key="project.project_id" />
            </div>
        </div>
    </main>

</div>
 
</template>


<style scoped>
@import url(@/assets/css/pesquisas.css);
@import url(@/assets/css/categorias.css);


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
    float: left;
}



</style>