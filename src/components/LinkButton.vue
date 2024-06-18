<script>
    export default {
        name: "LinkButton",
        props: {
            text: String, 
            link: String,
            icon: String,

            width: String,
            height: String
        }
        
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
    align-content: center;
    font-size: 2em;
    background-color: var(--ButtonColor);
    padding: 1% 3%;
    border-radius: 15px;

    width: v-bind(width);
    height: v-bind(height);

    color: var(--Text2);
    text-decoration: none;
}

a:hover{ background-color: #1f4a60;}

a:visited{color: var(--Text2);}

</style>