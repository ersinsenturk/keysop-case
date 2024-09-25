import { defineStore } from "pinia";
import { ref, computed, unref, toRaw } from "vue";

export const useStore = defineStore("store", () => {
  const list = ref([]);
  const selectedGenres = ref([]);

  const storeData = (data) => {
    list.value.push(...data);
  };

  const selectGenre = (genre) => {
    selectedGenres.value.push(genre);
  };

  const filteredList = computed(() => {
    let splicedList;

    if (selectedGenres.value.length) {
      const mappedListGenres = list.value.map(
        (item) => item._embedded.show.genres
      );

      const matchingGenres = [];
      mappedListGenres.forEach((subArray, index) => {
        if (subArray.some((item) => selectedGenres.value.includes(item))) {
          matchingGenres.push(list.value[index]);
        }
      });

      splicedList = matchingGenres;
    } else splicedList = [...list.value].splice(0, 10);
    return splicedList;
  });

  const filteredGenres = computed(() => {
    let genres = list.value.reduce(
      (full, item) => full.concat(item._embedded.show.genres),
      []
    );
    const uniqueGenres = [...new Set(genres)];
    return uniqueGenres;
  });

  // türü query olarak yaz watch ile kontrol edip değişince filtre reactive ile kontrol et

  return {
    filteredList,
    filteredGenres,
    storeData,
    selectGenre,
  };
});
