<template>
  <RouterLink
    :to="{ name: 'detail', params: { id: show.id } }"
    class="w-full mb-4 grid grid-cols-3 sm:grid-cols-5 gap-4 shadow-md rounded-md border border-gray-200 overflow-hidden"
  >
    <div class="col-span-1 aspect-[3/4] relative">
      <img
        class="w-full h-full object-cover"
        :src="show.image?.medium || noImage"
        alt=""
      />
      <ItemRating
        v-if="show.rating.average"
        :rating="show.rating.average"
        class="absolute top-1 sm:top-2 right-1 sm:right-2 scale-90 sm:scale-100"
      />
    </div>
    <div class="col-span-2 sm:col-span-4 p-2 sm:p-4 flex flex-col gap-2 pl-0">
      <p class="font-bold text-md">{{ show.name }}</p>
      <p class="text-sm">{{ show.genres.join(", ") }}</p>
      <p class="text-xs sm:text-sm" v-html="show.summary"></p>
    </div>
  </RouterLink>
</template>

<script setup>
import ItemRating from "@/components/ItemRating.vue";
import noImage from "@/assets/no-image.svg";

defineProps({
  show: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
