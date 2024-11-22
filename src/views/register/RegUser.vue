<script>
import { useAuthStore } from '@/stores/authentication';

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

    setup(){
        const authStore = useAuthStore();
        return { authStore }
    },

    methods: {
        onSubmit() {
            this.authStore.regUser(this.name, this.nickname, this.email, this.password)
        }
    },

}
</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Cadastro de Usuário</h1>

        <div class="forms">
            <div class="info">
                <img src="@/assets/images/PencilDiamond.png" alt="Diamante" >
            </div>
            
            <form @submit.prevent="onSubmit">
                <input v-model="name" placeholder="Nome" id="name" type="text" required>
                <input v-model="nickname" placeholder="Apelido (opcional)" id="nickname" type="text">
                <input v-model="email" placeholder="E-mail" id="email" type="email" required>
                <input v-model="password" placeholder="Senha" id="password" type="password" required>

                <input type="submit" value="Cadastrar-se">

                <p>Já possui uma conta?<br><RouterLink to="/login/usuario">Entrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>