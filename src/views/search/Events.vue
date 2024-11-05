<script>
import { RouterLink } from 'vue-router';
import EventComponent from '../../components/EventComponent.vue';
import { useEventStore } from '@/stores/event';

export default{
    name: "Events",
    components: { RouterLink, EventComponent},

    data() {
        return {
            search_content: this.search_content,
            events_list: this.events_list
        };
    },
    
    setup() {
        const eventStore = useEventStore()
        return { eventStore }
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
            <img class="image" src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQsu7yYuRPXNK9eHHSFD2tUYO4stQDb1Ez8vjqGERfs9xqYLLnY_y6lQkPFZa-44cqn" alt="">
        </div>

        
    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);

.img_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image{
    width: 25%;
}

</style>