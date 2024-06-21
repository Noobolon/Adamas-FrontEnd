<script>
export default {
    name: "RegUser"
}
</script>

<template>
    <div>
        <img src="../../assets/images/PencilDiamond.png" alt="">
        <form action="">
            <input type="text" placeholder="Nome" name="name" id="name">
            <input type="email" placeholder="E-mail" name="email" id="email">
            <input type="password" placeholder="Senha" name="senha" id="senha">
            <input type="button" value="Cadastrar">
        </form>
    </div>
    
</template>

<style scoped>

div{
    display: flex;
    padding: 5%;
    flex-direction: row;
    justify-content: space-evenly;
}

img{
    width: 30%;
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