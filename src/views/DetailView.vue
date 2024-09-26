<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div class="bg-slate-400">
      <AppContainer>
        <DetailMain :data="data[0]" />
      </AppContainer>
    </div>
    <AppContainer>
      <DetailCast :data="data[1]" />
      <DetailLastEpisode :data="lastEpisodeData" />
    </AppContainer>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useAppFetch } from "@/composables/useFetch";
import AppContainer from "@/components/AppContainer.vue";
import DetailMain from "@/components/DetailMain.vue";
import DetailCast from "@/components/DetailCast.vue";
import DetailLastEpisode from "@/components/DetailLastEpisode.vue";

const API_URL = import.meta.env.VITE_API_URL;
const route = useRoute();
const { data, loading, error, useFetchAll } = useAppFetch();

const lastEpisodeIndex = computed(() => {
  const episodesLength = data.value[2]?.length - 1;
  return episodesLength;
});
const lastEpisodeData = computed(() => {
  return data.value[2][lastEpisodeIndex.value];
});

watch(
  () => route.params.id,
  async () => {
    const mainUrl = API_URL + "/shows/" + route.params.id;
    const castUrl = API_URL + "/shows/" + route.params.id + "/cast";
    const episodesUrl = API_URL + "/shows/" + route.params.id + "/episodes";

    await useFetchAll([mainUrl, castUrl, episodesUrl]);
  },
  { immediate: true }
);
</script>
