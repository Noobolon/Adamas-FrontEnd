<script>
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RouterLink } from 'vue-router';

export default{
    name: "EditEventModal",

    props: {
        show: Boolean,
        event: Object,
    },

    components:{
        RouterLink
    },

    data(){
        return{
            formattedStart: format(this.event.start_date, "d LLL 'às' HH:mm", {locale: ptBR}),
            formattedEnd: format(this.event.end_date, "d LLL 'às' HH:mm", {locale: ptBR}),
            year: format(this.event.end_date, "yyyy")
        }
    }

}

</script>

<template>
    
    <Transition name="modal">
        <div v-if="show" class="modal-mask">

            <div class="container">
                <header>
                    <h2>O que deseja fazer com esse evento?</h2>
                    <input type="button" value="X" @click="$emit('close')">
                </header>

                <div class="info">

                    <p><b>"{{ event.name }}"</b></p>
                    <p>{{ event.description }}</p>
                    <p>{{ this.year }}</p>
                    <p>{{ this.formattedStart }} <b>até</b> {{ this.formattedEnd }}</p>

                </div>
                
                <div class="links">
                    <RouterLink :to="{ name: 'editar evento', params: {e_id: event.id}}">
                        Editar
                    </RouterLink>

                    <RouterLink :to="{ name: 'visualizar participantes', params: {e_id: event.id}}">
                        Visualizar inscritos
                    </RouterLink>

                    <RouterLink :to="{ name: 'aprovar projetos', params: {e_id: event.id}}">
                        Aprovar participantes
                    </RouterLink>
                </div>
                

            </div>

        </div>
    </Transition>


</template>

<style scoped>
@import url(@/assets/css/modal.css);

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

header > input{
    background-color: #00000000;
    font-size: 2rem;
    color: var(--Text2);
    border: none;
}
header > input:hover{cursor: pointer;}


.info{
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-break: anywhere;   
}
.info > *{
    margin-bottom: 2%;
}


/* Links */

.links{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.links a{
    width: max-content;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    align-self: center;

    color: var(--Text2);
    background-color: var(--ButtonColor);
    
    border: 4px solid var(--ButtonColor);
    border-radius: 25px; 
    padding: 2%;
    margin-bottom: 2%

}
.links a:visited{color: var(--Text2)}
.links a:hover{background-color: var(--ButtonHoverColor);}

</style>