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
            <ul class="owners_style" v-for="owner in project.owners" :key="owner.id">
                <p>{{ owner.name }}</p>
            </ul>

            <p>{{ project.description }}</p>

            <ul class="cat_style" v-for="category in project.categories">
                <p class="cat">{{ category.name }}</p>
            </ul>
        </div>

            <!-- <div>
                <img src="" alt="">
            </div> -->

    </div>
    
    
</template>

<style scoped>

.project_style{
    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    padding: 2%;
    width: 75%;

    background-color: var(--CardColor);
    color: var(--Text2);
}

h1{margin-bottom: 2%;}
a{color: var(--Text2);}

/* Nomes dos integrantes */
.owners_style {padding: 0%;}
.owners_style p{
    color: var(--SubText);
}

/* Categorias */
.cat_style{
    display: inline-block;
    padding: 0;
}


.cat{
    font-size: 1.05rem;
    font-weight:600;
    color: var(--Text2);
    text-align: center;

    background-color: var(--TagColor);
    padding: 7.5px 10px;
    margin-top: 2%;
    min-width: 7.5%;
    width:fit-content;

    border-radius: 100px;
}

</style>