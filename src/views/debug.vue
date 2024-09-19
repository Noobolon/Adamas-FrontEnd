<script>
import { useUserStore } from '@/stores/user';

export default{
    name: 'debug',

    setup(){
        const user = useUserStore()
        const username = computed(() => useUserStore.name)

        return {
            username
        }
        
    },
}


 
</script>

<template>

<h1>{{ username }}</h1>


</template>