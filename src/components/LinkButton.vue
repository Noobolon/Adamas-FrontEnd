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
        <div>
            <img v-if="icon != null" :src="icon" alt="Ícone">
            <p>{{ text }}</p>
        </div>
   </RouterLink> 

</template>

<style scoped>

div{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    background-color: var(--ButtonColor);
    padding: 7%;
    border-radius: 15px;

    width: 100%;
    height: 100%;
    
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
}

div:hover{ background-color: #1f4a60;}

a{
    width: v-bind(width);
    height: v-bind(height);
    text-decoration: none;
}

a:visited{color: var(--Text2);}

img{
    margin-right: 2%;
}

</style>