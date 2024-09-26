<template>
  <div class="min-h-screen pb-12">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
</script>
