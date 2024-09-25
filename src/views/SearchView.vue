<template>
  <AppContainer>
    Search
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-for="show in data">
      <RouterLink :to="{ name: 'detail', params: { id: show.show.id } }">
        {{ show.show.name }}
      </RouterLink>
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
  () => route.params.q,
  async () => {
    console.log(route.params.q);

    const url = API_URL + "/search/shows?q=" + route.params.q;
    await useFetch(url);
  },
  { immediate: true }
);
</script>
