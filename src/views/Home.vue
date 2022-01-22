<template>
  <div class="home">
    <Carousel :data="new_content" />

    <!-- <Container :data="films" :titre="'Vissionnez en direct'" /> -->

    <div class="home__container">
      <Spinner :loading="loading" />
      <Container
        v-if="!loading"
        v-for="categorie in datas"
        :key="categorie.id"
        :data="categorie.videos"
        :categorie="{
          name: categorie.name,
          id: categorie.id,
          description: categorie.description
        }"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Container from "@/components/Container.vue";
import Spinner from "@/components/Spinner.vue";
import getCategoriesVideos from "@/composables/getCategoriesVideos";
import free_subscription from "@/assets/free_subscription.jpeg";
import presentation from "@/assets/presentation.jpeg";

export default {
  name: "Home",
  components: { Carousel, Container, Spinner },

  setup() {
    const { datas, getDatas, loading } = getCategoriesVideos();

    getDatas();

    return {
      new_content: [
        {
          active: true,
          id: 1,
          img_src: free_subscription,
        },
        {
          id: 2,
          img_src: presentation,
        },
      ],

      datas,
      loading,
    };
  },
};
</script>

<style >
.home__container {
  min-height: 50vh;
}
</style>
