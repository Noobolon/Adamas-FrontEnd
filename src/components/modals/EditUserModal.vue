<script>
import { editUserProfile } from '@/assets/scripts/user_scripts';


export default{
    name: "RoomModal",

    props: {
        userID: String,
        userToken: String,

        currentNickname: String,
        currentDescription: String,
        show: Boolean
    },

    data(){
        return{
            newNickname: this.newNickname,
            newDescription: this.newDescription
        }
    },

    methods:{
        
        editarPerfil(){
            let u_id = parseInt(this.userID)

            editUserProfile(
                this.userToken,
                u_id,
                this.newNickname,
                this.newDescription
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
                    <div class="user_info">
                        <h2>Editar usuário</h2>

                        <label>Apelido:</label>
                        <input type="text" v-model="newNickname" :placeholder="currentNickname">

                        <label>Descrição:</label>
                        <input type="text" v-model="newDescription" :placeholder="currentDescription">

                    </div>
                    
                    <div id="buttons">
                        <button @click="$emit('close')">
                            Cancelar
                        </button> 

                        <button @click="
                        editarPerfil(); $emit('close')
                        ">  
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

h2{
    color: var(--TextHighlight);
}

input{
    font-size: 1.25rem;  
    width: 100%;
    background-color: #00000000;
    border: none;
    border-bottom: 4px solid var(--ButtonColor);
}
input:focus{outline: none;}

label{
    color: var(--TextHighlight);
    font-weight: bold;
    margin-bottom: 2%;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.container{
    font-size: 1.5rem;
    color: var(--Text);
    background-color: var(--MenuColor);
}
.user_info{
    display: flex;
    flex-direction: column;
    border: none;
    padding-inline: none;
}
.user_info input{
    margin-bottom: 4%;
}


#buttons{
    display: flex;
    justify-content: space-between;
}


</style>