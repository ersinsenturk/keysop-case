<template>
  <RouterLink
    :to="{ name: 'detail', params: { id: show.id } }"
    class="shadow-md rounded-md border border-gray-200 overflow-hidden relative"
  >
    <div class="w-full aspect-[3/4]">
      <img
        class="w-full h-full object-cover"
        :src="show.image.medium || noImage"
        alt=""
      />
    </div>

    <div class="p-3">
      <p class="font-bold text-sm">{{ show.name }}</p>
      <p class="text-sm">{{ genres || "" }}</p>
    </div>
    <ItemRating
      v-if="show.rating.average"
      :rating="show.rating.average"
      class="absolute top-3 right-3"
    />
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import ItemRating from "@/components/ItemRating.vue";
import noImage from "@/assets/no-image.svg";

const props = defineProps({
  show: {
    type: Object,
    required: true,
  },
});

const genres = computed(() => {
  return props.show.genres.join(", ");
});
</script>

<style lang="scss" scoped></style>
