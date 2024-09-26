<template>
  <div>
    <SidebarBox>
      <h2
        class="flex justify-between items-center mb-0 cursor-pointer"
        @click="openGenres = !openGenres"
      >
        Genres
        <span class="w-3">
          <IconRight
            class="w-full transition-all duration-200"
            :class="openGenres ? 'rotate-90' : ''"
          />
        </span>
      </h2>
      <ul v-show="openGenres" class="mt-2">
        <li
          v-for="(genre, index) in genres"
          :class="selectedGenres.includes(genre) ? 'primary-color' : ''"
          class="text-sm mb-2"
          :key="index"
        >
          <span class="cursor-pointer" @click="selectGenre(genre)">
            {{ genre }}
          </span>
        </li>
      </ul>
    </SidebarBox>
    <SidebarBox>
      <h2
        class="flex justify-between items-center mb-0 cursor-pointer"
        @click="openRating = !openRating"
      >
        Rating
        <span class="w-3">
          <IconRight
            class="w-full transition-all duration-200"
            :class="openRating ? 'rotate-90' : ''"
          />
        </span>
      </h2>
      <div v-show="openRating" class="mt-2">
        <RangeInput />
      </div>
    </SidebarBox>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SidebarBox from "./SidebarBox.vue";
import RangeInput from "./RangeInput.vue";
import IconRight from "./icons/IconRight.vue";
import IconDown from "./icons/IconDown.vue";

defineProps({
  genres: {
    type: Array,
    required: true,
  },
  selectedGenres: {
    type: Array,
  },
});
const emit = defineEmits(["select-genre"]);
const selectGenre = (genre) => {
  emit("select-genre", genre);
};

const openGenres = ref(false);
const openRating = ref(false);
</script>
