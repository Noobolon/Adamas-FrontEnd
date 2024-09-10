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

        <nav class="contnt_container">
            <RouterLink to="/projetos" id="selected">Projetos</RouterLink>
            <RouterLink to="/eventos">Eventos</RouterLink>
            <RouterLink to="/pessoas">Pessoas</RouterLink>
        </nav>

        <!-- container de tags (depois continuo) -->
        

    </main>

    <aside class="tag_container">
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
    </aside>        
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>