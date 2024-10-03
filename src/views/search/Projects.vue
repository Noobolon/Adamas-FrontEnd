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
        setTimeout(() => {
            this.projects_list = this.projectStore.projects
            console.log("Local list: ", this.projects_list)
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
                    <ProjectComponent :project="project" />
                </div>
            </div>

            <!-- <div v-for="project in projects_list">
               {{ project.title }}
            </div> -->
        </div>

        <div class="tag_container">
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
        </div>   

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>