<template>
  <h2>Cast</h2>
  <div class="w-full whitespace-nowrap overflow-auto pb-6 no-scrollbar">
    <div class="inline-block mx-2" v-for="cast in data" :key="cast.person.id">
      <img :src="cast.person.image?.medium" alt="" />
      <p class="font-bold">{{ cast.person.name }}</p>
      <p>{{ cast.character.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
