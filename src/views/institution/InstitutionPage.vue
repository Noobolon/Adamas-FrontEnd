<script>
import { getEventsFromInstID, getInstFromID } from '@/assets/scripts/institution_scripts';
import { useAuthStore } from '@/stores/authentication';
import { useEventStore } from '@/stores/event';
import { RouterLink } from 'vue-router';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import MultiModalButton from '@/components/MultiModalButton.vue';


export default{
    name: "InstitutionPage",

    components:{
        RouterLink,
        MultiModalButton
    },

    data(){
        return{
            eventStore: useEventStore(),
            authStore: useAuthStore(),
            inst: undefined,
            inst_events: undefined,
            i_id: this.$route.params.id,
            
            ptBR: ptBR,
        }
    },

    methods: {
        format,

        isLoggedInstSameAsProfile(){
            if (this.authStore.token){
                let logged_user = this.authStore.getUser
                let accType = this.authStore.getAccType

                return logged_user && this.i_id == logged_user.id && accType == 'institution'
            } else return false
        }
        
    },

    async created(){

        getInstFromID(this.i_id)
        .then(inst => {
            this.inst = inst
        })
        .catch(error => console.log(error))

        getEventsFromInstID(this.i_id)
        .then(events => {
            this.inst_events = events
        })
        .catch(error => console.log(error))

    }

}

</script>

<template>

    <!-- Perfil da instituição: -->
    <div v-if="this.inst && isLoggedInstSameAsProfile()" class="container">
        
        <div class="inst_container">
            <img src="/symbols/user/BlueInst.svg" alt="">
            <h1>{{ this.inst.name }}</h1>
            <ul>
                <li>Olá, {{ this.inst.name }}!</li>
                <li v-if="this.inst_events"><b>Eventos: </b>{{ this.inst_events.length }}</li>
            </ul>
            <ul class="personal_buttons">
                <li @click="this.authStore.logout()">Sair</li>
            </ul>
        </div>

        
        <!-- Eventos -->
        <main v-if="this.inst && isLoggedInstSameAsProfile()">
            <div class="inst_content">
                <RouterLink to="/criar-evento">
                    Criar evento
                </RouterLink>
                <div>
                    <p>Excluir eventos</p>
                </div>
            </div>

            <div class="event_container">
                <div class="owner_event" v-for="event in this.inst_events">
                    <div>
                        <h3>
                            <RouterLink :to="{ name: 'evento', params: {id: event.id}}">
                                {{ event.name }}
                            </RouterLink>
                        </h3>

                        <MultiModalButton :event="event"/>

                    </div>
                    
                    <ul>
                        <li><span>{{ event.description }}</span></li>
                        <li>Endereço: <span>{{ event.address }}</span></li>
                        <li>Data: <span>{{ format(event.start_date, "d LLL 'às' HH:mm", {locale: ptBR}) }} até {{ format(event.end_date,  "d LLL 'às' HH:mm", {locale: ptBR}) }}</span></li>
                    </ul>
                </div>

            </div>

            
        </main>
    </div>

    <div v-else id="fail">
        <h1>Instituição não encontrada!</h1>
    </div>

    


</template>

<style scoped>
@import url(@/assets/css/event_instview.css);

.container{
    background-color: var(--SubBackgroundColor);
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    font-size: 1.5rem;
}

main{
    background-color: var(--BackgroundColor);
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inst_content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 8% 4% 4% 4%;
    background-color: var(--BackgroundColor);
}
.inst_content > *{
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--TextHighlight);
    text-align: center;

    width: 30vw;
    height: 8vh;
    

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4% 0 4%;

    background-color: #00000000;
    border: 4px solid var(--ButtonColor);
    border-radius: 25px
}
.inst_content a{
    background-color: var(--ButtonColor);
    color: var(--Text2);
}
.inst_content a:hover{
    background-color: var(--ButtonHoverColor);
    cursor: pointer;
}

.event_container{
    min-height: 100vh;
    width: 100%;
    
}


/* Perfil de instituição */

.inst_container{
    width: 25%;
    height: 100vh;
    padding: 4%;
    background-color: var(--SubBackgroundColor);
    color: var(--TextHighlight2);

    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
}
.userInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inst_container img{
    width: 50%;
    margin-bottom: 4%;
}

.inst_container h1{
    font-size: 3rem;
    color: var(--TextHighlight);
}

.inst_container ul{
    width: 100%;
    margin: 10% 0 2% 0;
    padding: 4%;
    border-top: 4px solid var(--ButtonColor);
    list-style: none;
    padding: 0px;
}

.inst_container ul > li{
    text-align: center;
    padding: 2%;
}

.inst_container ul > li:first-child{
    margin-top: 4%;
}
.personal_buttons li:hover{
    font-weight: bold;
    cursor: pointer;
}

@media screen and (max-width: 600px){
    .container{
        flex-direction: column;

    }
    .userInfo{
        flex-direction: row;
    }
    .inst_container img{
        width: 30%;
        margin-bottom: 0;
        margin-left: 20px;
        margin-right: 20px;
    }
    .inst_container {
        padding: 0;
        width: 100%;
        flex-direction: row;
    }
    .inst_container > ul {
        margin: 0;
         border-top: 0;
    }
    .userInfo > h1 {
        font-size: 2rem;
    }
    .userInfo > img {
        width: 40%;
    }
    .inst_content a{
        width: 45%;
    }
    .inst_content div{
        width: 45%;
    }

    .inst_container ul > li:first-child{
    margin-top: 0;
}
}

</style>