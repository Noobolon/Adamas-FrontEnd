<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
    name: "LoginAccount",
    components: {
        LinkButton
    }
}
</script>

<template>
    <main>

        <h1>
            Com qual tipo de conta deseja entrar?
        </h1>
        
        <LinkButton link="/login/usuario" icon="/symbols/user/WhiteCommon.png" width="25%" height="max-content">Usuário</LinkButton>
        <LinkButton link="/login/instituicao" icon="/symbols/user/WhiteInst.png" width="25%" height="max-content">Instituição</LinkButton>

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
    margin-bottom: 10%;
}
@media screen and (max-width: 600px){
    a{
        width: 60%;
        font-size: 1.8rem;
    }

}
</style>