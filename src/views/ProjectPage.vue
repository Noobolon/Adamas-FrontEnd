<script>
import { getProjectFromID, commentOnProject, likeProject, unlikeProject } from '@/assets/scripts/project_scripts';
import router from '@/router';
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

            if (!this.authStore.isUserLogged){
                router.push({ path: '/tipo-de-conta' })
                return
            }

            if (this.authStore.getAccType == "institution"){
                alert("Instituições não podem comentar!")
                return
            }

            commentOnProject(
                this.token,
                this.project.project_id,
                this.comment
            )

            location.reload()
        },

        hasUserLiked(){
            if (this.project.likes){
                if (this.user){
                    let like_array = this.project.likes.map(like => like.user_id)
                    var isTrue = like_array.includes(this.user.id)
                    return isTrue
                }
            }
        },

        async likeToggle(){

            if (!this.authStore.isUserLogged){
                router.push({ path: '/tipo-de-conta' })
                return
            }

            if (this.authStore.getAccType == "institution"){
                alert("Instituições não podem dar like!")
                return
            }

            const uid = this.user.id
            const p_id = this.project.project_id

            if (this.project.likes){

                let like_array = this.project.likes.map(like => like.user_id); // coloca todos os likes em uma array
                if (like_array.includes(uid)){ // se o ID to usuário estiver na array, remover like
                    
                    await unlikeProject(
                        this.token,
                        p_id
                    )

                } else {
                    await likeProject(
                        this.token,
                        p_id
                    )
                }
            } else { // caso não tenha nenhum like
                await likeProject(
                    this.token,
                    p_id
                )
                
            }
            
            location.reload()
        }

    },

    created(){
        getProjectFromID(this.p_id)
        .then(project => {
            this.project = project; // Atribui o projeto carregado
        })
        .catch(error => {
            console.error(error);
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
                    <ul @click="likeToggle">
                        <img v-if="hasUserLiked()" src="/logos/AdamasWhite.png" alt="Likes">
                        <img v-else src="/logos/HollowDiamond.svg" alt="Likes">
                       
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
        
        <section class="comment_section">

            <form id="add_comment" @submit.prevent="comentar()">
                <input required v-model="comment" type="text" name="Texto" placeholder="Escreva um comentário...">
                <button type="submit">Enviar</button>
            </form>


            <div id="comment_container">
                <article class="comment" v-for="comment in this.project.comments">
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
                    
                </article>
            </div>
            
        </section>

    </div>

    <div class="owners">
        <h2>Criadores:</h2>
        <ul class="owners_style">
            <li v-for="owner in this.project.owners" :key="owner.id">
                <RouterLink :to="`/usuario/${owner.id}`">{{ owner.name }}</RouterLink>
            </li>
        </ul>
    </div>
    
</main>

</template>


<style scoped>
@import url(@/assets/css/categorias.css);

main{
    display: flex;
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

a{color: var(--Text);}
a:visited{color: var(--Text);}

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
    min-height: 35vh;
}

.wrapper {
    max-width: 96%;
}

.formatted *{
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}
.formatted > p {
    text-align: justify;
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
    padding: 0;
    list-style: none;
    text-align: center;
}
.project_items ul > *:hover{
    cursor: pointer;
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
}
#add_comment input[type="text"]{
    width: 75%;
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
    padding: 1% 2%;
}
#add_comment button{
    color: var(--Text2);
    font-weight: bold;
    font-size: 1.25rem;
    padding: 1% 4%;

    background-color: var(--ButtonColor);
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
}
#add_comment button:hover{
    cursor: pointer;
    background-color: var(--ButtonHoverColor);
}

.comment{
    margin-top: 6%;
}

.comment_section{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fff;
    width: 100%;
    padding: 4%;
}

.comment_section article{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#comment_container{
    display: flex;
    flex-direction: column-reverse;
}

#user{
    border-right: 4px solid var(--ButtonColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    text-align: center;
}

#user > * {
    margin: 20px;
}
#user img{
    width: 30%;
}
#user p{
    margin-top: 4%;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
}

#comment_content{

    width: 80%;
    min-height: 100%;
    height: fit-content;
    word-break:break-all;

    display: flex;
    align-items: center;
}
#comment_content p{
    width: 100%;
    text-align: justify;
    margin-left: 4%;
}

@media screen and (max-width: 800px){
    .content{
        width: 80%;
    }
    .owners{
        margin: 10px;
    }

    .project_items{
        width: 20%;
    }
}

@media screen and (max-width: 600px){

    main{
        padding: 0;
        width: 100%;
        flex-direction: column;
    }

    .content > * {
        padding: 0;

    }
    .content{
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
        width: 100%;
    }
    .owners{
        margin-top: 20px;
        width: 80%;
        padding: 0;
        margin: 0;
    }

    .project_info > h1 {
        font-size: 10px;
    }

    .items_info{
        margin: 1%;
    }
    .owners > * {
        margin: 10px;
    }

    .wrapper{
        margin: 10px;
    }

    .project_tags{
        width: 20%;
        margin: 10px;
    }

    #add_comment{
        margin: 10px;
        display: flex;
        justify-content: space-evenly;
    }

    #comment_container{

        margin: 10px
    }

    .comment { 
        display: flex; 
        align-items: center;
    }
    .comment > p {
        padding: 10px;
    }

}

</style>