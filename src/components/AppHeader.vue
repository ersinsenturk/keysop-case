<template>
  <header class="bg-gray-200">
    <div class="container mx-auto px-4 md:px-32 flex justify-between">
      <RouterLink to="/" class="w-16 md:w-28">
        <img src="@/assets/logo.png" alt="" />
      </RouterLink>
      Search
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
