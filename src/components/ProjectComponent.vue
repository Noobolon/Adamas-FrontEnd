<script>


export default{
    name: 'ProjectComponent',
    props: {
        project: {
            type: Object
        }
    },

    data() {
        return{
            likes_formatados: this.likes_formatados
        }
    },

    methods: {
        // NOSSO código
        formatador(num) {
            return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
        }
    },
    
}


</script>

<template>
    <div class="project_style">

        <div class="project_container">
            <h1><RouterLink :to="`/projeto/${project.project_id}`">{{ project.title }}</RouterLink></h1>
            <p>{{ project.description }}</p>

            <div>
                <ul class="owners_style">
                    <p v-for="owner in project.owners" :key="owner.id">{{ owner.name }}</p>
                </ul>
            </div>

            <ul v-if="project.categories" class="cat_style">
                <p class="cat" v-for="category in project.categories">{{ category.name }}</p>
            </ul>
        </div>

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
    
    
</template>

<style scoped>
@import url(../assets/css/categorias.css);

a{color: var(--Text2);}

.project_style{
    display: flex;
    flex-direction: row ;
    justify-content: space-between;

    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    width: 100%;
    background-color: var(--CardColor);
    color: var(--Text2);
}

.project_container{
    width: 100%;
    margin: 2%;
}


/* Likes e comentários */

.project_items{
    width: 15%;
    padding: 2%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project_items ul{
    
    padding: 0%;
    list-style: none;
    text-align: center;
}

.project_items img{
    width: 35px;
}


/* Nomes dos integrantes */
.owners_style {
    padding: 0%;
    margin: 2% 0 0 0;
}

.owners_style p{color: var(--SubText);}


</style>