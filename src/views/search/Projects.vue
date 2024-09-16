<script>
import { RouterLink } from 'vue-router';
import ProjectComponent from '../../components/ProjectComponent.vue'
import api from '@/api';

export default{
    name: "Projects",
    data() {
        return {
            search_content: this.search_content,
            projects_list: null 
        };
    },
    methods: {
        
    },
    components: { RouterLink, ProjectComponent },
    
    mounted(){
        this.aposkdposakd()
    }

}

</script>

<template>
    <aside class="tag_container">
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
    </aside>   

    <main>
        
        <div class="srch_container">
            <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>

        <nav class="contnt_container">
            <RouterLink to="/projetos" id="selected">Projetos</RouterLink>
            <RouterLink to="/eventos">Eventos</RouterLink>
            <RouterLink to="/usuarios">Usuários</RouterLink>
        </nav>
        
        <ul>
            <li v-for="projeto in projects_list">
                <ProjectComponent :projects="projeto"/>
            </li>
        </ul>
          
    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>