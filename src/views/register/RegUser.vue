<script>
export default {
    name: "RegUser"
}
</script>

<template>
    <main>
        <h1>Cadastro de Usuário</h1>
        <div>
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante" >
            <form action="">
                <input type="text" placeholder="Nome" name="name" id="name">
                <input type="email" placeholder="E-mail" name="email" id="email">
                <input type="password" placeholder="Senha" name="senha" id="senha">
                <input type="button" value="Cadastrar">
                <p>Já possui uma conta?<br><RouterLink to="/login/usuario">Entrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/reg.css);

</style>