<script>
import { formatEndDate, getEventFromID, subscribeToEvent, unsubscribeFromEvent } from '@/assets/scripts/event_scripts';
import router from '@/router';
import { useAuthStore } from '@/stores/authentication';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export default{
    name: 'EventPage',

    data(){
        return{
            authStore: useAuthStore(),
            user: undefined,
            
            e_id: this.$route.params.id,
            event: undefined,
            subscribers_ID_array: [],

            data_inicial: undefined,
            data_final: undefined,
        }
    },

    methods:{

        hasUserSubscribed(){
            if (this.user){
                return this.subscribers_ID_array.includes(this.user.id)
            } else return false 
            
        },

        async inscrever(){

            if (!this.authStore.isUserLogged){
                router.push({ path: '/tipo-de-conta' })
                return
            }

            if (this.authStore.getAccType == "institution"){
                alert("Instituições não podem se inscrever em eventos!")
                return
            }

            try {
                subscribeToEvent(this.authStore.getToken, this.e_id)
                location.reload()
                
            } catch (error) {
                console.log(error)
            }
            
        },

        async desinscrever(){

            try {
                unsubscribeFromEvent(this.authStore.getToken, this.e_id)
                location.reload()

            } catch (error) {
                console.log(error)
            }
        }

    },



    async created(){
        await getEventFromID(this.e_id)
        .then(event => {
            this.event = event
        }).catch(error => console.log(error))

        this.user = this.authStore.getUser

        this.data_inicial = format(this.event.start_date, "d LLL 'às' HH:mm", {locale: ptBR})
        this.data_final = formatEndDate(this.event.start_date, this.event.end_date)

        if (this.event.subscribers){
            this.subscribers_ID_array = this.event.subscribers.map(subscriber => subscriber.id)
        }
    }

}

</script>

<template>

    <main v-if="this.event">
        
        <div class="container">
            <h1>{{ this.event.name }}</h1>

            <section class="event_info">
                <ul>
                    <li>
                        {{ this.event.institution_name }}
                    </li>

                    <li>
                        <p><span>Local:</span> {{ this.event.address }}</p>
                    </li>

                    <li>
                        <p><span>Data: </span> {{ this.data_inicial }} <span>até</span> {{ this.data_final }}</p>
                    </li>
                </ul>
            </section>

            <section class="event_content">
                <p>
                    {{ this.event.description }}
                </p>
            </section>

            <section class="buttons">

                <button v-if="hasUserSubscribed()" type="button" @click.prevent="desinscrever()">
                    Cancelar inscrição
                </button>
                <button v-else type="button" @click.prevent="inscrever()">
                    Inscrever-se
                </button>

                <button type="button">
                    Participar com projeto
                </button>

            </section>
        </div>
        

    </main>

</template>

<style scoped>

main{
    padding: 7%;
    align-items: center;
}

h1{
    margin-bottom: 2%;
}

.container{
    font-size: 1.25rem;
    width: 50%;
    height: fit-content;
    min-height: 35vh;
    padding: 2%;
    color: var(--Text2);
    background-color: var(--CardColor);

    border: 4px solid var(--ButtonColor);
    border-radius: 25px;

    display: flex;
    flex-direction: column;
}


/* Informações do evento */

.event_info ul{
    padding: 0;
    list-style: none;
    margin-bottom: 2%;
    color: var(--SubText);
    
}
.event_info span{
    font-weight: bold;
    color: var(--Text2);
}

.event_content{
    margin-bottom: 2%;
    line-break: anywhere;
}
.event_content p{
    height: fit-content;
}


/* Botões */

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 0 0 0;
    width: 100%;
    height: 100%;
}
.buttons button{
    color: var(--Text2);
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    
    padding: 1%;
    width: 45%;
    height: auto;

    background-color: var(--ButtonColor);
    border: none;
    border-radius: 25px;
}
.buttons button:hover{
    background-color: var(--ButtonHoverColor);
    cursor: pointer;
}


</style>