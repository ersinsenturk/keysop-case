<template>
  <h2>Last Episode</h2>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <div class="col-span-1 relative">
      <img :src="data.image?.original || noImage" alt="" />
      <ItemRating
        v-if="data.rating.average"
        :rating="data.rating.average"
        class="absolute top-3 right-3"
      />
    </div>
    <div class="col-span-3">
      <h3>
        {{ data.name }}
        <span> (S{{ data.season }} E{{ data.number }}) </span>
      </h3>
      <p v-html="data.summary"></p>
      <p>{{ formatDate(data.airdate) }}</p>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "@/utils";
import ItemRating from "@/components/ItemRating.vue";
import noImage from "@/assets/no-image.svg";

defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
