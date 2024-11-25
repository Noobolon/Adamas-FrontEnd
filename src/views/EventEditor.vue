<script>
import { getEventFromID } from '@/assets/scripts/event_scripts';
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
            
            e_id: this.$route.params.e_id,
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

        async editarEvento(){
            
            
        }

    },

    created(){
        this.user_token = this.authStore.getToken
        console.log(this.curDate)

        getEventFromID(this.e_id).
        then(event => {
            this.name= event.name
            this.address = event.address
            this.description = event.description
            this.start_date = event.start_date
            this.end_date = event.end_date
        })

    }

}

</script>


<template>

    <main class="container">

        <form  @submit.prevent="criarEvento()">

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
                    <button type="submit">Criar</button>
                </div>  
            </fieldset>

            <Teleport to="body">
                <RoomModal
                :show="modalOpen"
                @close="modalOpen = false"
                :roomArray="this.rooms"/>
            </Teleport>

            <fieldset class="rooms">
                <div class="buttons">
                    <button @click="modalOpen = true" type="button" id="add_room">
                        Adicionar sala
                    </button>
                </div>
                <div class="added_room" v-if="this.rooms.length != 0" v-for="room in this.rooms">
                    <h1>{{ room.room_name }}</h1>
                    <p><b>Quantidade de projetos:</b> {{ room.room_capacity }}</p>
                </div>
            </fieldset>



        </form>

    </main>

</template>


<style scoped>

/* Inputs  */
textarea{
    width: 79%;
    padding: 1%;
    color: var(--Text);
    font-size: 1.5rem;
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;
}
h1{
    margin-top: 40px;
    width: 80%;
}
input{
    width: 80%;
    background-color: #00000000;
    border: none;
    border-bottom: 2px solid var(--ButtonColor);
    font-size: 2rem;
    caret-color: var(--TextFieldColor);
}

input:focus{
    outline: none;
}

input::placeholder{
    font-weight: normal;
    color: var(--TextFieldColor);
}

fieldset{
    border: 2px solid var(--ButtonColor);
    justify-content: center;
    align-items: center;
    display: flex; 
    flex-direction: column;
    background-color: var(--MenuColor);
    width: 60%;
    border-radius: 25px;
}
/*  */

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 2%;
}
#datetimes{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

#datetimes > div {
    width: 45%;
    display: flex;
    align-items: start;
    flex-direction: column;
}
#datetimes > div > input{
    width: 100%;

}
.buttons{
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.buttons button{
    background-color: var(--ButtonColor);
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;

    width: 35%;
    padding: 1% 0;
    
    font-size: 2rem;
    color: var(--Text2);
    text-align: center;
}

.event_content{
    display: flex;
    flex-direction: column;
}
.event_content *{
    margin-bottom: 4%;
}

.divisor{
    width: 80%;
    height: 4px;
    background-color: var(--ButtonColor);
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

@media screen and (max-width: 700px){
    form{
        padding: 0;
    }
    input{
 
        width: 80%;
    }
    fieldset{
        border: none;
        border-radius: 0;
        padding: 0;
        width: 100%;
    }
    #datetimes{
        flex-direction: column;
        justify-items: center;
        align-items: center;
        width: 80%;
    }

    #datetimes > div  {
        width: 100%;

    }
    #datetimes > div > input {
        width: 100%;

    }
    
}
</style>