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
}

</script>

<template>
    <main>
        <div class="content">
            <div class="srch_container">
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
            </div>
            
            <div class="tag_container mobile">
                <h2>Categorias</h2>
                <div class="categories">
                    <p class="cat">AAAAAAAAA</p>
                    <p class="cat">aaaaaaa</p>
                    <p class="cat">aAAAAAAAA Aa a</p>
                </div>

            </div>
            
            <nav class="ctgry_container">
                <RouterLink to="/projetos" id="selected">Projetos</RouterLink>
                <RouterLink to="/eventos">Eventos</RouterLink>
                <RouterLink to="/usuarios">Usuários</RouterLink>
            </nav>
   
            <div class="cntnt_container">
                <div v-for="project in this.projectStore.getProjects">
                    <ProjectComponent :project="project" :key="project.project_id" />
                </div>
            </div>
        </div>

        <div class="tag_container">
            <h2>Categorias</h2>
            <div class="categories">
                    <p class="cat">AAAAAAAAA</p>
                    <p class="cat">aaaaaaa</p>
                    <p class="cat">aAAAAAAAA Aa a</p>
            </div>
        </div>   

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);
@import url(../../assets/css/categorias.css);


.mobile {
    display: none;
    width:100%
}

@media screen and (max-width: 600px){

    .tag_container{
        display: none;
    }
    .mobile{
        display: block;
        
    }



}
</style>