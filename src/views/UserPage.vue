<script>
import ProjectComponent from '@/components/ProjectComponent.vue';
import { getProjectsFromUserID, getUserFromID } from '@/assets/scripts/user_scripts';
import { useAuthStore } from '@/stores/authentication';
import { useProjectStore } from '@/stores/project';
import LinkButton from '@/components/LinkButton.vue';
import EditUserModal from '@/components/modals/EditUserModal.vue';

export default {
    name: "UserPage",
    components: { 
        ProjectComponent,
        LinkButton,
        EditUserModal
    },

    data(){
        return{
            authStore: useAuthStore(),
            projectStore: useProjectStore(),

            user: undefined,
            u_id: this.$route.params.id,
            user_projects: [],

            modalOpen: false
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

<div id="banner" v-if="this.user">
    <img src="" alt="">
    <div class="user_containerMobile">
        <div class="userInfo">
            <img id="userImg" src="/symbols/UserIcon.png" alt="Usuário">
            <h1 v-if="this.user.nickname">{{ this.user.nickname }}</h1>
            <h1 v-else>{{ this.user.username }}</h1>
            <h1 id="you" v-if="isLoggedUserSameAsProfile()">(Você)</h1>
        </div>
        <div class="divisor"></div>
        <ul>
            <li v-if="this.user.description" id="desc">
                {{ this.user.description }}
            </li>
            <li v-else>
                <p>Usuário não possui descrição.</p>
            </li>

            <li>
                <p v-if="this.user_projects"><b>Projetos: </b>{{ this.user_projects.length }}</p>
            </li>
            <ul v-if="isLoggedUserSameAsProfile()" class="personal_buttons">
                <li @click="this.modalOpen = true">Editar perfil</li>
                <li id="logout" @click="this.authStore.logout()">Sair</li>
            </ul>
        </ul>
    </div>
</div>

<div class="container">

    <div v-if="this.user" class="user_container">
        <img id="userImg" src="/symbols/UserIcon.png" alt="Usuário">

        <h1 v-if="this.user.nickname">{{ this.user.nickname }}</h1>
        <h1 v-else>{{ this.user.username }}</h1>

        <p id="you" v-if="isLoggedUserSameAsProfile()">(Você)</p>
        <ul>
            <li v-if="this.user.description" id="desc">
                {{ this.user.description }}
            </li>
            <li v-else>
                <p>Usuário não possui descrição.</p>
            </li>

            <li>
                <p v-if="this.user_projects"><b>Projetos: </b>{{ this.user_projects.length }}</p>
            </li>

        </ul>
        <ul v-if="isLoggedUserSameAsProfile()" class="personal_buttons">
            <li @click="this.modalOpen = true">Editar perfil</li>
            <li id="logout" @click="this.authStore.logout()">Sair</li>
        </ul>

        <Teleport to="body">
            <EditUserModal :show="modalOpen" @close="modalOpen = false" 
            :userID="this.u_id"
            :userToken="this.authStore.getToken"
            :currentNickname="this.user.nickname"
            :currentDescription="this.user.description" />
        </Teleport>

    </div>

    <main v-if="this.user">
        <h2>Projetos feitos por esse usuário:</h2>
        <LinkButton v-if="isLoggedUserSameAsProfile()" link="/criar-projeto">Criar projeto</LinkButton>

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
    <main v-else id="userNotExist"><h2>Usuário inexistente :(</h2></main>
</div>
 
</template>


<style scoped>
@import url(@/assets/css/pesquisas.css);
@import url(@/assets/css/categorias.css);


.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


/* Projetos criados pelo usuário */

main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: baseline;

    padding: 4%;
    width: 35%;
}
main > h2{color: var(--TextHighlight);}
main > a{
    font-size: 1.5rem;
    margin: 2% 0 0 0;
    width: 50%;
    height: fit-content;
}

#userNotExist{
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

}
.projects_container{
    margin: 2% 0 4% 0;
    width: 90%;
}

.projects_container p{
    padding: 2%;
    text-align: center;
    color: var(--TextHighlight2);
}
.projects_container div{
    height: fit-content;
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

.user_containerMobile{
    display: none;
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

.personal_buttons li:hover{
    font-weight: bold;
    cursor: pointer;
}

#desc{
    max-width: 100%;
    line-break: anywhere;
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

@media screen and (max-width: 600px){
 .user_containerMobile{
    padding: 10px;
    display: block;
 }
 .userInfo{
    display: flex;
    align-items: center;

 }
 main{
    width: 100%;
 }
 ul{
    width: 100%;
    border: 0;
 }
 ul > li {
    font-size: 1.5rem;
    text-align: start;
 }
 #userImg{
    width: 50px;
    margin-right: 20px;
    margin-bottom: 0;
 }
 .user_container{
    display: none;
 }
 .userInfo > h1 {
    font-size: 2rem;
    color: var(--TextHighlight);
 }
 #you{
    margin-left: 5px;
    font-size: 1.5rem;
 }
 .divisor{
    margin-top: 20px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 4px;
    background-color:  var(--ButtonColor);
 }
 .personal_buttons {
    color: var(--TextHighlight);    
    width: 100%;
 }
}

</style>