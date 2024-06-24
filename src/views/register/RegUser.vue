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
            </form>
        </div>
    </main>
</template>

<style scoped>

h1{
    font-size: 3rem;
    text-align: center;
    color: var(--TextHighlight);
}

div{
    display: flex;
    padding: 5%;
    flex-direction: row;
    justify-content: space-around;
}

img{
    width: 500px;
}

form{

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
}

input[type="button"]{
    background-color: var(--ButtonColor);
    border: none;
    border-radius: 15px;


    width: max-content;
    padding: 5% 10%;
    
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


    caret-color: var(--TextFieldColor);
    font-size: 2rem;
    margin: 5% 0;
}


input:focus{
    outline: none;
}

input::placeholder{
    color: var(--TextFieldColor);
    font-weight: bold;
}

</style>