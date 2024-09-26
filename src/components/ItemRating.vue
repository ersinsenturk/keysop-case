<template>
  <div
    class="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 text-xs bg-black text-white p-3 rounded-full font-bold aspect-square"
  >
    {{ rating }}
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped></style>
