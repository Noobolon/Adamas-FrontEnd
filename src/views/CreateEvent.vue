<script>
import { createEvent } from '@/assets/scripts/event_scripts';
import RoomModal from '@/components/modals/RoomModal.vue';
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
            curDate.setMinutes(curDate.getMinutes() - curDate.getTimezoneOffset());
            return curDate.toISOString().slice(0,16);
        },  

        dateFormatter(date){
            const formattedDate = format(date, 'yyyy-MM-dd HH:mm')
            return formattedDate
        },

        async criarEvento(){
            
            createEvent(
                this.user_token,
                
                this.name,
                this.address,
                this.description,
                this.dateFormatter(this.start_date),
                this.dateFormatter(this.end_date)
                
            ).then(newEvent => {
                console.log(newEvent)
            })
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
                    :min="getCurrentDate()"
                    v-model="start_date"
                    >

                    <input
                    type="datetime-local"
                    name="Data Final"
                    id="endDate"
                    :min="getCurrentDate()"
                    v-model="end_date"
                    >
                </div>

                <textarea id="desc" v-model="description" placeholder="Descrição do evento" type="text" required rows="12">
                </textarea>

            </fieldset>

            <Teleport to="body">
                <RoomModal
                :show="modalOpen"
                @close="modalOpen = false"
                :roomArray="this.rooms"/>
            </Teleport>

            <!-- <fieldset v-show="editing" class="rooms">
                <div class="buttons">
                    <button @click="modalOpen = true" type="button" id="add_room">
                        Adicionar sala
                    </button>
                </div>
                <div class="added_room" v-if="this.rooms.length != 0" v-for="room in this.rooms">
                    <h1>{{ room.room_name }}</h1>
                    <p><b>Quantidade de projetos:</b> {{ room.room_capacity }}</p>
                </div>
            </fieldset> -->

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


/* Salas */

#add_room{
    width: 25%;
    font-size: 1.25rem;
    border-radius: 10px;
    margin-left: 4%;
}

.added_room{
    background-color: var(--SubBackgroundColor);
    border: 4px solid var(--ButtonColor);
    padding: 2%;
}


</style>