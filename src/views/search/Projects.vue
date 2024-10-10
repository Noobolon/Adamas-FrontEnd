<script>
import { RouterLink } from 'vue-router';
import ProjectComponent from '../../components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';


export default{
    name: "Projects",
    components: { RouterLink, ProjectComponent},


    data() {
        return {
            search_content: this.search_content,
            projects_list: this.projects_list
        };
    },
    
    setup() {
        const projectStore = useProjectStore()
        return { projectStore }
    },

    created(){
        this.projectStore.fetchProjects()
    },

    mounted(){
        // Por algum motivo precisa esperar um pouco antes de atualizar as informações
        setTimeout(() => {
            this.projects_list = this.projectStore.getProjects
        }, 1000)
    }
}

</script>

<template>
    <main>
        <div class="content">
            <div class="srch_container">
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <nav class="ctgry_container">
                <RouterLink to="/projetos" id="selected">Projetos</RouterLink>
                <RouterLink to="/eventos">Eventos</RouterLink>
                <RouterLink to="/usuarios">Usuários</RouterLink>
            </nav>

            <div class="cntnt_container">
                <div v-for="project in this.projects_list">
                    <ProjectComponent :project="project" :key="project.project_id" />
                </div>
            </div>
        </div>

        <div class="tag_container">
            <h2>Categorias</h2>
            <p class="cat">AAAAAAAAA</p>
            <p class="cat">aaaaaaa</p>
            <p class="cat">aAAAAAAAA Aa a</p>
        </div>   

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);
@import url(../../assets/css/categorias.css);


</style>