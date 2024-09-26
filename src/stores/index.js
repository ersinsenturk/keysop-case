import { defineStore } from "pinia";
import { ref, computed, unref, toRaw } from "vue";

export const useStore = defineStore("store", () => {
  const showsList = ref([]);
  const filteredShowsList = ref([]);
  const selectedGenres = ref([]);

  const storeData = (data) => {
    showsList.value = [];
    data = sortByRating(data);
    showsList.value.push(...data);
    filteredShowsList.value = unref(showsList);
  };

  const sortByRating = (array) => {
    array.sort((a, b) => b.rating.average - a.rating.average);
    return array;
  };

  const minAngle = ref(0);
  const maxAngle = ref(10);
  const setRatingRange = (rating) => {
    const { min, max } = rating;
    minAngle.value = min;
    maxAngle.value = max;
  };

  const selectGenre = (genre) => {
    if (selectedGenres.value.includes(genre)) {
      selectedGenres.value = selectedGenres.value.filter(
        (item) => item !== genre
      );
      return;
    } else selectedGenres.value.push(genre);
  };

  const filteredList = computed(() => {
    let splicedList;

    splicedList = filteredShowsList.value.filter(
      (item) =>
        item.rating.average >= minAngle.value &&
        item.rating.average <= maxAngle.value
    );

    if (selectedGenres.value.length) {
      const mappedListGenres = splicedList.map((item) => item.genres);
      const listWithGenres = [];
      mappedListGenres.forEach((subArray, index) => {
        if (subArray.some((item) => selectedGenres.value.includes(item))) {
          listWithGenres.push(splicedList[index]);
        }
      });

      return listWithGenres;
    } else return splicedList;
  });

  const filteredGenres = computed(() => {
    let genres = showsList.value.reduce(
      (full, item) => full.concat(item.genres),
      []
    );
    const uniqueGenres = [...new Set(genres)];
    return uniqueGenres;
  });

  return {
    filteredList,
    filteredGenres,
    selectedGenres,
    setRatingRange,
    storeData,
    selectGenre,
  };
});
