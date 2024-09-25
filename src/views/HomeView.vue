<template>
  <AppContainer>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(genre, index) in filteredGenres" :key="index">
            <span class="cursor-pointer" @click="selectGenre(genre)">
              {{ genre }}
            </span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="show in filteredList" :key="show.id">
            <RouterLink
              :to="{ name: 'detail', params: { id: show._embedded.show.id } }"
            >
              <img
                class="w-full"
                :src="show._embedded.show.image?.medium"
                alt=""
              />
              <p>{{ show._embedded.show.name }}</p>
              <p>{{ show._embedded.show.genres }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import AppContainer from "@/components/AppContainer.vue";
import { useAppFetch } from "@/composables/useFetch";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const { data, loading, error, useFetch } = useAppFetch();
const API_URL = import.meta.env.VITE_API_URL;

const store = useStore();
const { storeData, selectGenre } = store;
const { filteredList, filteredGenres } = storeToRefs(store);

const type = ref();
onMounted(async () => {
  const url = API_URL + "/schedule/full";
  await useFetch(url);
  storeData(data.value);
});
</script>
