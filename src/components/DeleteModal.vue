<template>
    <AreYouSureModal v-if="showSureModal" :modalId="'are_you_sure_modal'" @on-sure="deleteItem" @on-cancel="showSureModal=false"></AreYouSureModal>
    <div class="overlay">
        <div class="modal">
            <p @click="hideModal">x</p>
            which item to delete? 
            <select v-model="selected">
                <option v-for="item, index in notes" :key="index" :value="{index:index, value:item}">{{item}}</option>
            </select>            
            <button @click="doShowSureModal">delete item</button>
        </div>
    </div>
</template>

<script setup>
import AreYouSureModal from './AreYouSureModal.vue';
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
    notes:{
        type:Array,
        required:yes
    }
});
const emit = defineEmits(['hide-modal', 'delete-item']);

const selected = ref('');

const showSureModal = ref(false)


const doShowSureModal= ()=>{
    showSureModal.value = true;        
}

const deleteItem= ()=>{    
    showSureModal.value = false
    emit('delete-item', selected.value.index)
}

const hideModal= ()=>{
    emit('hide-modal', null)
}

</script>

<style scoped></style>