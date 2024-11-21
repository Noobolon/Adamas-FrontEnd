<script>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/stores/authentication';

export default {
    name: "navBar",
    setup() {
        // authStore
        const authStore = useAuthStore();
        
        // Responsividade
        const showMenu = ref(true); 
        const initMenu = () => {
        const larguraTela = window.innerWidth;
        showMenu.value = larguraTela > 600; 
        };
        onMounted(() => {
            initMenu();
            window.addEventListener('resize', initMenu);
        });
        onUnmounted(() => {
            window.removeEventListener('resize', initMenu);
        });


        return {
            showMenu, authStore
        };
    },

    data(){
        return{
            user: this.authStore.getUser,
            accType: this.authStore.getAccType
        }
    },

    methods:{
        scrollDown(){
            window.scrollTo(100,100);
        },


    }

}
</script>

<template>
    <div class="mobileNav">
        <RouterLink to="/"><img src="/logos/AdamasWhite.png" alt="Logo"></RouterLink>
        <button @click="showMenu = !showMenu">
            <img src="/symbols/menuIcon.svg" alt="menu Icon" >
        </button>
    </div>

    <nav v-if="showMenu" >
        <div>
            <RouterLink to="/" id="returnHomeB"><img src="/logos/AdamasWhite.png" alt="Logo"></RouterLink>
            <ul>
                <li><RouterLink to="/projetos">Projetos</RouterLink></li>
                <li><RouterLink to="/eventos">Eventos</RouterLink></li>
            </ul>
        </div>
        

        <div id="user">
            <p id="username" v-if="user">
                {{ user.name }}
            </p>


            <button type="button" id="logout" v-if="accType != null" @click="this.authStore.logout()">
                <img src="/symbols/LogoutIcon.svg" alt="Sair">
            </button>
            <RouterLink v-if="accType == 'common'" to="/">
                <img class="profile" src="/symbols/user/WhiteCommon.png" alt="Perfil">
            </RouterLink>
            <RouterLink v-if="accType == 'institution'" to="/">
                <img class="profile" src="/symbols/user/WhiteInst.png" alt="Perfil">
            </RouterLink>

            <RouterLink v-if="accType == null" to="/tipo-de-conta">
                <p>Entrar</p>
            </RouterLink>
        </div>

    </nav>
</template>



<style scoped>

nav{
    width: 100%;
    background-color: var(--ToolbarColor);
    color: var(--Text2);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav > div{
    width: 35%;
    display: flex;
    align-items: center;
}

nav > *{
    margin: 1.25%;
}

a{
    font-size: 1.75rem;

    text-decoration: none;
    text-align: center;
    color: var(--Text2);
}
a::after{
    color: var(--Text2);
}

img{
    padding: none;
}
.profile{
    width: 100%;
}

/* Botões */

ul{
    padding: 0;

    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}


ul li{
    padding: 3px 10%;
    border-bottom: none;
}

li{
    border-right: 2px solid var(--Text2);
}

li:first-child{padding-left: 12%;}
li:last-child{border-right: none;}


#logout{
    background-color: #00000000;
    border: none;
    cursor: pointer;
    margin-right: 2%;
}

#username{
    width: 25%;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
}

#user{
    justify-content: flex-end;
}


/* Responsividade */

.mobileNav{
    display: none;
}

@media screen and (max-width: 600px){


    header{
        display: flex;
        align-items: start;
        flex-direction: column-reverse;
    }
    ul{
        flex-direction: column;
        justify-items: end;
    }
    #User{
        display: block;
    }

    /* header > div > a {
        display: none;
    } */
    #returnHomeB{
        display: none;
    }
    #logoutB{
        display: none;
    }

    header > div {
        align-items: start;
    }
    .mobileNav{
  
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--ToolbarColor);

    }

    button {
        background: none;
        border: none;
    }

   img {
        padding: 10px;
        width: 5vw;
    }
    

    ul{
        width: max-content;
    }
    li{
        border-right: none;
        width: 100%;
    }

    li:hover{
        background-color: #275e7b;
    }

}

</style>