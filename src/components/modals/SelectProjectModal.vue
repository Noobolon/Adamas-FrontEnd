<script>
import { getProjectsFromUserID } from '@/assets/scripts/user_scripts';


export default{
    name: "SelectProjectModal",

    props:{
        userID: Number,
        token: String,
        project: Object,
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

                <div class="user_info">

                    <div v-for="project in this.user_projects" @click="selectProject(project); $emit('close')">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="cat" v-for="cat in project.categories">{{ cat.name }}</div>
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

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


</style>