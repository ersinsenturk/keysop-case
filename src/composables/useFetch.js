import { ref } from "vue";

export const useAppFetch = () => {
  const data = ref();
  const loading = ref();
  const error = ref();

  const useFetch = async (url) => {
    loading.value = true;
    try {
      const res = await fetch(url);
      const json = await res.json();
      data.value = json;
      loading.value = false;
    } catch (err) {
      error.value = err.toString() || "Something went wrong";
      loading.value = false;
    }
  };
  return {
    data,
    loading,
    error,
    useFetch,
  };
};
