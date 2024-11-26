<script>
import { getEventFromID, getPendingProjects } from '@/assets/scripts/event_scripts';
import { useAuthStore } from '@/stores/authentication';


export default{
    name: "ApproveProjects",

    data(){
        return{
            authStore: useAuthStore(),
            token: undefined,

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
                console.log(logged_user)

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
            <div v-if="this.pending_projects && this.pending_projects.length == 0"
            v-for="project in this.pending_projects">
            {{ project }}
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
    padding: 7%;
}

main > *{
    margin: auto;
}

section{
    color: var(--Text2);
    background-color: var(--CardColor);
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;

    width: 50%;
    padding: 4%;
    line-break: anywhere;
}

.event_info h1{
    margin-bottom: 2%;
}


</style>