<script>
import { useAuthStore } from '@/stores/authentication';



export default{
    name: "CreateProject",
    
    data(){
        return{
            authStore: useAuthStore(),

            name: this.event,
            address: this.address,
            description: this.description,

            start_date: this.start_date,
            end_date: this.end_date,

            rooms: []
        }
    },

    methods: {
        getCurrentDate(){
            let curDate = new Date()
            return curDate.toISOString()
        }   

    },

    created(){
        console.log(this.curDate)
    }

}

</script>


<template>

    <main>

        <form class="container" @submit.prevent="criarEvento()">
            <h1>Criação de projeto</h1>

            <fieldset class="event_content">
            
                <input id="title" v-model="name" placeholder="Nome do evento" type="text" required>
                <input id="address" v-model="address" placeholder="Local do evento" type="text" required>

                <div id="datetimes">

                    <input
                    type="datetime-local"
                    name="Data Inicial" 
                    id="startDate"
                    >

                    <input
                    type="datetime-local"
                    name="Data Final"
                    id="endDate"
                    >

                </div>

                <textarea id="desc" v-model="description" placeholder="Descrição do evento" type="text" required rows="12">
                </textarea>

            </fieldset>

            <button type="button">Adicionar sala</button>

            <fieldset class="rooms">

            </fieldset>

            <div id="buttons">
                <button type="reset">Limpar</button>
                <button type="submit">Criar</button>
            </div>  

        </form>

    </main>

</template>


<style scoped>
@import url(@/assets/css/criarItem.css);


#datetimes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
#datetimes input{
    width: 45%;
}


.event_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.event_content *{
    margin-bottom: 4%;
}


</style>