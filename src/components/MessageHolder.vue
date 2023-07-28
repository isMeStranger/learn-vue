<template>
    <div>
        This is the message holder
        <p>{{msg}}</p>
    </div>
</template>

<script setup>
const props = defineProps({    
    msg:{
        type:String,
        required:yes
    }
})
</script>

<style scoped>

</style>