<script>
    export default{
        name: "ToolBar"  
    }

</script>


<template>
    <header>
        <ul>
            <li>
                <img src="/logos/AdamasWhite.png" alt="Logo">
            </li>
             <li><a href="https://www.youtube.com">Projetos</a></li>
            <li><a href="https://www.facebook.com">Eventos</a></li>
            <li><a href="https://www.instagram.com">Contatos</a></li>
        </ul>

        <div>
            <p>teste</p>
        </div>
        
    </header>
</template>


<style scoped>

header{
    padding: 2%;

    background-color: var(--ToolbarColor);
    color: var(--Text2);

    display: flex;
    justify-content: space-between;
    align-items: center;
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
    list-style: none;
    display: flex;
    justify-content: space-evenly;
}

li{
    margin: 0px 10%;
    border-left: 2px;
}


</style>