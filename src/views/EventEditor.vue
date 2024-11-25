<script>
import { editEvent, getEventFromID, getRoomsFromEventID } from '@/assets/scripts/event_scripts';
import RoomModal from '@/components/modals/RoomModal.vue';
import router from '@/router';
import { useAuthStore } from '@/stores/authentication';
import { format } from 'date-fns';



export default{
    name: "CreateProject",

    components:{
        RoomModal
    },
    
    data(){
        return{
            authStore: useAuthStore(),

            user_token: this.user_token,
            
            e_id: this.$route.params.e_id,
            name: this.event,
            address: this.address,
            description: this.description,
            start_date: this.start_date,
            end_date: this.end_date,

            modalOpen: false,

            rooms: []
        }
    },

    methods: {
        getCurrentDate(){
            let curDate = new Date()
            curDate.setMinutes(curDate.getMinutes() - curDate.getTimezoneOffset());
            return curDate.toISOString().slice(0,16);
        },  

        dateFormatter(date){
            const formattedDate = format(date, 'yyyy-MM-dd HH:mm')
            return formattedDate
        },

        async editarEvento(){

            try {
                editEvent(
                    this.user_token,
                    this.e_id,

                    this.name,
                    this.address,
                    this.description,
                    this.start_date,
                    this.end_date
                )
                router.push(`/evento/${this.e_id}`)
                
            } catch (error) {
                console.log(error)
            }
        
        }
    },

    created(){
        this.user_token = this.authStore.getToken
        console.log(this.curDate)

        getEventFromID(this.e_id)
        .then(event => {
            this.name= event.name
            this.address = event.address
            this.description = event.description
            this.start_date = event.start_date
            this.end_date = event.end_date
        })

        getRoomsFromEventID(this.user_token, this.e_id)
        .then(rooms => {
            this.rooms = rooms
        })

    }

}

</script>


<template>

    <main class="container">

        <form  @submit.prevent="editarEvento()">

            <fieldset class="event_content">
                <h1>Editar eventos:</h1>

                <input id="title" v-model="name" placeholder="Nome do evento" type="text" required>
                <input id="address" v-model="address" placeholder="Local do evento" type="text" required>

                <div id="datetimes">
                    <div>
                        <label for="startDate">Data de início</label>
                        <input
                        type="datetime-local"
                        name="Data Inicial" 
                        id="startDate"
                        :min="getCurrentDate()"
                        v-model="start_date"
                        >
                    </div>
                    <div>
                        <label for="startDate">Data de encerramento</label>
                        <input
                        type="datetime-local"
                        name="Data Final"
                        id="endDate"
                        :min="getCurrentDate()"
                        v-model="end_date"
                        >
                    </div>
                </div>

                <textarea id="desc" v-model="description" placeholder="Descrição do evento" type="text" required rows="12">
                </textarea>

                <div class="divisor"></div>

                <div class="buttons">
                    <button type="reset">Limpar</button>
                    <button type="submit">Editar</button>
                </div>  
            </fieldset>

            <fieldset class="rooms">
                <h1>Salas: </h1>
                <div class="buttons">
                    <button @click="modalOpen = true" type="button" id="add_room">
                        Adicionar sala
                    </button>
                </div>

                <div class="added_room" v-if="this.rooms.length && this.rooms.length != 0" v-for="room in this.rooms">
                    <h1>{{ room.name }}</h1>
                    <p><b>Quantidade de projetos:</b> {{ room.quantity_projects }}</p>
                </div>
            </fieldset>

            <Teleport to="body">
                <RoomModal
                :show="modalOpen"
                @close="modalOpen = false"
                :roomArray="this.rooms"
                :e_id="this.e_id"
                :token="this.user_token"/>
            </Teleport>


        </form>

    </main>

</template>


<style scoped>
@import url(@/assets/css/event_creator.css);


/* Salas */

.rooms{
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
}

.rooms > *{
    padding: 0px;
    margin: 0 0 4% 4%;
}

#add_room{
    width: 25%;
    font-size: 1.5rem;
    border-radius: 25px;
    padding: 2%;
}

.added_room{
    color: var(--Text2);
    background-color: var(--CardColor);
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;
    width: 50%;
    padding: 2%;
    margin-bottom: 2%;
}
.added_room:last-child{
    margin-bottom: 4%;
}
.added_room h1{
    margin: 0px;
}

</style>