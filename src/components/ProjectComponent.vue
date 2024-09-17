<script>
export default{
    name: 'ProjectComponent',
    props: {
        project: {
            type: Object
        }
    }
}


</script>

<template>
    <div>
        <h1>{{ project.name }}</h1>
        <p>Criado por: {{ project.owner }}</p>
        <p>Descrição: {{ project.desc }}</p>
    </div>
    
    
</template>

<style>




</style>