import { ref } from "vue";
import Api from "../api";

const getVideosBySearchQuery = () => {
  const datas = ref([]);
  const loading = ref(false);

  const getDatas = async (SearchQuery) => {
    loading.value = true;
    const data = await Api.getVideosBySearchQuery(SearchQuery);
    loading.value = false;

    datas.value = data;
  };

  return {
    datas,
    getDatas,
    loading,
  };
};

export default getVideosBySearchQuery;
