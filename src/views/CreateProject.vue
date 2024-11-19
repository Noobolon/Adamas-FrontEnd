<script>
import { useAuthStore } from '@/stores/authentication';
import { createProject } from '@/assets/scripts/project_scripts';
import TagModal from '@/components/TagModal.vue';
import PT_BR    from '@vavt/cm-extension/dist/locale/pt-BR';
import { MdEditor, config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';


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

            excButtons: ['mermaid', 'katex', 'revoke', 'pageFullscreen', 'fullscreen', 'htmlPreview', 'catalog', 'github', 'save', 'prettier', 'previewOnly'],

            tags: []
        }
        
    },

    methods: {
        createProject,

        tagToArray(tagID){
            this.tags.push(tagID)
        },

        
    },

    created(){
        this.user_token = this.authStore.getToken
        config({
            editorConfig:{
                languageUserDefined: {'pt-BR': PT_BR}
            }
        })
    }
    
}

</script>

<template>

<main>

    <form @submit.prevent="createProject(this.user_token)">
        <input id="title" v-model="title" placeholder="Título do projeto" type="text" required>


        <div class="tags">
            <button id="add_tag_button" @click="modalOpen = true" v-if="tags.length <= 3" type="button"></button>

            <!-- Modal de tags -->
            <Teleport to="body">
                <TagModal :show="modalOpen" @close="modalOpen = false">
                </TagModal>
            </Teleport>

            
            <div v-for="tag in tags" class="cat">{{ tag }}</div>
        </div> 

        <input id="desc" v-model="description" placeholder="Descrição breve do projeto" type="text" required>

        <div class="content">
            <h1>Conteúdo do projeto:</h1>
            
            <MdEditor v-model="content" language="pt-BR" 
            :toolbarsExclude="this.excButtons" />

            <div id="buttons">
                <button type="reset">Limpar</button>
                <button type="submit">Criar</button>
            </div>  
        </div>
        
    </form>
</main>

</template>

<style scoped>
@import url(@/assets/css/categorias.css);

main{
    padding: 7%;
    display: flex;
    flex-direction: row;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin: 2% auto auto auto;
    width: 60%;
}

input{
    background-color: #00000000;
    border: none;
    border-bottom: 2px solid var(--ButtonColor);

    font-size: 2rem;

    padding: 1%;
    caret-color: var(--TextFieldColor);
    margin: 2% 0;
}

input:focus{
    outline: none;
}

input::placeholder{
    font-weight: normal;
    color: var(--TextFieldColor);
}


textarea{
    width: 100%;
    padding: 0;
    resize: vertical;
}

.content{
    background-color: var(--MenuColor);
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
    padding: 4%;
}
.content h1{
    margin: 0px;
    color: var(--TextHighlight);
}
.content > *{
    margin: 4% 0 0 0;
}

.tags{
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: center;
}

.tags > *{
    margin-right: 2%;
}


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

/* Botões de limpar e enviar */

#buttons{
    display: flex;
    justify-content: space-between;
}

#buttons button{
    background-color: var(--ButtonColor);
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;

    width: 35%;
    padding: 1% 0;
    
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
}

#buttons button:hover{
    cursor: pointer;
    background-color: var(--ButtonHoverColor);
}


/* Customização do título */

#title{
    background-image: url(/symbols/PencilIcon.svg);
    background-size: 35px; 
    background-position: left;
    background-repeat: no-repeat;
    text-indent: 30px;

    font-weight: bold;
}

#title:hover{
    cursor: pointer;
}

#title:focus{
    background-image: none;
    text-indent: 0px;
    cursor: text;
}

#title::placeholder{
    font-weight: normal;
}


/* Customização da descrição */

#desc{
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
}




</style>