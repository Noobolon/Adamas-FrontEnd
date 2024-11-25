<script>

export default{
    name: "EditEventModal",

    props: {
        show: Boolean,

        currEvent: Object
    },

    data(){
        return{
            newEventName: this.newEventName,
            newEventDesc: this.newEventDesc
        }
    },

    methods:{
        
    }


}


</script>

<template>

    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="container">
                <form>
                    <div class="room_info">

                        <h2>Editar evento</h2>
                        <label for="room">Nome:</label>
                        <input type="text" v-model="newEventName" :placeholder="currEventName">

                        <label for="num">Qtd. de projeto nessa sala:</label>
                        <textarea v-model="newEventDesc">
                            {{ currEventDesc }}
                        </textarea>

                    </div>
                    
                    <div id="buttons">
                        <button @click.prevent="$emit('close')">
                            Cancelar
                        </button> 

                        <button @click.prevent="; $emit('close')">  
                            Editar
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </Transition>


</template>

<style scoped>
@import url(@/assets/css/modal.css);

input{
    font-size: 1.25rem;  
    width: 50%;
    background-color: #00000000;
    border: none;
    border-bottom: 4px solid var(--ButtonColor);
}
input:focus{outline: none;}

label{
    font-weight: bold;
}

.container{
    font-size: 1.5rem;
    color: var(--Text);
    background-color: var(--MenuColor);
}
.room_info{
    display: flex;
    flex-direction: column;
    border: none;
    padding-inline: none;
}
.room_info input{
    margin-bottom: 4%;
}


#buttons{
    display: flex;
    justify-content: space-between;
}


</style>