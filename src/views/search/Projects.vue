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
@import url(../../assets/css/pesquisas.css);


</style>