<script>
import { RouterLink } from 'vue-router';


export default{
    name: "Projects",
    data() {
        return {
            search_content: this.search_content
        };
    },
    methods: {},
    components: { RouterLink }
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
            <RouterLink to="" id="selected">Projetos</RouterLink>
            <RouterLink to="">Eventos</RouterLink>
            <RouterLink to="">Pessoas</RouterLink>
        </div>

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>