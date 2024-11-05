<script>

export default{
    name: 'ProjectComponent',
    props: {
        project: {
            type: Object
        }
    },

    data() {
        
    },
}


</script>

<template>
    <div class="project_style">

        <div class="project_container">
            <h1><RouterLink to="/">{{ project.title }}</RouterLink></h1>
            <p>{{ project.description }}</p>

            <div>
                <ul class="owners_style">
                    <p v-for="owner in project.owners" :key="owner.id">{{ owner.name }}</p>
                </ul>
            </div>

            <ul class="cat_style">
                <p class="cat" v-for="category in project.categories">{{ category.name }}</p>
            </ul>
        </div>

        <div class="project_items">
            <ul>
                <!-- tenho que esperar o backiendo fazer a parte dele pra atualizar isso aqui -->
                <img src="../assets/images/SimpleDiamond.png" alt="teste">
                <li>10k</li>
            </ul>
            <ul>
                <img src="../assets/images/SimpleDiamond.png" alt="teste">
                <li>10</li>
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

.project_container{margin: 2%;}


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

.project_items ul > li:first-child{
    margin-bottom: 2000%;
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