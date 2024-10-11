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
            <h1><RouterLink to="/">{{ event.title }}</RouterLink></h1>
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





</style>