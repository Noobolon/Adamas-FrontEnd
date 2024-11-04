<script>

export default{
    name: 'EventComponent',
    props: {
        event: {
            type: Object
        }
    },

    data() {
        
    },
}


</script>

<template>
    <div class="event_style">

        <div>
            <h1><RouterLink to="/">{{ event.name }}</RouterLink></h1>
            <p>{{ event.description }}</p>

            <div>
                <ul class="owners_style">
                    <p v-for="owner in event.owners" :key="owner.id">{{ owner.name }}</p>
                </ul>
            </div>
        
        </div>
    </div>
    
    
</template>

<style scoped>

a{color: var(--Text2);}

.event_style{
    border: solid 2px var(--ButtonColor);
    border-radius: 10px;
    margin-top: 2%;
    padding: 2%;
    width: 75%;

    background-color: var(--CardColor);
    color: var(--Text2);
}


/* Nomes dos integrantes */
.owners_style {
    padding: 0%;
    margin: 2% 0 0 0;
}
.owners_style p{
    color: var(--SubText);
}


</style>