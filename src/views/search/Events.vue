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
            event_list: this.event_list
        };
    },
    
    setup() {
        const eventStore = useEventStore()
        return { eventStore }
    },

    created(){
        this.eventStore.fetchEvents()
    },

    mounted(){
        // Por algum motivo precisa esperar um pouco antes de atualizar as informações
        setTimeout(() => {
            this.events_list = this.eventStore.getEvents
        }, 1000)
    }
}

</script>

<template>
    <main>
        <div class="content">
            <div class="srch_container">
                <input type="text" placeholder="Pesquisar projetos..." v-model="search_content">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <nav class="ctgry_container">
                <RouterLink to="/projetos">Projetos</RouterLink>
                <RouterLink to="/eventos" id="selected">Eventos</RouterLink>
                <RouterLink to="/usuarios">Usuários</RouterLink>
            </nav>

            <div class="cntnt_container">
                <div v-for="event in this.event_list">
                    <EventComponent :project="event" :key="event.event_id" />
                </div>
            </div>
            
        </div>

        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

    </main>
    
</template>

<style scoped>
@import url(../../assets/css/pesquisas.css);


</style>