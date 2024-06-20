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
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>