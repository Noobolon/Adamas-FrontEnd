<script>
    export default{
        name: "Footer1"
    }
</script>

<template>
    <footer>
        <ul>
            <li>@2024 Adamas</li>
            <li>Termos</li>
            <li>Privacidade</li>
            <li>Segurança</li>
            <li>Cookies</li>
        </ul>
    </footer>
</template>

<style scoped>
    ul{
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