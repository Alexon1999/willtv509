import { ref } from "vue";
import { db } from "@/firebase";

const getVideoDetails = (collectionName, id) => {
  const data = ref(null);

  const getData = async () => {
    const doc = await db
      .collection(collectionName)
      .doc(id)
      .get();

    data.value = { id: doc.id, ...doc.data() };
  };

  return { data, getData };
};

export default getVideoDetails;
