<script>
import { registerUser } from '@/assets/scripts/register.js'

export default {
    name: "RegUser",

    data() {
        return{
            name: this.name,
            nickname: this.nickname,
            email: this.email,
            password: this.password,
        }   
    },

    methods: {
        registerUser
    }

}
</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Cadastro de Usuário</h1>

        <div class="forms">
            <div class="info">
                <img src="../../assets/images/diamond.png" alt="Diamante" >
            </div>
            
            <form @submit.prevent="registerUser">
                <input v-model="name" placeholder="Nome" id="name" type="text" required>
                <input v-model="nickname" placeholder="Apelido (opcional)" id="nickname" type="text">
                <input v-model="email" placeholder="E-mail" id="email" type="email">
                <input v-model="password" placeholder="Senha" id="password" type="password">

                <input type="button" @click="registerUser()" value="Cadastrar">
                <p>Já possui uma conta?<br><RouterLink to="/login/usuario">Entrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>