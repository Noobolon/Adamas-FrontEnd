<script>
import api from '@/api';
import { getProjectFromID } from '@/assets/scripts/project_scripts';
import { useAuthStore } from '@/stores/authentication';
import { marked } from 'marked';


export default{
    name: "HomePage",

    data(){
        return{
            authStore: useAuthStore(),
            p_id: this.$route.params.id,
            project: null,
            formatted_content: null,
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
                <div class="project_tags"><p class="cat" v-for="tag in this.project.categories">{{ tag.name }}</p></div>

                <div class="project_items">
                    <ul>
                        <img src="/logos/AdamasWhite.png" alt="Gosteis">
                        <!-- Se tiver likes -->
                        <li v-if="project.likes">{{ formatador(project.likes.length) }}</li>
                        <li v-else>0</li>
                    </ul>
                    <ul>
                        <img src="/symbols/CommentIcon.png" alt="Comentários">
                        <!-- Se tiver comentários -->
                        <li v-if="project.comments">{{ project.comments.length }}</li>
                        <li v-else>0</li>
                    </ul>
                </div>  
                
            </div>
            
        </section>
        
        <!-- Incompleto -->
        <section class="comment_section">
            <div v-for="comment in this.project.comments">
                {{ comment }}
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    margin: auto;
    padding: 0% 7% 7% 7%;
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
    width: 50%;
}

.owners{
    background-color: #fff;
    margin-top: 7%;
    padding: 2%;
    border-radius: 0px 25px 25px 0px;
    min-width: 15%;
}
.owners h2{color: var(--TextHighlight2);}
.owners_style > *{
    font-size: 1.5rem;
}

/* Informações do projeto */

.project_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    color: var(--Text2);
    background-color: var(--ButtonColor);

    padding: 4%;
    width: 100%;
    min-height: 50%;       
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

.comment_section{
    background-color: #fff;
    padding: 2%;
    width: 90%;
}


</style>