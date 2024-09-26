<template>
  <AppContainer>
    <div class="grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-4 gap-8">
      <AppSidebar
        class="col-span-1"
        :genres="filteredGenres"
        :selectedGenres="selectedGenres"
        @select-genre="selectGenre"
      />
      <div class="lg:col-span-5 sm:col-span-3">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
          <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <ListItem
              v-for="show in filteredList"
              :key="show.id"
              :show="show"
            />
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import AppContainer from "@/components/AppContainer.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import ListItem from "@/components/ListItem.vue";
import { useAppFetch } from "@/composables/useFetch";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const { data, loading, error, useFetch } = useAppFetch();
const API_URL = import.meta.env.VITE_API_URL;

const store = useStore();
const { storeData, selectGenre } = store;
const { filteredList, filteredGenres, selectedGenres } = storeToRefs(store);

const networks = ref();
onMounted(async () => {
  const url = API_URL + "/shows";
  await useFetch(url);
  storeData(data.value);
});
</script>
