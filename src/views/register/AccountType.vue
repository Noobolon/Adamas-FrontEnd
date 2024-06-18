<script>
import LinkButton from '@/components/LinkButton.vue';
import { RouterLink } from 'vue-router';

export default {
    name: "CreateAccount",
    components: {
        LinkButton
    }
}
</script>

<template>
    <main>

           
        
    </main>
</template>

<style scoped>

main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


div{
    width: 100%;
    font-size: 2em;
    background-color: var(--ButtonColor);
    padding: 10% 20%;
    margin: 10% 0;
    border-radius: 15px;

    color: var(--Text2);
    text-decoration: none;
    text-align: center
}




</style>