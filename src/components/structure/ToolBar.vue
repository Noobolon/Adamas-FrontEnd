<script>
export default {
    name: "ToolBar"
}
</script>

<script setup>


</script>

<template>
    <header>
        <div>
            <img src="/logos/AdamasWhite.png" alt="Logo">
            <ul>
             <li><a href="https://www.youtube.com">Projetos</a></li>
            <li><a href="https://www.facebook.com">Eventos</a></li>
            <li><a href="https://www.instagram.com">Contato</a></li>
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

    </header>
</template>



<style scoped>

header{
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
div > a{
    margin: 0px 0px;
}


a{
    font-size: 18pt;

    text-decoration: none;
    text-align: center;
    color: var(--Text2);
}
a::after{
    color: var(--Text2);
}



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




</style>