<script>
    export default {
        name: "LinkButton",
        props: ['textBtn', 'link']

    }
</script>

<template>
   <a :href='link'>
        {{ textBtn }}
   </a> 
</template>

<style scoped>
a{
    background-color: var(--ButtonColor);
    padding: 1.5%;
    border-radius: 25px;

    color: var(--Text2);
    font-weight: bold;
    text-decoration: none;
}

a:visited{color: var(--Text2);}

</style>