<script>

export default{
name: "Projects",

data(){
    return{
        search_content: this.search_content
    }
},

methods: {

}

}




</script>

<template>

    <main>

        <form>
            <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
            <button type="button">
                <img src="../../assets/images/diamond.png" alt="Send" id="send-button">
            </button>
        </form>

    </main>
    
</template>

<style scoped>

main{
    padding: 7%;
}

form{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
}

input[type=text]{
    height: 7.5vh;
    width: 35vw;
    font-size: 1.5em;

    background-color: #96DAF7;
    color: var(--Text);
}

input[type=text]::placeholder{
    color: var(--TextFieldColor);
}

button{
    height: 7.5vh;
    width: 7.5vw;

    border: none;
    background-color: var(--ButtonColor);
    cursor: pointer;
}

button:hover{
    background-color: var(--ButtonHoverColor);
}

#send-button{
    width: 100%;
}

</style>