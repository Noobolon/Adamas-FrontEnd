<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
    name: "RegisterAccount",
    components: {
        LinkButton
    }
}
</script>

<template>
    <main>

        <h1>
            Qual tipo de conta deseja criar?
        </h1>
        
        <LinkButton link="/cadastrar/usuario" icon="/symbols/UserIcon.png" width="25%" height="max-content">Usuário</LinkButton>
        <LinkButton link="/cadastrar/instituicao" icon="/symbols/InstIcon.png" width="25%" height="max-content">Instituição</LinkButton>

      

        
    </main>
</template>

<style scoped>

main{
    align-items: center;
}

a{
    margin: 3% 0;
    width: 25%;
    height: max-content;
}

h1{
    margin-top: 5%;
    color: var(--TextHighlight);
    text-align: center;
}
@media screen and (max-width: 600px){
    a{
        width: 50%;
        font-size: 1.5rem;
    }

}
</style>