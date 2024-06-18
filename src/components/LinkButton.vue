<script>
    export default {
        name: "LinkButton",
        props: ['text', 'link', 'icon']
    }

</script>

<template>
    
   <RouterLink :to="link">
        <img v-if="icon != null" :src="icon" alt="Ícone">
        {{ text }}
   </RouterLink> 

</template>

<style scoped>

a{
    font-size: 2em;
    background-color: var(--ButtonColor);
    padding: 1% 3%;
    border-radius: 15px;

    color: var(--Text2);
    text-decoration: none;
}

a:hover{ background-color: #1f4a60;}

a:visited{color: var(--Text2);}

</style>