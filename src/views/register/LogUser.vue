<script>
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores';

const route = useRoute();
const authStore = useAuthStore();


export default {
    name: "RegUser",

    data(){
        return{
            email: this.email,
            password: this.password
        }
    },

    methods: {
        loginUser
    }

}
</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Login de Usuário</h1>
        <div class="forms">
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante">

            <form @submit.prevent="loginUser">
                <input v-model="email" placeholder="E-mail" id="email" type="email" required>
                <input v-model="password" placeholder="Senha" id="senha" type="password" required>
                <input type="button" @click="loginUser" value="Entrar">

                <p>Não possui uma conta?<br><RouterLink to="/cadastrar/usuario">Cadastrar-se</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>