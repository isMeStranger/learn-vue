<template>
    <div class="overlay">
        <div class="modal">
            <p @click="hideModal">x</p>
            are you sure? 
            <button @click="onSure">yes</button>
            <button @click="onCancel">cancel</button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
    modalId:{
        type:String,
        required:yes
    }
})

const emit = defineEmits(['hide-modal', 'on-cancel', 'on-sure']);

const onSure = ()=>{
    emit('on-sure')
}
const onCancel = ()=>{
    emit('on-cancel')
}
const hideModal=()=>{
    emit('hide-modal', modalId)
}

</script>

<style scoped></style>