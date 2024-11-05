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

        <div>
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

    </div>
    
    
</template>

<style scoped>
@import url(../assets/css/categorias.css);

.project_style{
    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    padding: 2%;
    width: 75%;

    background-color: var(--CardColor);
    color: var(--Text2);
}


a{color: var(--Text2);}


/* Nomes dos integrantes */
.owners_style {
    padding: 0%;
    margin: 2% 0 0 0;
}
.owners_style p{
    color: var(--SubText);
}




</style>