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

  const useFetchAll = async (urls) => {
    loading.value = true;
    try {
      const promises = urls.map((url) => fetch(url));
      const responses = await Promise.all(promises);
      data.value = await Promise.all(
        responses.map((response) => response.json())
      );
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
    useFetchAll,
  };
};
