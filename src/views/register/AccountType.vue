<script>
import { RouterLink } from 'vue-router';
export default {
    name: "CreateAccount"
}
</script>

<template>
    <main>

        <ul>
            <RouterLink to="/cadastrar/usuario"><li>
                <img src="/logos/AdamasWhite.png" alt="">
                Usuário
            </li></RouterLink>
                
            <RouterLink to="/cadastrar/instituicao"><li>
                <img src="/logos/AdamasWhite.png" alt="">   
                Instituição
            </li></RouterLink>
        </ul>
        
    </main>
</template>

<style scoped>

main{
    align-items: center;
}

ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

li{
    width: 100%;
    font-size: 2em;
    background-color: var(--ButtonColor);
    padding: 5% 10%;
    border-radius: 15px;

    color: var(--Text2);
    text-decoration: none;
    text-align: center
}


</style>