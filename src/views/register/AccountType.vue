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
        
        <LinkButton 
        text="Usuário" 
        link="/cadastrar/usuario" 
        icon="/symbols/UserIcon.png"
        
        width="25%"
        height="max-content"
        />

        <LinkButton 
        text="Instituição" 
        link="/cadastrar/instituicao" 
        icon="/symbols/InstIcon.png" 
        
        width="25%"
        height="max-content"
        />
        
    </main>
</template>

<style scoped>

main{
    align-items: center;
}

a{
    margin: 3% 0;
}

h1{
    margin-top: 5%;
    color: var(--TextHighlight);
    text-align: center;
}

</style>