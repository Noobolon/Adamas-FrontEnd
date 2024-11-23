<script>
import { useAuthStore } from '@/stores/authentication';
import { createProject } from '@/assets/scripts/project_scripts';
import TagModal from '@/components/TagModal.vue';
import PT_BR    from '@vavt/cm-extension/dist/locale/pt-BR';
import { MdEditor, config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import router from '@/router';


export default{
    name: "CreateProject",

    components:{
        MdEditor,
        TagModal
    },

    data(){
        return{
            authStore: useAuthStore(),
            
            user_token: undefined,
            title: this.title,
            description: this.description,
            content: this.content,

            modalOpen: false,

            excButtons: ['mermaid', 'katex', 'pageFullscreen', 'fullscreen', 'htmlPreview', 'catalog', 'github', 'save', 'prettier', 'previewOnly', 'task'],

            selected_tags: []
        }
        
    },

    methods: {
        createProject,

        async criarProjeto(){
            /* Função para pegar apenas os IDs da array das categorias selecionadas;
            a API aceita apenas os IDs das categorias. */ 
            let tagID_array = this.selected_tags.map(tag => tag.cat_id); 
            createProject(
                this.user_token,

                this.title,
                tagID_array,
                this.description,
                this.content
            )
            .then(project => {
                router.push(`/projeto/${project.project_id}`)
                console.log("Projeto criado com sucesso!")
            })
        },

        clearAll(){
            this.title = "",
            this.selected_tags = [],
            this.description = "",
            this.content = ""
        },

        removeTag(tag){
            var index = this.selected_tags.indexOf(tag)
            this.selected_tags.splice(index, 1)
        }
    },

    created(){
        this.user_token = this.authStore.getToken
        config({
            editorConfig:{
                languageUserDefined: {'pt-BR': PT_BR}
            }
        })
    },
    
}

</script>

<template>

<main>

    <form @submit.prevent="criarProjeto()">
        <input id="title" v-model="title" placeholder="Título do projeto" type="text" required>


        <div class="tags">
            <!-- Modal de tags -->
            <Teleport to="body">
                <TagModal :show="modalOpen" @close="modalOpen = false" :addedTags="this.selected_tags">
                </TagModal>
            </Teleport>

            <div v-for="tag in selected_tags" class="cat" @click="removeTag(tag)" >{{ tag.cat_name }}</div>
            <button id="add_tag_button" @click="modalOpen = true" v-if="selected_tags.length < 3" type="button"></button>
        </div> 

        <input id="desc" v-model="description" placeholder="Descrição breve do projeto" type="text" required>

        <div class="container">
            <h1>Conteúdo do projeto:</h1>

            <!-- Editor de markdown md-editor-v3 -->
            <MdEditor v-show="!modalOpen" v-model="content" language="pt-BR" 
            :toolbarsExclude="this.excButtons"/>

            <div class="buttons">
                <button type="reset" @click="clearAll()">Limpar</button>
                <button type="submit">Criar</button>
            </div>  
        </div>
        
    </form>
</main>

</template>

<style scoped>
@import url(@/assets/css/categorias.css);
@import url(@/assets/css/criarItem.css);

.tags{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}
.tags > *{margin-right: 2%;}

.cat{cursor: pointer;}


/* Botões */

#add_tag_button{
    background-image: url(/symbols/AddIcon.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    min-height: 25px;
    min-width: 25px;
    border-radius: 100%;
    border: none;
}

#add_tag_button:hover{
    cursor: pointer;
}



#title{
    background-image: url(/symbols/PencilIcon.svg);
    text-indent: 4%;
}


/* Customização da descrição */

#desc{
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
}

@media screen and (max-width: 600px){

    form{
        width: 100%;
        
    }

    #title{
        font-size: 25px;
        background-size: 30px;
    }

    #desc{
        font-size: 25px;
        padding: 2%;
    }
}


</style>