<template>
  <AppContainer>
    <h1>Search Results for "{{ route.params.q }}"</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <SearchItem v-for="show in data" :show="show.show" :key="show.show.id" />
  </AppContainer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useAppFetch } from "@/composables/useFetch";
import AppContainer from "@/components/AppContainer.vue";
import SearchItem from "@/components/SearchItem.vue";

const API_URL = import.meta.env.VITE_API_URL;
const route = useRoute();
const { data, loading, error, useFetch } = useAppFetch();

watch(
  () => route.params.q,
  async () => {
    const url = API_URL + "/search/shows?q=" + route.params.q;
    await useFetch(url);
  },
  { immediate: true }
);
</script>
