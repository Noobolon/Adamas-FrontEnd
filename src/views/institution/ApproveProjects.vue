<script>
import { getEventFromID, getPendingProjects, getRoomsFromEventID } from '@/assets/scripts/event_scripts';
import ApproveProjectComponent from '@/components/ApproveProjectComponent.vue';
import { useAuthStore } from '@/stores/authentication';


export default{
    name: "ApproveProjects",

    components:{
        ApproveProjectComponent
    },

    data(){
        return{
            authStore: useAuthStore(),
            token: undefined,

            rooms: [],
            pending_projects: [],
            event: undefined,
            e_id: this.$route.params.e_id
        }
    },

    methods:{
        isLoggedInstSameAsProfile(){
            if (this.token && this.event){
                let logged_user = this.authStore.getUser
                let accType = this.authStore.getAccType

                return logged_user && this.event.institution_id == logged_user.id && accType == 'institution'
            } else return false
        }
    },

    created(){
        this.token = this.authStore.getToken

        getEventFromID(this.e_id)
        .then(event => this.event = event)

        getPendingProjects(this.token, this.e_id)
        .then(projects => this.pending_projects = projects)

        getRoomsFromEventID(this.token, this.e_id)
        .then(rooms => this.rooms = rooms)

    }

}
</script>

<template>

    <main v-if="isLoggedInstSameAsProfile() && this.event">

        <section class="event_info">

            <h1>
                {{ this.event.name }}
                
            </h1>

            <p>{{ this.event.description }}</p>
            <p>{{ this.event.start_date }} até {{ this.event.end_date }}</p>
            

        </section>

        <section>
            <h1>Projetos pendentes:</h1>

            <div v-if="this.pending_projects"
            v-for="project in this.pending_projects" class="project">

                <ApproveProjectComponent
                :token="this.token"
                :project="project"
                :event_id="this.e_id"
                :rooms="this.rooms"
                />


            </div>

            <div v-else>
                Nenhum projeto pendente encontrado.
            </div>

            
        </section>

    </main>

    <main v-else>
        <h1>
            Você não possui permissões para acessar isso.
        </h1>
    </main>

</template>

<style scoped>

main{
    background-color: var(--SubBackgroundColor);
    padding: 7%;
}

main > *{
    margin: auto;
}

h1{margin-bottom: 4%;}

section{
    color: var(--Text2);
    background-color: var(--CardColor);
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;

    width: 50%;
    padding: 4%;
    margin-bottom: 4%;
    line-break: anywhere;
}

.event_info h1{
    margin-bottom: 2%;
}

a{
    color: var(--Text);
}






</style>