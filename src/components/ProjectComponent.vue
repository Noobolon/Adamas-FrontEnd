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
        <h1>{{ project.title }}</h1>
        <ul v-for="owner in project.owners" :key="owner.id">
            <p>{{ owner.name }}</p>
        </ul>
        <p>{{ project.description }}</p>
    </div>
    
    
</template>

<style scoped>

.project_style{
    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    padding: 2%;

    background-color: var(--CardColor);
    color: var(--Text2);
}

.project_style h1{
    margin-bottom: 2%;
}

.project_style ul{padding: 0%;}

.project_style ul > p{
    color: var(--SubText);
}


</style>