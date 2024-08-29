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

        <div class="srch_container">
            <form>
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
                <button type="button">Enviar</button>
            </form>
        </div>

        <div class="contnt_container">
            <button>Projetos</button>
            <button>Eventos</button>
            <button>Pessoas</button>
        </div>

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>