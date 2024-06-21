<script>
export default {
    name: "RegUser"
}
</script>

<template>
    <form action="">
        <input type="text" placeholder="Nome" name="name" id="name">
        <input type="email" placeholder="E-mail" name="email" id="email">
        <input type="password" placeholder="Senha" name="senha" id="senha">
        <input type="button" value="Cadastrar">
    </form>
</template>

<style scoped>

form{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5%;
}

input[type="button"]{
    background-color: var(--ButtonColor);
    padding: 2%;
    border: none;
    border-radius: 15px;

    width: 25%;
    
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
}

input[type="button"]:hover{
    cursor: pointer;
    background-color: #1f4a60;
}

input{
    background-color: #00000000;
    border: none;
    border-bottom: 4px solid var(--ButtonColor);

    font-size: 2rem;

    margin: 2% 0;
}

input:focus{
    outline: none;
}

input::placeholder{
    color: var(--TextFieldColor);
    font-weight: bold;
}

</style>