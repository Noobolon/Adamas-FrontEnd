<script>
    export default {
        name: "HomePage"
    }
</script>

<script setup>  
import LinkButton from '../components/LinkButton.vue'

</script>

<template>

    <main>

        <!-- Introdução ao site -->
        <div id="Intro">
            <header>
                <h1>Adamas</h1>
                <h2>Plataforma de hospedagem de projetos e eventos.</h2>

                <LinkButton text="Entrar" link="/tipo-de-conta" />  
            </header>
             
        </div>

        <article>
            <h2>Participe de eventos</h2>
            <img src="../assets/images/screenshots/events.png">
        </article>

        <article>
            <h2>Exponha seus próprios projetos</h2>
            <img src="../assets/images/screenshots/comment.png">
        </article>

        <article>
            <h2>Veja e avalie projetos de outras pessoas</h2>
            <img src="../assets/images/screenshots/browse.png">
        </article>
    </main>

    <!-- Seção da equipe -->
    <div id="Equipe">
        <article>
            <h2>Equipe</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatum et aliquam eum voluptatem atque non sint! Quibusdam reprehenderit doloremque ex nam porro earum, similique consectetur fuga assumenda architecto adipisci.</p>
        </article>

        <ul>
            <li>
                <img src="/symbols/DefaultProfile.png" alt="Perfil">
                <h3>Eduardo<span>/Frontiendo</span></h3>
            </li>
            <li>
                <img src="/symbols/DefaultProfile.png" alt="Perfil">
                <h3>Felipe<span>/Backiendo</span></h3>
            </li>
        </ul>
    </div>

</template>



<style scoped>



/* Header */

div #Intro{
    height: 80vh;
    width: 100%;

    background-size: 50%;
    background-image: url('../assets/images/SimpleDiamond.png');
    background-repeat: no-repeat;
}

header{
    padding: 8% 0 0 12%;
    width: fit-content;
}



header> h1{
    color: var(--TextHighlight);
    font-size: 7em;
}

header> h2{
    font-size: 3em;
    margin-bottom: 3%;
}

 
/* Article */

article{
    margin-left: 5%;
}

article > img{
    padding: 2%;
    width: 50vw;
    margin-left: 10%;
}

article > h2{
    color: var(--TextHighlight);
    font-size: 3em;
    margin: 2% 0 0 0 ;
}

article > p{
    font-size: 2em;
}



/* Equipe */

div #Equipe{
    padding: 2%;
    background-color: #88DAEC;
}

ul{
    list-style-type: none;
    padding: 2% 5%;
}

li{
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-bottom: 2%;
}

li > img{width: 7.5%; margin-right: 1%;}

li > h3{
    align-content: center;
    font-size: 2em;
}

h3 > span{
    color: #727272;
    font-weight: normal;
}



/* Responsividade */

@media screen and (max-width: 600px){
    *{
        font-size: 10px;
    }

    div #Intro{
        height: 100%;
        margin-bottom: 5%;
    }
}

</style>