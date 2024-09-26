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
        <AppSpinner v-if="loading" />
        <div v-else-if="error">{{ error }}</div>
        <div v-else-if="filteredList.length === 0">No results found</div>
        <div v-else>
          <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <ListItem
              v-for="show in paginatedItems"
              :key="show.id"
              :show="show"
            />
            <!-- <div v-for="show in paginatedItems" :key="show">{{ show }}</div> -->
          </div>
          <AppPagination
            class="mt-8"
            :total-items="filteredList.length"
            :items-per-page="itemsPerPage"
            :current-page="currentPage"
            @page-changed="handlePageChange"
          />
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import AppContainer from "@/components/AppContainer.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import ListItem from "@/components/ListItem.vue";
import AppPagination from "@/components/AppPagination.vue";
import { useAppFetch } from "@/composables/useFetch";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const { data, loading, error, useFetch } = useAppFetch();
const API_URL = import.meta.env.VITE_API_URL;

const store = useStore();
const { storeData, selectGenre } = store;
const { filteredList, filteredGenres, selectedGenres } = storeToRefs(store);

onMounted(async () => {
  const url = API_URL + "/shows";
  await useFetch(url);
  storeData(data.value);
});

const itemsPerPage = ref(20);
const currentPage = ref(1);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredList.value.slice(start, end);
});

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};
</script>
