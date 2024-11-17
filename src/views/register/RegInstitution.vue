<script>
import { useAuthStore } from '@/stores/authentication';



export default {
    name: "RegUser",

    data() {
        return{
            name: this.name,
            cnpj: this.cnpj,
            email: this.email,
            password: this.password,
        }   
    },

    setup(){
        const authStore = useAuthStore();
        return { authStore }
    },

    methods: {
        onSubmit() {
            this.authStore.regInstitution(this.name, this.cnpj, this.email, this.password)
        }
    }
}

</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Cadastro de Instituição</h1>
        <div class="forms">
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante" >

            <form @submit.prevent="onSubmit">
                <input v-model="name" placeholder="Nome" id="name" type="text" required>
                <input v-model="email" placeholder="E-mail" id="email" type="email" required>
                <input v-model="cnpj" placeholder="CNPJ" id="cnpj" type="text" required>
                <input v-model="password" placeholder="Senha" id="password" type="password" required>

                <input type="submit" value="Cadastrar">

                <p>Já possui uma conta?<br><RouterLink to="/login/instituicao">Entrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>