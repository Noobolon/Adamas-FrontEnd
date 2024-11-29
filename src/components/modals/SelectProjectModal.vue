<script>
import { getProjectsFromUserID } from '@/assets/scripts/user_scripts';


export default{
    name: "SelectProjectModal",

    props:{
        userID: Number,
        token: String,
        show: Boolean
    },

    data(){
        return{
            user_projects: []
        }
    },

    methods:{
        selectProject(project){
            this.project = project
        }

    },

    mounted(){
        
        getProjectsFromUserID(this.userID)
        .then(projects => this.user_projects = projects)

    }


}


</script>

<template>

    <Transition name="modal">
        <div v-if="show" class="modal-mask">

            <div class="container">

                <div class="projects">

                    <div class="project" v-if="this.user_projects" v-for="project in this.user_projects" @click="$emit('project', project); $emit('close')">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="cat" v-for="cat in project.categories">{{ cat.name }}</div>
                    </div>
                    <div  v-else id="no_projects">
                        <h2>Você não possui nenhum projeto.</h2>
                    </div>
                    
                </div>

                <div class="buttons">
                    <button @click="$emit('close')">
                        Cancelar
                    </button>
                </div>

            </div>

        </div>

    </Transition>


</template>

<style scoped>
@import url(@/assets/css/modal.css);
@import url(@/assets/css/categorias.css);

#no_projects{
    text-align: center;
}

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.projects{
    margin-bottom: 4%
}


.project{
    padding: 4% 0;
    border-bottom: 4px solid var(--ButtonColor);
}
.project:hover{
    cursor: pointer;
    background-color: var(--ButtonColor);
}

</style>