<template>
  <AppContainer>
    Profile
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div>
      {{ data?.name }}
    </div>
  </AppContainer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useAppFetch } from "@/composables/useFetch";
import AppContainer from "@/components/AppContainer.vue";

const API_URL = import.meta.env.VITE_API_URL;
const route = useRoute();
const { data, loading, error, useFetch } = useAppFetch();

watch(
  () => route.params.id,
  async () => {
    const url = API_URL + "/people/" + route.params.id;
    await useFetch(url);
  },
  { immediate: true }
);
</script>
