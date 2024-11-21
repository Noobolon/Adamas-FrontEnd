<script>
import { getProjectFromID, commentOnProject } from '@/assets/scripts/project_scripts';
import { useAuthStore } from '@/stores/authentication';
import { marked } from 'marked';


export default{
    name: "HomePage",

    data(){
        return{
            authStore: useAuthStore(),
            token: null,
            user: null,

            p_id: this.$route.params.id,
            comment: this.comment,
            project: null,
        }
    },

    computed:{
        formattedContent(){
            return marked(this.project.content)
        }
    },

    methods:{
        formatador(num) {
            return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
        },

        comentar(){
            commentOnProject(
                this.token,
                this.project.project_id,
                this.comment
            )
        }
    },

    created(){
        getProjectFromID(this.p_id)
        .then(project => {
            this.project = project; // Atribui o projeto carregado
        })
        .catch(error => {
            console.error("Erro ao buscar projeto:", error);
        });
        
        this.user = this.authStore.getUser
        this.token = this.authStore.getToken

    }
}

</script>

<template>

<main v-if="project">

    <div class="content">

        <section class="project_info">
            <div class="wrapper">
                <header>
                    <h1>{{ this.project.title }}</h1>
                    <h2>{{ this.project.description }}</h2>
                </header>
                <div class="formatted" v-html="formattedContent">

                </div>
            </div>

            <div class="items_info">
                <div class="project_tags">
                    <p class="cat" v-for="tag in this.project.categories">
                        {{ tag.name }}
                    </p>
                </div>

                <div class="project_items">
                    <ul>
                        <img src="/logos/AdamasWhite.png" alt="Gosteis">
                        <li v-if="project.likes">{{ formatador(project.likes.length) }}</li>
                        <li v-else>0</li>
                    </ul>
                    <ul>
                        <img src="/symbols/CommentIcon.png" alt="Comentários">

                        <li v-if="project.comments">{{ project.comments.length }}</li>
                        <li v-else>0</li>
                    </ul>
                </div>  
                
            </div>
            
        </section>
        
        <!-- Incompleto -->
        <section class="comment_section">

            <form id="add_comment" @submit="comentar()">
                <input v-model="comment" type="text" name="Texto">
                <button type="submit">Enviar</button>
            </form>

            <div v-for="comment in this.project.comments">
                <div id="user">
                    <img src="/symbols/user/BlackCommon.svg" alt="Foto de usuário">
                    <p>
                        {{ comment.user_name }}
                    </p>
                </div>

                <div id="comment_content">
                    <p>
                        {{ comment.comment }}
                    </p>
                </div>
                
            </div>
        </section>

    </div>

    <div class="owners">
        <h2>Criadores:</h2>
        <ul class="owners_style">
            <li v-for="owner in this.project.owners">{{ owner.name }}</li>
        </ul>
    </div>
    
</main>

</template>


<style scoped>
@import url(@/assets/css/categorias.css);

main{
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    
    padding: 0% 7% 7% 7%;
}
main > *{
    margin: 0 4% 0 0;
}

ul{
    padding: 0px;
    list-style: none;
}
ul > *{font-weight: bold;}

h1{
    font-size: 3rem;
}

h2{
    font-size: 2rem;
}


.content{
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 50%;
}

.owners{
    background-color: #fff;
    margin-top: 7%;
    padding: 2%;
    border-radius: 0px 25px 25px 0px;
    min-width: 15%;
    height: fit-content;
}
.owners h2{color: var(--TextHighlight2);}
.owners_style > *{
    font-size: 1.5rem;
}

.cat{margin: 4% 2% 0 0}


/* Informações do projeto */

.project_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    color: var(--Text2);
    background-color: var(--ButtonColor); 
    padding: 4%;
    width: 100%;
    min-height: 25%;       
}
.wrapper {
  width: 100%;
}

.formatted *{
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

.items_info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}

.project_items{
    width: 15%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}
.project_items ul{
    padding: 0%;
    list-style: none;
    text-align: center;
}
.project_items img{width: 35px;}

.project_tags{
    min-width: 75%;
}


/* Comentários */

#add_comment{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 4% 0;
}
#add_comment input[type="text"]{
    width: 50%;
}

.comment_section{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fff;
    width: 100%;
    padding: 4%;
}

.comment_section div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    text-align: center;
}
#user img{
    width: 40%;
}
#user p{
    margin-top: 4%;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
}

#comment_content{
    width: 75%;
    display: flex;
    align-items: center;
}
#comment_content p{
    width: 100%;
    text-align: center;
}

</style>