<script>
import { createEvent } from '@/assets/scripts/event_scripts';
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
            
            await createEvent(
                this.user_token,
                
                this.name,
                this.address,
                this.description,
                this.dateFormatter(this.start_date),
                this.dateFormatter(this.end_date)
                
            ).then(newEvent => {
                router.push(`/evento/${newEvent.id}`)
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

    <main class="container">

        <form  @submit.prevent="criarEvento()">

            <fieldset class="event_content">
                <h1>Criação de eventos</h1>

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

        </form>

    </main>

</template>


<style scoped>
@import url(@/assets/css/event_creator.css);


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