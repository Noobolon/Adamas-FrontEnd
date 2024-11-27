<script>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import UserComponent from '@/components/UserComponent.vue';

export default{
    name: "Users",

    components: { 
        RouterLink,
        UserComponent
    },

    data() {
        return {
            userStore: useUserStore(),

            search_content: this.search_content,
            search_results: this.search_results,
        };
    },

    methods: {

        updateSearch(search){
            const searchContent = search ? search.toLowerCase() : "";

            this.search_results = this.userStore.users.filter(user => {
                if (user.nickname){
                    return user.nickname.toLowerCase().includes(searchContent)
                }
                else{
                    return user.name.toLowerCase().includes(searchContent)
                }
                
            }
                
            );

        }

    },

    watch:{
        search_content(newSearch){
            this.updateSearch(newSearch)
        }
    },

    async created(){
        await this.userStore.fetchUsers();
        this.search_results = this.userStore.getUsers;
    },

}

</script>

<template>
    <main>
        <div class="content">
            <div class="srch_container">
                <input type="text" placeholder="Pesquisar usuários..." v-model="search_content">
            </div>
            <nav class="ctgry_container">
                <RouterLink to="/projetos">Projetos</RouterLink>
                <RouterLink to="/eventos">Eventos</RouterLink>
                <RouterLink to="/usuarios" id="selected">Usuários</RouterLink>
            </nav>

            <TransitionGroup name="list" tag="div" class="cntnt_container">
                
                <UserComponent v-for="user in this.search_results"
                :user="user"
                :key="user.id"/>

            </TransitionGroup>

            
        </div>

        <div class="img_container">
            
        </div>

        
    </main>
    
</template>

<style scoped>

@import url(../../assets/css/pesquisas.css);


.cntnt_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}


.img_container{
    background-image: url("../../assets/images/PencilDiamond.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;

    padding: 2%;
    width: 30%;
    height: 75vh;
    float: right;
    margin: 0 5% 0 0;
}

@media screen and (max-width: 600px){
    .img_container{
        display: none;
    }
}
</style>