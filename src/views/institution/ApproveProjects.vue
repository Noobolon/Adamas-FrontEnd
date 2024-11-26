<script>
import { getEventFromID } from '@/assets/scripts/event_scripts';
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
            if (this.authStore.token){
                let logged_user = this.authStore.getUser
                let accType = this.authStore.getAccType

                return logged_user && this.event.owner.id == logged_user.id && accType == 'institution'
            } else return false
        }
    },

    created(){
        this.token = this.authStore.getToken

        getEventFromID(this.e_id)
        .then(event => this.event = event)

    }

}
</script>

<template>

    <main v-if="isLoggedInstSameAsProfile() && this.event">
        <div>

            {{ event }}

        </div>

    </main>

</template>

<style scoped>

main{
    padding: 7%;
}

main > *{
    margin: auto;
}


</style>