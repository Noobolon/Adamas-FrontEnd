<script>
import api from '@/api';
import axios from 'axios';

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
        async regUser(){

            axios.post('localhost:3000/create', {
                name: this.name,
                nickname: this.nickname,
                email: this.email,
                password: this.password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {                    
                console.log(error);
            });

            //debug
            console.log(this.name, this.email, this.password)
        }
    }

}
</script>

<template>
    <main>
        <h1>Cadastro de Usuário</h1>

        <!-- debug -->
        <p>teste: <br>nome: {{ name }} email: {{ email }} senha: {{ password }}</p>

        <div>
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante" >
            <form @submit.prevent="cadastrar">
                <input v-model="name" placeholder="Nome" id="name">
                <input v-model="nickname" placeholder="Apelido (opcional)" id="nickname">
                <input v-model="email" placeholder="E-mail" id="email">
                <input v-model="password" placeholder="Senha" id="password">

                <input type="button" @click="regUser()" value="Cadastrar">
                <p>Já possui uma conta?<br><RouterLink to="/login/usuario">Entrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>