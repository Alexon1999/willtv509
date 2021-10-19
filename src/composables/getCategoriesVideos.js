import { ref } from "vue";
import Api from "../api";

const getCategoriesVideos = () => {
  const datas = ref([]);
  const loading = ref(false);

  const getDatas = async () => {
    loading.value = true;
    const data = await Api.getCategoriesAndVideos();
    loading.value = false;

    datas.value = data;
  };

  return {
    datas,
    getDatas,
    loading,
  };
};

export default getCategoriesVideos;
