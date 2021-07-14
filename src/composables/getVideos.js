import { reactive } from "vue";
import { db } from "../firebase";

const categories = ["films", "series", "clips", "events"];

const getVideos = () => {
  const videos = reactive({
    films: [],
    series: [],
    clips: [],
    events: [],
  });

  const getData = async (collectionName, data) => {
    const collection = await db.collection(collectionName).get();

    data[collectionName] = collection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const getDatas = () => {
    categories.forEach((categ) => {
      getData(categ, videos);
    });
  };

  return {
    videos,
    getDatas,
  };
};

export default getVideos;
