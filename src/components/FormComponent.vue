<script setup>
import {ref} from "vue";
import {store} from "@/state/store";
import { useRouter } from 'vue-router';

const name = ref(''),
    lastName = ref(''),
    router = useRouter();

function save() {
    store.push({'name': name.value, 'lastName': lastName.value});
    name.value = '';
    lastName.value = '';

    router.push('/list');
}

defineProps({
    header: String
})
</script>

<template>
    <div>
      <h2>{{ header }}</h2>
        <label for="name">Name: </label>
      <input type="text" name="name" id="name" v-model="name"> <br>
        <label for="lastname">Last name: </label>
      <input type="text" name="lastName" id="lastname" v-model="lastName">
      <button @click="save">Save!</button>
    </div>
</template>

<style scoped>

</style>