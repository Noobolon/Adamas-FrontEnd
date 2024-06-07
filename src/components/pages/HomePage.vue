<script>
    export default{
        name: "HomePage"
    }
</script>


<template>
    <main>
        <div>
            <header>
                <h1>Adamas</h1>
                <h2>Plataforma de hospedagem de projetos e eventos.</h2>
            </header>

        </div>

        <article>
            <h2>Participe de eventos</h2>
            <img src="../../assets/images/screenshots/events.png">
        </article>

        <article>
            <h2>Exponha seus próprios projetos</h2>
            <img src="../../assets/images/screenshots/comment.png">
        </article>

        <article>
            <h2>Veja e avalie projetos de outras pessoas</h2>
            <img src="../../assets/images/screenshots/browse.png">

        </article>
    </main>
</template>



<style scoped>

/* Header */

div{
    height: 100vh;
    width: 100%;

    background-size: 100vh;
    background-image: url('../../assets/images/diamond.png');
    background-repeat: no-repeat;
}

header{
    padding: 8% 0 0 12%;
    width: fit-content;
}

header> h1{
    color: var(--TextH);
    font-size: 5.25em;
}

header> h2{
    font-size: 2.25em;
}


/* Article */

article{
    margin-left: 5%;
}

article > img{
    width: 50vw;
    margin-left: 10%;
}

article > h2{
    color: var(--TextH);
    font-size: 2em;
    margin: 2%;
}



</style>