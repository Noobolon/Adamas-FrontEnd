<script>
import { getApprovedProjects, getEventFromID, getRoomsFromEventID } from '@/assets/scripts/event_scripts';
import { useAuthStore } from '@/stores/authentication';


export default{

    name: "ViewSubs",

    data(){
        return{
            authStore: useAuthStore(),
            token: undefined,

            e_id: this.$route.params.e_id,
            event: undefined,
            event_rooms: [],
            approved_array: [],
        }
    },

    methods:{
        
        isInstCreatorOfEvent(){
            let inst_id = this.authStore.getUser.id
            console.log(inst_id)
            return inst_id == this.event.institution_id 
        }

    },

    async created(){
        this.token = this.authStore.getToken

        getEventFromID(this.e_id)
        .then(event => this.event = event)

        getRoomsFromEventID(this.token, this.e_id)
        .then(rooms => this.event_rooms = rooms)

        getApprovedProjects(this.e_id)
        .then(projects => this.approved_array = projects)

        

    }

    
}

</script>


<template>

    <main v-if="this.event &&">
        
        <div id="event_info">
            <RouterLink :to="{ name: 'instituição', params: {id: this.authStore.getUser.id}}">Voltar</RouterLink>
            <h1>{{ this.event.name }}</h1>
            <p>{{ this.event.description }}</p>
            <p>{{ this.event.start_date }} até {{ this.event.end_date }}</p>
        </div>


        <div class="main_info">
            <div id="left-row">
            
                <section class="participant">
                    <h1>Projetos aprovados:</h1>
                    
                    <div class="project" v-if="this.approved_array && this.approved_array.length != 0" v-for="project in this.approved_array">
                        <RouterLink :to="{ name: 'projeto', params: {id: project.project_id}}">
                            <h3>
                                {{ project.title }}
                            </h3>
                            <ul>
                                <li v-for="owner in project.owners">{{ owner.name }}</li>
                            </ul>
                        </RouterLink>
                    </div>
                    <div v-else class="error">
                        Nenhum projeto encontrado.
                    </div>
                    
                </section>
                
                <section class="rooms">
                    <h1>Salas no evento:</h1>

                    <div class="room" v-if="this.event_rooms && this.event_rooms.length != 0" v-for="room in this.event_rooms">
                        <h3>{{ room.name }}</h3>
                        <p>Projetos: {{ room.projects.length }}/{{ room.quantity_projects }}</p>
                    </div>
                    
                </section>
            </div>
    

            <section class="subs">
                <h1>Pessoas inscritas:</h1>
                <div class="subscriber" v-if="this.event.subscribers" v-for="sub in this.event.subscribers">
                    <RouterLink :to="{ name: 'usuário', params: {id: sub.id}}">
                        <p>{{ sub.name }}</p>
                    </RouterLink>
                </div>
            
            </section>

        </div>

        

    </main>
</template>


<style scoped>

/* Divisórias */

.main_info{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    width: 100%;
    height: 100vh;
    background-color: var(--SubBackgroundColor);
}
.main_info > *{
    margin: 4%;
    width: 40%;
}

section{
    background-color: var(--BackgroundColor);
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;
    padding: 4%;
    overflow: auto;
}

section > h1{
    margin-bottom: 4%;
}

section > div{
    padding: 2%;
    width: fit-content;
}

section > div:hover{
    border-radius: 25px;
    background-color: var(--SubBackgroundColor);
}

a{color: var(--Text);}
a:visited{color: var(--Text)}


/* Duas divisórias da esquerda */

#left-row{
    display: flex;
    flex-direction: column;
    justify-content:space-between
}
#left-row section{
    height: 35%;
}


/* Informações do evento */

#event_info{
    padding: 4%;
    color: var(--Text2);
    background-color: var(--CardColor);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#event_info a{color: var(--Text2);}
#event_info a:hover{font-weight: bold;}


.error:hover{
    background-color: #00000000;
}


</style>