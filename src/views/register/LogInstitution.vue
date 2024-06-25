<script>


export default {
    name: "RegUser"
}
</script>

<template>
    <main>
        <h1>Login de Instituição</h1>
        <div>
            <img src="../../assets/images/PencilDiamond.png" alt="Diamante" >
            <form action="">
                <input type="email" placeholder="E-mail" name="email" id="email">
                <input type="password" placeholder="Senha" name="senha" id="senha">
                <input type="button" value="Entrar">
                <p>Não possui uma conta?<br><RouterLink to="/cadastrar/instituicao">Cadastrar</RouterLink></p>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url(../../assets/reg.css);

</style>