<script>
import { RouterLink } from 'vue-router';
import ProjectComponent from '../../components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';


export default{
    name: "Projects",
    data() {
        return {
            search_content: this.search_content,
            // projects_list:  computed(() => { return project_store.projects; }),
        };
    },
    methods: {
        
    },
    components: { RouterLink, ProjectComponent},
    
    mounted(){
        
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

            <!-- <div class="cntnt_container">
                <ul v-for="project in this.projects_list">
                    <ProjectComponent :project="project" />
                </ul>
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