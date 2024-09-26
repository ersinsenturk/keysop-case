<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div
      class="lg:col-span-1 sm:col-span-3 rounded-lg overflow-hidden shadow-lg"
    >
      <img :src="data.image?.original" alt="" />
    </div>
    <div class="lg:col-span-3 sm:col-span-1">
      <h1 class="text-3xl">
        {{ data.name }}
        <span class="font-normal text-base">
          ({{ formatDate(data.premiered) }})
        </span>
      </h1>
      <p class="mb-4">{{ data.genres.join(", ") }} - {{ data.runtime }} min</p>
      <ItemRating
        v-if="data.rating.average"
        :rating="data.rating.average"
        class="mb-4"
      />
      <h3>Summary</h3>
      <p class="text-sm" v-html="data.summary"></p>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "@/utils";
import ItemRating from "@/components/ItemRating.vue";
defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
