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

            <div class="cntnt_style">
                <p>{{ event.institution_name }}</p>
                <p><span>Local: </span>{{ event.address }}</p>
                <p><span>Data: </span>{{ event.start_date }} até {{ event.end_date }}</p>
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
.cntnt_style {
    list-style: none;
    padding: 0%;
    margin: 2% 0 0 0;
    color: var(--SubText);
}

.cntnt_style span{
    color: var(--Text2);
    font-weight: bold;
}

</style>