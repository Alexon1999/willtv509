import { ref } from "vue";
import Api from "../api";

const getVideoDetails = (id) => {
  const details = ref(null);

  const getData = async () => {
    const data = await Api.getDetailsVideo(id);

    details.value = data;
  };

  return { details, getData };
};

export default getVideoDetails;
