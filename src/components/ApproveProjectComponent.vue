<script>
import { approveProject, rejectProject } from '@/assets/scripts/event_scripts';

export default{

    name: "ApproveProjectComponent",

    props:{
        token: String,
        event_id: String,
        rooms: Array,
        project: Object
    },

    data(){
        return{
            selected_room: undefined,
        }
    },

    methods:{

        aprovarProjeto(){
            // eu geralmente faço essa função externa pra tratar variáveis, mas não precisou dessa vez
            approveProject(
                this.token,
                this.project.project_id,
                this.selected_room.room_id,
                this.event_id
            )
        },

        desaprovarProjeto(){

            rejectProject(
                this.token,
                this.project.project_id,
                this.event_id
            )

            location.reload()
        }

    }

}
</script>

<template>


<div class="project">

    <div class="project_info">
        <RouterLink :to="{ name: 'projeto', params: {id: project.project_id}}">
            <h3>{{ project.title }}</h3>
        </RouterLink>

        <p>{{ project.description }}</p>

    </div>

    <form class="actions" @submit="aprovarProjeto()">

        <select v-model="selected_room" name="Salas" id="salas" required>
            <option v-for="room in this.rooms" :value="room">{{ room.name }}</option>
        </select>
        <p v-if="selected_room">Capacidade: {{ selected_room.projects ? selected_room.projects.length : 0 }}/{{ selected_room.quantity_projects }}</p>
        
        <input type="submit" value="Aprovar" id="approve">
        <input type="button" value="Rejeitar" id="reject" @click="desaprovarProjeto()">
    </form>

</div>



</template>

<style scoped>

.project{
    background-color: var(--BackgroundColor);
    color: var(--Text);

    margin-bottom: 2%;
    padding: 2%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    border: 4px solid var(--ButtonColor);
    border-radius: 25px;
}

.project_info{
    width: 45%;
}
.project_info > *{
    margin-bottom: 2%;
}

.actions{
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.actions > *{
    margin-bottom: 2%;
    padding: 2%;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    width: 80%;
    cursor: pointer;
}

#approve{background-color: var(--TagSelectedColor);}
#approve:hover{background-color: #9acc7c;}

#reject{
    background-color: var(--TagColor);
}
#reject:hover{
    background-color: #d37c7c;
}

</style>