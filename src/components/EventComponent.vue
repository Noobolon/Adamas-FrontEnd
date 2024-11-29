<script>
import { formatEndDate } from '@/assets/scripts/event_scripts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default{
    name: 'EventComponent',
    props: {
        event: {
            type: Object
        }
    },

    data() {
        return{
            data_inicial: format(this.event.start_date, "d LLL 'às' HH:mm", {locale: ptBR}),
            data_final: this.data_final
        };
    },

    mounted(){

        this.data_final = formatEndDate(this.event.start_date, this.event.end_date)
    }
}


</script>

<template>
    <div class="event_style">
        
        <div class="event_container">
            <h1><RouterLink :to="`/evento/${event.id}`">{{ event.name }}</RouterLink></h1>
            <p>{{ event.description }}</p>

            <div class="cntnt_style">
                <p>{{ event.institution_name }}</p>
                <p><span>Local: </span>{{ event.address }}</p>
                <p><span>Data: </span>{{ this.data_inicial }} <span>até</span> {{ this.data_final }}</p>
            </div>
        
        </div>
    </div>

    
</template>

<style scoped>

a{color: var(--Text2);}

.event_style{
    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    width: 100%;

    background-color: var(--CardColor);
    color: var(--Text2);
}

.event_container{
    line-break: anywhere;
    margin: 2%;
}


/* Nomes dos integrantes */
.cntnt_style {
    list-style: none;
    padding: 0%;
    margin: 2% 0 0 0;
    color: var(--SubText);
}

.cntnt_style span{
    color: var(--Text2);
    font-weight: bold;
}

</style>