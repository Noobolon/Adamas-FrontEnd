<script>
import RoomModal from '@/components/RoomModal.vue';
import { useAuthStore } from '@/stores/authentication';



export default{
    name: "CreateProject",

    components:{
        RoomModal
    },
    
    data(){
        return{
            authStore: useAuthStore(),

            user_token: this.user_token,
            name: this.event,
            address: this.address,
            description: this.description,

            start_date: this.start_date,
            end_date: this.end_date,

            rooms: [],
            modalOpen: false
        }
    },

    methods: {
        getCurrentDate(){
            let curDate = new Date()
            return curDate.toISOString()
        }   

    },

    created(){
        this.user_token = this.authStore.getToken
        console.log(this.curDate)
    }

}

</script>


<template>

    <main>

        <form class="container" @submit.prevent="criarEvento()">
            <h1>Criação de projeto</h1>

            <fieldset class="event_content">
            
                <input id="title" v-model="name" placeholder="Nome do evento" type="text" required>
                <input id="address" v-model="address" placeholder="Local do evento" type="text" required>

                <div id="datetimes">

                    <input
                    type="datetime-local"
                    name="Data Inicial" 
                    id="startDate"
                    >

                    <input
                    type="datetime-local"
                    name="Data Final"
                    id="endDate"
                    >

                </div>

                <textarea id="desc" v-model="description" placeholder="Descrição do evento" type="text" required rows="12">
                </textarea>

            </fieldset>

            <div class="buttons">
                <button @click="modalOpen = true" type="button">
                    Adicionar sala
                </button>
            </div>  

            <Teleport to="body">
                <RoomModal
                :show="modalOpen"
                @close="modalOpen = false"
                :roomArray="this.rooms"/>
            </Teleport>

            <fieldset class="rooms">

            </fieldset>

            <div class="buttons">
                <button type="reset">Limpar</button>
                <button type="submit">Criar</button>
            </div>  

        </form>

    </main>

</template>


<style scoped>
@import url(@/assets/css/criarItem.css);


#datetimes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
#datetimes input{
    width: 45%;
}


.event_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.event_content *{
    margin-bottom: 4%;
}


</style>