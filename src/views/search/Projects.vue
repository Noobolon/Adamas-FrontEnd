<script>
import { RouterLink } from 'vue-router';
import ProjectComponent from '../../components/ProjectComponent.vue';
import { useProjectStore } from '@/stores/project';
import { all_tags } from '@/assets/scripts/search_scripts';


export default{
    name: "Projects",
    components: { RouterLink, ProjectComponent},


    data() {
        return {
            projectStore: useProjectStore(),

            search_content: this.search_content,
            search_results: this.search_results,
 
            all_tags: all_tags,
            selected_tags: []
        };
    },
    
    methods: {
        
        clickTag(tag){
            if (!this.selected_tags.includes(tag)){ // caso não tenha a tag, adicione-a
                this.selected_tags.push(tag)
            } else { // caso tenha, remova-a
                var index = this.selected_tags.indexOf(tag)
                this.selected_tags.splice(index, 1)
            }
            console.log(this.selected_tags)
        },

        updateSearch(search){
            const searchContent = search ? search.toLowerCase() : ""; // vê se o conteúdo pesquisado está vazio

            this.search_results = this.projectStore.projects.filter(
                project => project.title.toLowerCase().includes(searchContent)
            )
            
            let selectedID_array = this.selected_tags.map(tag => tag.cat_id) // IDs das tags selecionadas

            if (selectedID_array && selectedID_array.length != 0){ // se existe e tem alguma coisa
                this.search_results = this.search_results.filter(
                    project => {
                        if (Array.isArray(project.categories)) { // verifica se existe e se há categorias
                            let projectID_array = project.categories.map(category => category.id); // IDs das tags dos projetos
                            return projectID_array.some(id => selectedID_array.includes(id))
                        }
                        return false // tira objetos sem categorias
                    }
                )
            }
        }

    },

    watch: {

        search_content(newSearch){
            this.updateSearch(newSearch)
        },

        // Atualiza os resultados sempre que as tags selecionadas mudarem
        selected_tags: {
            handler(newTags) {
                
                this.updateSearch(this.search_content);
            },
            deep: true
        }
        
    },

    async created(){
        await this.projectStore.fetchProjects()
        this.search_results = this.projectStore.getProjects
        
    },
}

</script>

<template>
    <main>
        <div class="content">
            <form onkeyup="" class="srch_container" >
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
            </form>
            
            <div class="tag_container mobile">
                <h2>Categorias</h2>
                <div class="categories">
                    <p 
                    :class="!this.selected_tags.includes(tag) ? 'defaultCat' : 'selectedCat'"
                    class="cat"
                    v-for="tag in all_tags"
                    @click="clickTag(tag)"
                    >
                        {{ tag.cat_name }}
                    </p>
                </div>

            </div>
            
            <nav class="ctgry_container">
                <RouterLink to="/projetos" id="selected">Projetos</RouterLink>
                <RouterLink to="/eventos">Eventos</RouterLink>
                <RouterLink to="/usuarios">Usuários</RouterLink>
            </nav>
   
            <div class="cntnt_container">
                <div v-for="project in this.search_results">
                    <ProjectComponent :project="project" :key="project.project_id" />
                </div>
            </div>
        </div>

        <div class="tag_container">
            <h2>Categorias</h2>
            <div class="categories">
                <p 
                :class="!this.selected_tags.includes(tag) ? 'defaultCat' : 'selectedCat'"
                class="cat"
                v-for="tag in all_tags"
                @click="clickTag(tag)"
                >
                    {{ tag.cat_name }}
                </p>
            </div>
        </div>   

    </main>
    
</template>

<style scoped>
@import url(@/assets/css/pesquisas.css);
@import url(@/assets/css/categorias.css);


.tag_container{padding: 2%;}

.tag_container .cat{
    user-select: none;
}
.cat:hover{cursor: pointer;}
.selectedCat{
    color: var(--Text);
    background-color: var(--TagSelectedColor);
}

/* Responsividade */

.mobile {
    display: none;
    width:100%
}


@media screen and (max-width: 600px){

    .tag_container{
        display: none;
        padding: 0px;
    }
    .mobile{
        display: block;
        
    }



}
</style>