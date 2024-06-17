<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavBar",

    data(){
        return{
            main_colors: 'var(--ToolbarColor)',
            home_colors: '#000',

            color: 'var(--ToolbarColor)'
        }
    },

    mounted() {

        if (this.$path == null) { // Se o caminho for a home
            color = this.home_colors
        } else {
            color = this.main_colors
        }
    }
}
</script>

<template>
    <nav>
        <div>
            <RouterLink to="/"><img src="/logos/AdamasWhite.png" alt="Logo"></RouterLink>
            <ul>
                <li><RouterLink to="">Projetos</RouterLink></li>
                <li><RouterLink to="">Eventos</RouterLink></li>
                <li><RouterLink to="">Contato</RouterLink></li>
            </ul>
        </div>
        

        <div id="User">
            <RouterLink to="">
                <img src="/symbols/Notifications.png" alt="Notificações">
            </RouterLink>
            <RouterLink to="">
                <img src="/symbols/DefaultProfile.png" alt="Perfil">
            </RouterLink>
        </div>

    </nav>
</template>



<style scoped>

nav{
    padding: 25px;
    background-color: v-bind(color);
    color: var(--Text2);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div > a {margin: 0px 10px;}

a{
    font-size: 1.5em;

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
    div, ul, nav{
        align-content: center;
        display: flex;
        flex-direction: column;
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
    li:first-child{border-top: 2px solid var(--Text2);}
    li:last-child{border-bottom: 2px solid var(--Text2); margin-bottom: 5%;}
}

</style>