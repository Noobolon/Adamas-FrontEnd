<script>
import { getInstFromID } from '@/assets/scripts/institution_scripts';
import { useAuthStore } from '@/stores/authentication';
import { useEventStore } from '@/stores/event';


export default{
    name: "InstitutionPage",

    data(){
        return{
            eventStore: useEventStore(),
            authStore: useAuthStore(),
            inst: undefined,

            i_id: this.$route.params.id,
        }
    },


    async created(){

        getInstFromID(this.i_id)
        .then(inst => {
            this.inst = inst
        })
        .catch(error => console.log(error))




    }

}

</script>

<template>

    <div v-if="this.inst" class="container">
        <div>
            instituição
        </div>

        <main>
            eventos e tal
            
        </main>
    </div>
    


</template>

<style scoped>

.container{
    display: flex;
    flex-direction: row;
}
    

</style>