<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      <IconLeft />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <IconRight />
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import IconRight from "@/components/icons/IconRight.vue";
import IconLeft from "@/components/icons/IconLeft.vue";

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
});
const emit = defineEmits(["page-changed"]);
const { currentPage, totalItems, itemsPerPage } = toRefs(props);
const totalPages = computed(() => {
  return Math.ceil(totalItems.value / itemsPerPage.value);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit("page-changed", page);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: #f1f1f1;
  cursor: pointer;
  border-radius: 100%;
  width: 36px;
  height: 36px;
}

button.active {
  background-color: #0a91b9;
  color: white;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
