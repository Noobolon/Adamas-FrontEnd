<script>
import ProjectComponent from '@/components/ProjectComponent.vue';
import { getProjectsFromUserID, getUserFromID } from '@/assets/scripts/user_scripts';
import { useAuthStore } from '@/stores/authentication';
import { useProjectStore } from '@/stores/project';

export default {
    name: "UserPage",
    components: { ProjectComponent },

    data(){
        return{
            authStore: useAuthStore(),
            projectStore: useProjectStore(),

            user: undefined,
            u_id: this.$route.params.id,
            user_projects: {}
        }
    },

    methods: {
        isLoggedUserSameAsProfile(){
            if (this.authStore.token){
                let logged_user = this.authStore.getUser
                return logged_user && this.u_id == logged_user.id
            } else return false
            
        }
    },

    created(){

        getUserFromID(this.u_id)
        .then(user => {
            this.user = user
        })
        .catch(error => console.log(error))

        getProjectsFromUserID(this.u_id)
        .then(projects => {
            this.user_projects = projects
        })
        .catch(error => console.error(error))

    }

}

</script>


<template>

<div id="banner">
    <img src="" alt="">
</div>

<div class="container">

    <div v-if="this.user" class="user_container">
        <img id="userImg" src="/symbols/UserIcon.png" alt="Usuário">

        <h1 v-if="this.user.nickname">{{ this.user.nickname }}</h1>
        <h1 v-else>{{ this.user.username }}</h1>

        <p id="you" v-if="isLoggedUserSameAsProfile()">(Você)</p>
        <ul>
            <li v-if="this.user.description">
                {{ this.user.description }}
            </li>
            <li v-else>
                <p>Usuário não possui descrição.</p>
            </li>

            <li>
                <p v-if="this.user_projects"><b>Projetos: </b>{{ this.user_projects.length }}</p>
            </li>

        </ul>
        <ul v-if="isLoggedUserSameAsProfile()">
            <li id="logout" @click="this.authStore.logout()">Sair</li>
        </ul>
    </div>

    <main>
        <h2>Projetos feitos por esse usuário:</h2>
        <p>

        </p>

        <div class="projects_container">
            <p v-if="!this.user_projects">
                Usuário não criou nenhum projeto.
            </p>

            <ProjectComponent v-else
            v-for="project in this.user_projects"
            :project="project"
            :key="project.project_id" />
        </div>
        
    </main>

</div>
 
</template>


<style scoped>
@import url(@/assets/css/pesquisas.css);
@import url(@/assets/css/categorias.css);

main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: baseline;

    padding: 4%;
    width: 35%;
}
main > h2{
    color: var(--TextHighlight);
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


/* Projetos criados pelo usuário */

.projects_container{
    margin: 2% 0 4% 0;
    width: 90%;
}
.projects_container p {
    padding: 2%;
    text-align: center;
    color: var(--TextHighlight2);
}
.projects_container div{
    height: 100%;
}


/* Usuário */

.user_container{
    width: 20%;
    color: var(--TextHighlight2);
    font-size: 1.5rem;
    font-weight: normal;

    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    transform: translateY(-10%);
}
.user_container h1{
    color: var(--TextHighlight);
    font-size: 2rem;
}

ul{
    width: 50%;
    margin: 2% 0 2% 0;
    padding: 4%;
    border-top: 4px solid var(--ButtonColor);
    list-style: none;
    padding: 0px;
}
ul > li{
    text-align: center;
    padding: 2%;
}
ul > li:first-child{
    margin-top: 4%;
}

#you{font-size: 1rem;}

#logout:hover{
    font-weight: bold;
    cursor: pointer;
}

#banner{
    min-width: 100%;
    min-height: 20vh;
    background-color: var(--SubBackgroundColor);
}

#userImg{
    width: 50px;
    background-color: black;
    padding: 4%;
    margin-bottom: 4%;
    border: 2px solid black;
    border-radius: 100%;
}

</style>