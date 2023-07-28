<template>
    <div class="overlay">
        <div class="modal">
            <p @click="hideModal">x</p>
            <textarea v-model="newNote"/>
            <button @click="addNote">Add Note</button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
    shouldShowModal:{
        type:Boolean,
        required:yes
    },    
});
const emit = defineEmits(['add-msg','hide-modal']);

const newNote = ref("");
const addNote=()=>{
    emit('add-msg', newNote);
}
const hideModal= ()=>{
    emit('hide-modal', null)
}

</script>

<style scoped></style>