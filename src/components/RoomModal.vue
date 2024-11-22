<script>

export default{
    name: "RoomModal",

    props: {
        show: Boolean,
        roomArray: Array,
    },

    data(){
        return{
            room_name: this.room_name,
            room_capacity: this.room_capacity
        }
    },

    methods:{
        addRoom(){
            this.roomArray.push(
                
            )
        }
    }


}


</script>

<template>

    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="container">
                <form>
                    <div class="room_info">
                        <h2>Adicionar uma sala</h2>
                        <label for="room">Sala: </label>
                        <input type="text" v-model="room_name" placeholder="Nome da sala">
                        <label for="num">Qtd. de projeto nessa sala:</label>
                        <input type="number" min="0" v-model="room_capacity" placeholder="Exemplo: 10">
                    </div>
                    
                    <div id="buttons">
                        <button @click.prevent="$emit('close')">
                            Fechar
                        </button> 

                        <button @click.prevent="
                        console.log('ue'); $emit('close')
                        ">  
                            Adicionar
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