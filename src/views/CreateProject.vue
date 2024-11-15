<script>
import api from '@/api';
import { useAuthStore } from '@/stores/authentication';


export default{
    name: "CreateProject",

    data(){
        return{
            user_token: undefined,
            title: this.title,
            description: this.description,
            content: this.content,

            tags: []
        }
        
    },

    setup() {
        const authStore = useAuthStore()
        return { authStore }
    },

    methods: {
        async createProject(token){
            try {
                await api.post("/project",{
                    title: this.title,
                    description: this.description,
                    content: this.content
                })
                .then(function (response){
                    console.log(response)
                })
                
            } catch (error) {
                console.log(error)
            }

        }

    },

    created(){
        this.user_token = this.authStore.getToken
        console.log(this.user_token) // deletar depois
    }
    
}

</script>

<template>

<main>

    <form @submit.prevent="createProject(this.user_token)">
        <input id="title" placeholder="Título do projeto" type="text" required>

        <!-- aqui ficarão as tags -->
         <div class="tags">
            <button id="add_tag_button" v-if="tags.length <= 3"></button>
            <div>tags blablabla</div>
         </div>

        <input id="desc" v-model="description" placeholder="Descrição breve do projeto" type="text" required>

        <div class="content">
            
            <!-- placeholder pro editor de markdown que adiconarei depois (se possível) -->
            <textarea v-model="content" rows="10" cols="10"></textarea>

        </div>

        <div id="buttons">
            <button type="reset">Limpar</button>
            <button type="submit">Criar</button>
        </div>  
        
    </form>


</main>

</template>

<style>
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
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
}

#buttons button{
    background-color: var(--ButtonColor);
    border: none;
    border-radius: 25px;


    width: 30%;
    padding: 1% 0;
    
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
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