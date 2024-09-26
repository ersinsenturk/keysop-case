<template>
  <header class="bg-gray-200">
    <div class="container mx-auto px-4 xl:px-32 flex items-center">
      <RouterLink to="/" class="w-16 md:w-28">
        <img src="@/assets/logo.png" alt="" />
      </RouterLink>
      <div
        class="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg overflow-hidden"
      >
        <form @submit.prevent="search" class="flex">
          <input
            type="text"
            class="block p-2.5 sm:w-96 outline-none"
            placeholder="Search"
            ref="searchInput"
          />
          <button class="bg-transparent p-2">
            <IconSearch class="w-5 fill-gray-500 bg-transparent" />
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import IconSearch from "@/components/icons/IconSearch.vue";

const router = useRouter();
const searchInput = ref("");
const search = () => {
  router.push({ name: "search", params: { q: searchInput.value.value } });
  searchInput.value.value = "";
};
</script>

<style lang="scss" scoped></style>
