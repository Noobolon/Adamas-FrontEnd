<script>

export default{
    name: 'UserComponent',
    props: {
        user: {
            type: Object
        }
    },

    data() {
        return{
            
        };
    },

}


</script>

<template>
    <div class="user_style">
        <RouterLink :to="`/usuario/${user.id}`"><img src="/symbols/user/BlueCommon.svg" alt=""></RouterLink>
        <div class="user_container">
            <h1><RouterLink :to="`/usuario/${user.id}`">{{ user.nickname ? user.nickname : user.name }}</RouterLink></h1>
            <h3 v-if="user.nickname" class="username">{{ user.name }}</h3>
        </div>
    </div>

    
</template>

<style scoped>

a{color: var(--Text2);}
img{
    border: 4px solid var(--ButtonColor);
    border-radius: 100%;
}


.user_style{
    border: solid 4px var(--ButtonColor);
    border-radius: 25px;
    margin-top: 2%;
    width: 40%;
    height: fit-content;
    min-height: 10vh;
    padding: 2%;

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    background-color: var(--CardColor);
}

.user_container{
    line-break: anywhere;
    margin: 2%;
}

.username{
    color: var(--SubText);
}

</style>