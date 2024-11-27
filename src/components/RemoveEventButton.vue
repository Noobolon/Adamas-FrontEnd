<script>
import RemoveEventModal from './modals/RemoveEventModal.vue';


export default{
    name: "RemoveEventButton",

    props:{
        token: String,
        event: Object,
    },

    components:{
        RemoveEventModal
    },

    data(){
        return{
            showMenu: false
        }
    }
}

</script>

<template>

    <button type="button" @click="showMenu = true"></button>

    <Teleport to="body">
        <RemoveEventModal :show="this.showMenu == true" @close="this.showMenu = false" 
        :event="this.event"
        :token="this.token"
        />
    </Teleport>

</template>


<style scoped>

button{
    color: var(--Text);
    background-color: #00000000;
    border: none;

    background-image: url("/symbols/TrashbinIcon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;

    width: 5%;
}
button:hover{cursor: pointer;}

</style>