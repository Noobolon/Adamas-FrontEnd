<script>
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { formatEndDate, removeEvent } from '@/assets/scripts/event_scripts';

export default{
    name: "RemoveEventModal",

    props: {
        show: Boolean,
        event: Object,
        token: String
    },

    data(){
        return{
            formattedStart: format(this.event.start_date, "d LLL 'às' HH:mm", {locale: ptBR}),
            formattedEnd: formatEndDate(this.event.start_date, this.event.end_date),
            year: format(this.event.end_date, "yyyy"),

            email: this.email,
            password: this.password
        }
    },

    methods:{

         async removerEvento(){

            await removeEvent(
                this.token,
                this.event.id,
                this.email,
                this.password
            )
            
            location.reload()

        }
    }


}

</script>

<template>
    
    <Transition name="modal">
        <div v-if="show" class="modal-mask">

            <div class="container">
                <header>
                    <h2>Confirmar remoção de evento:</h2>
                    <input type="button" value="x" @click="$emit('close')">
                </header>

                <div class="info">
                    <p><b>"{{ event.name }}"</b></p>
                    <p>{{ event.description }}</p>
                    <p>{{ this.year }}</p>
                    <p>{{ this.formattedStart }} <b>até</b> {{ this.formattedEnd }} </p>
                </div>
                
                <form @submit.prevent="removerEvento()">
                    <input v-model="email" type="email" placeholder="Confirmar e-mail" autocomplete="off" required>
                    <input v-model="password" type="password" placeholder="Confirmar senha" autocomplete="off" required>
                    
                    <div class="buttons">
                        <button id="remove" type="submit">Remover evento</button>
                    </div>
                </form>
                

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
    align-items: center;
}

header > h2{
    margin: 0px;
}

header > input{
    background-color: #00000000;
    font-size: 2rem;
    color: var(--Text2);
    border: none;
}
header > input:hover{
    font-weight: bold;
    cursor: pointer;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form > input{
    margin-bottom: 2%;
    padding: 2%;
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
    font-weight: bold;
}

.buttons button{
    font-weight: bold;
    width: 100%;
}


#remove{
    color: var(--TagColor);
}

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





</style>