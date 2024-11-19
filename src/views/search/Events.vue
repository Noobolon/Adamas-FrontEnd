<script>
import { RouterLink } from 'vue-router';
import EventComponent from '../../components/EventComponent.vue';
import { useEventStore } from '@/stores/event';

export default{
    name: "Events",
    components: { RouterLink, EventComponent},

    data() {
        return {
            eventStore: useEventStore(),
            search_content: this.search_content,
            events_list: this.events_list
        };
    },

    created(){
        this.eventStore.fetchEvents()
    },

}

</script>

<template>
    <main>
        <div class="content">
            <div class="srch_container">
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
            </div>
            <nav class="ctgry_container">
                <RouterLink to="/projetos">Projetos</RouterLink>
                <RouterLink to="/eventos" id="selected">Eventos</RouterLink>
                <RouterLink to="/usuarios">Usuários</RouterLink>
            </nav>

            <div class="cntnt_container">
                <div v-for="event in this.eventStore.getEvents">
                    <EventComponent :event="event" :key="event.id" />
                </div>
            </div>
            
        </div>

        <div class="img_container">
            
        </div>

        
    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);

.img_container{
    background-image: url("../../assets/images/PencilDiamond.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;

    padding: 2%;
    width: 30%;
    height: 75vh;
    float: right;
    margin: 0 5% 0 0;
}

@media screen and (max-width: 600px){
    .img_container{
        display: none;
    }
}
</style>