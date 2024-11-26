<script>
import EditEventModal from './modals/EditEventModal.vue';


export default{
    name: "EditButton",

    props:{
        button: String,
        event: Object,
    },

    components:{
        EditEventModal
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
        <EditEventModal :show="this.showMenu == true" @close="this.showMenu = false" 
        :event="this.event"/>
    </Teleport>

</template>


<style scoped>

button{
    color: var(--Text);
    background-color: #00000000;
    border: none;

    background-image: url("/symbols/PencilIcon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;

    width: 5%;
}
button:hover{cursor: pointer;}

</style>