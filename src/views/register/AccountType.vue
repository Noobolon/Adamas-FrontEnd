<script>
export default {
    name: "CreateAccount"
}
</script>

<script setup>
import LinkButton from '@/components/LinkButton.vue';
</script>

<template>
    <main>

        <div>
            <LinkButton text="Aluno" link="/cadastrar/user" />
            <LinkButton text="Instituição" link="/cadastrar/instituicao" />
        </div>
        
    </main>
</template>

<style scoped>

main{
    align-items: center;
}

div{
    display: flex;
    flex-direction: column;
    
}

</style>