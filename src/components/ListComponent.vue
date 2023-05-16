<script setup>
import {computed} from "vue";
import {store} from "@/state/store";

const numberOfPeople = computed(() => {
    return store.personList.length;
})

defineProps({
    header: String
})
</script>

<template>
    <div>
        <h2>{{ header }}</h2>
      <ul>
          <li v-for="person in store.personList">
              Name: {{ person.name }} LastName: {{ person.lastName }}
          </li>
      </ul>

      <p> Number of People: {{ numberOfPeople }}</p>
  </div>
</template>

<style scoped>

</style>