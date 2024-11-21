<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
    name: "HomePage",
    
    components:{
        LinkButton
    },
}

</script>

<template>

    <main>
        <div id="Intro">
            <header>
                <h1>Adamas</h1>
                <h2>Plataforma de divulgação de projetos e eventos.</h2>
                <LinkButton link="/tipo-de-conta" height="max-content">Entrar</LinkButton>
                
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
                    <img src="https://avatars.githubusercontent.com/u/115102100?v=4" alt="Perfil">
                    <h3>Eduardo<span>/Front-end</span></h3>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/105937609?v=4" alt="Perfil">
                    <h3>Felipe<span>/Back-end</span></h3>
                </li>
            </ul>

        </div>
</template>

<style scoped>

main{
    padding: 7%;
}

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
    font-size: 7rem;
}

header> h2{
    font-size: 3rem;
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
    font-size: 3rem;
    margin: 2% 0 0 0 ;
}

article > p{
    font-size: 2rem;
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

li > img{width: 7.5%; margin-right: 1%; border-radius: 100%;}

li > h3{
    align-content: center;
    font-size: 2rem;
}

h3 > span{
    color: #727272;
    font-weight: normal;
}


a{
        width: 25%;
}
/* Responsividade */

@media screen and (max-width: 600px){
    *{
        font-size: 1rem;
    }

    a{
        margin-top: 5vh;
        padding: 10px;
        font-size: 1.5rem;
    }

    div #Intro{
        text-align: center;
        height: fit-content;
        margin-bottom: 5%;
    }

    header{padding: 0;}
    header > h1{
        font-size: 3rem;
    }
    header > h2{
        font-size: 1.5rem;
    }


    article{
        text-align: center;
        justify-content: center;
        margin: 0;
    }
    article > img {
        margin: 0;
        width: 90%;
    }
    article > h2{
        font-size: 1.75rem;
    }
    article > p{
        font-size: 1rem;
    }
    

    ul{padding: 0; margin: 10% 0;}
    li{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    li > img{

        width: 50px;
        height: 50px;
    }
    li > h3 {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 800px){
    div #Intro {
        height: fit-content;
        margin-bottom: 5%;
    }
}

</style>