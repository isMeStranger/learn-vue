<template>
  <div>
    <DeleteModal v-if="shouldShowDeleteModal" :notes="notesArr" @delete-item="deleteItem"
      @hide-modal="shouldShowDeleteModal = false"></DeleteModal>

    <MessageHolder :msg="notesArr"></MessageHolder>

    <Modal v-if="shouldShowModal" @add-msg="addMsg"
      @hide-modal="shouldShowModal = false"></Modal>

    <button @click="shouldShowModal=true">Add Message</button>
    <button @click="shouldShowDeleteModal=true">Delete Message</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MessageHolder from './components/MessageHolder.vue';
import DeleteModal from './components/DeleteModal.vue';
import Modal from './components/Modal.vue';

const notesArr = ref([]);
const shouldShowModal = ref(false);
const shouldShowDeleteModal = ref(false);

const deleteItem = (index) => {
  notesArr.value.splice(index, 1);
  shouldShowDeleteModal.value = false;
}

const addMsg = (msg) => {
  notesArr.value.push(msg);
  shouldShowModal.value = false;
}

</script>

<style lang="scss" scoped></style>