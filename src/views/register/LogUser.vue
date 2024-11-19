<script>    
import { useAuthStore } from '@/stores/authentication';

export default {
    name: "LogUser",

    data(){
        return{
            email: this.email,
            password: this.password
        }
    },

    setup(){
        const authStore = useAuthStore();
        return { authStore }
    },

    methods: {
        onSubmit() {
            console.log(this.email, this.password)
            this.authStore.loginUser(this.email, this.password)
        }
    },
}

</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Login de Usuário</h1>
        <div class="forms">
            <img src="@/assets/images/PencilDiamond.png" alt="Diamante">

            <form @submit.prevent="onSubmit">
                <input v-model="email" placeholder="E-mail" id="email" type="email" required>
                <input v-model="password" placeholder="Senha" id="senha" type="password" required>
                <input type="submit" @submit="onSubmit" value="Entrar">

                <p>Não possui uma conta?<br><RouterLink to="/cadastrar/usuario">Cadastrar-se</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>  
@import url(@/assets/css/registro.css);

</style>