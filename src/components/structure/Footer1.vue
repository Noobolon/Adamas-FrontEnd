<script>
    export default{
        name: "Footer1"
    }
</script>

<template>
    <footer>
        <ul>
            <li>@2024 Adamas</li>
            <!-- <li>Termos</li>
            <li>Privacidade</li>
            <li>Segurança</li>
            <li>Cookies</li> -->
        </ul>
    </footer>
</template>

<style scoped>

footer{
    display: flex;
    justify-content: center;
    align-content: flex-end;
    width: 100%;
    margin-top: 10%;
}

ul{
    width: 100%;
    list-style-type: none;
    font-size: 1rem;
    color: var(--TextHighlight2);

    padding: 5%;
        
    text-align: center;
    align-content: center;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>