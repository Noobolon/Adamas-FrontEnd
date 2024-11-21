<script>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/stores/authentication';

export default {
    name: "headerBar",
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
            logged: this.authStore.getAccType
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
    <div class="mobileHeader">
        <RouterLink to="/"><img src="/logos/AdamasWhite.png" alt="Logo"></RouterLink>
        <button @click="showMenu = !showMenu">
            <img src="/symbols/menuIcon.svg" alt="menu Icon" >
        </button>
    </div>

    <header v-if="showMenu" >
        <div>
            <RouterLink to="/" id="returnHomeB"><img src="/logos/AdamasWhite.png" alt="Logo"></RouterLink>
            <ul>
                <li><RouterLink to="/projetos">Projetos</RouterLink></li>
                <li><RouterLink to="/eventos">Eventos</RouterLink></li>
            </ul>
        </div>
        

        <div id="User">
            <a v-if="logged != null" @click="this.authStore.logout()" id="logoutB"><img src="/symbols/LogoutIcon.svg" alt=""></a>

            <RouterLink v-if="logged == 'common'" to="/">
                <img src="/symbols/DefaultProfile.png" alt="Perfil">
            </RouterLink>
            <RouterLink v-if="logged == 'institution'" to="/">
                <img src="/symbols/InstIcon.png" alt="Perfil">
            </RouterLink>
            <RouterLink v-if="logged == null" to="/tipo-de-conta">
                <p>Entrar</p>
            </RouterLink>
        </div>

    </header>
</template>



<style scoped>

header{
    padding: 15px;
    background-color: var(--ToolbarColor);
    color: var(--Text2);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mobileHeader{
    display: none;
}
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div > a {margin: 0px 10px;}

a{
    font-size: 1.75rem;

    text-decoration: none;
    text-align: center;
    color: var(--Text2);
}
a::after{
    color: var(--Text2);
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


/* Responsividade */

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
    .mobileHeader{
  
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