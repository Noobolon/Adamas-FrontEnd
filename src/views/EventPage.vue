<script>
import { getEventFromID } from '@/assets/scripts/event_scripts';
import { useAuthStore } from '@/stores/authentication';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export default{
    name: 'EventPage',

    data(){
        return{
            authStore: useAuthStore(),
            
            e_id: this.$route.params.id,
            event: undefined,

            data_inicial: undefined,
            data_final: undefined,
        }
    },

    async created(){
        await getEventFromID(this.e_id)
        .then(event => {
            this.event = event
        }).catch(error => console.log(error))

        this.data_inicial = format(this.event.start_date, "d LLL 'às' HH:mm", {locale: ptBR})

        if ( (format(this.event.end_date, "LLL") == format(this.event.start_date, "LLL"))){ // se for no mesmo mês

            if (format(this.event.end_date, "d") == format(this.event.start_date, "d") ) { // se for no mesmo dia
                this.data_final = format(this.event.end_date, "'às' HH:mm", {locale: ptBR})
            } else {
                this.data_final = format(this.event.end_date, "'dia' d 'às' HH:mm", {locale: ptBR})
            }

        } else {
            this.data_final = format(this.event.end_date, "d LLL 'às' HH:mm", {locale: ptBR})
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
                        <p><span>Data: </span> {{ this.data_inicial }} <span>até</span> {{ this.data_final }} </p>
                    </li>
                </ul>
            </section>

            <section class="event_content">
                <p>
                    {{ this.event.description }}
                </p>
            </section>

            <section class="buttons">

                <button type="button">
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
}

.container{
    font-size: 1.25rem;
    width: 50%;
    padding: 2%;
    color: var(--Text2);
    background-color: var(--CardColor);

    border: 4px solid var(--ButtonColor);
    border-radius: 25px;

    word-break: break-all;
}


/* Botões */

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.buttons button{
    color: var(--Text2);
    font-weight: bold;
    font-size: 1.5rem;
    
    padding: 1%;
    width: 35%;
    height: 100%;

    background-color: var(--ButtonColor);
    border: none;
    border-radius: 25px;
}
.buttons button:hover{
    background-color: var(--ButtonHoverColor);
    cursor: pointer;
}


</style>