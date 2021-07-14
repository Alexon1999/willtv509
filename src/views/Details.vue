<template>
  <div class="details_container">
    <div v-if="data" class="details__content">
      <h1 class="details__content_heading">{{ data.titre }}</h1>
      <p class="details__content_description">
        {{ data.description }}
      </p>

      <!-- :src="data.url" -->

      <div class="videoPlayer__container">
        <VuePlayerVideo
          src="https://icecube-us-846.icedrive.io/download?p=Z6VsmL89dXlF7MXBG4IA95h.JouIAB0yz2tsEiHjV_xW_P.6bGZp1z_LB3nMC._JfuhnLchZ6Z7apJcCA4w.ndhjKb2j0M8RLjM36Na.yBhZPhp2Ddhvjz9wbyOzRGqiqgY53Afg7SspLlWcGDP8MF6eo5_tJ49nLpkPutzshyc45lO75mcm02fGU1rme8G48Or2SpZ7S9FFhj36K_nKBM5.zEAu4Yl1rnRSc9aXDbmL3qFWJ6yq3WKGNuaHaBpJ57Cx8IQowyslDy99ZmH5_A--"
        ></VuePlayerVideo>
      </div>
    </div>
  </div>
</template>

<script>
// https://www.npmjs.com/package/vue3-player-video
import VuePlayerVideo from "vue3-player-video";

import getVideoDetails from "@/composables/getVideoDetails";

export default {
  props: {
    id: String,
    categorie: String,
  },

  components: { VuePlayerVideo },

  setup(props) {
    const { data, getData } = getVideoDetails(props.categorie, props.id);

    getData();
    window.scrollTo(0, 0);

    return {
      data,
    };
  },
};
</script>

<style>
.details__content {
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem 1rem;
  margin: 1.7rem auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.details__content_heading {
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 1rem;
}

.details__content_description {
  text-align: center;
}

.videoPlayer__container {
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
}

.vue3-player-video .bg-white {
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;
}
</style>