<script>
    export default {
        name: "LinkButton",
        props: {
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
            <slot></slot>
   </RouterLink> 

</template>

<style scoped>

a{
    display: flex;
    flex-direction: row;

    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;

    background-color: var(--ButtonColor);
    padding: 2% 0;
    border-radius: 15px;

    width: v-bind(width);
    height: v-bind(height);
    text-decoration: none;
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
}

a:hover{ background-color: var(--ButtonHoverColor);}

a:visited{color: var(--Text2);}

img{
    margin-right: 2%;
}

</style>