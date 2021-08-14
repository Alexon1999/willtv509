import { ref } from "vue";
import Api from "../api";

const getCategoriesVideos = () => {
  const datas = ref([]);

  const getDatas = async () => {
    const data = await Api.getCategoriesAndVideos();

    datas.value = data;
  };

  return {
    datas,
    getDatas,
  };
};

export default getCategoriesVideos;
