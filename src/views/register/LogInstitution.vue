<script>


export default {
    name: "RegUser"
}
</script>

<template>
    <main>

        <RouterLink id="back" to="/tipo-de-conta">&lt Voltar</RouterLink>
        <h1>Login de Instituição</h1>
        <div class="forms">
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante" >
            <form action="">
                <input type="email" placeholder="E-mail" id="email">
                <input type="password" placeholder="Senha" id="senha">
                <input type="button" value="Entrar">
                <p>Não possui uma conta?<br><RouterLink to="/cadastrar/instituicao">Cadastrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/css/registro.css);

</style>