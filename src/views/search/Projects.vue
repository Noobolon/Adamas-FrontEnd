<script>
import { RouterLink } from 'vue-router';
import { getProjects } from '@/assets/scripts/projects';
import ProjectComponent from '../../components/ProjectComponent.vue';

export default{
    name: "Projects",
    data() {
        return {
            search_content: this.search_content,
            // projects_list: this.projects_list
            projeto_exemplo: {"name": "adamas", "owner": "aluno", "desc": "descrição boa"}
        };
    },
    methods: {
        
    },
    components: { RouterLink, ProjectComponent},
    
    // mounted(){
    //     this.projects_list = getProjects()
    // }

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
                <!-- <ul>
                    <li v-for="projeto in projects_list">
                        <ProjectComponent :project="projeto"/>
                    </li>
                </ul> -->
        
                <ProjectComponent :project="projeto_exemplo" />
            </div>

        </div>

        <aside class="tag_container">
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
        </aside>   

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>