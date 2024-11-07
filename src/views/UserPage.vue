<script>
import ProjectComponent from '@/components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';
import { storeToRefs } from 'pinia'

export default {
    name: "UserPage",
    components: { ProjectComponent},

    data(){

    },

    setup() {
        const projectStore = useProjectStore()
        const { getProjectFromUserID } = storeToRefs(projectStore)
        return { projectStore, getProjectFromUserID }
    },

    methods: {

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
            <div v-for="project in this.projectStore.getProjectFromUserID(1)">
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