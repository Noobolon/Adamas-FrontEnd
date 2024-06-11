<script>
export default {
    name: "NavBar"
}
</script>

<script setup>  
    
</script>

<template>
    <nav>
        <div>
            <a href=""><img src="/logos/AdamasWhite.png" alt="Logo"></a>
            <ul>
                <li><a href="">Projetos</a></li>
                <li><a href="">Eventos</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
        

        <div>
            <a href="">
                <img src="/symbols/Notifications.png" alt="Notificações">
            </a>
            <a href="">
                <img src="/symbols/DefaultProfile.png" alt="Perfil">
            </a>
        </div>

    </nav>
</template>



<style scoped>

nav{
    padding: 25px;
    background-color: var(--ToolbarColor);
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

div > a {margin: 0px 0px;}

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