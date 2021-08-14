<template>
  <div class="home">
    <Carousel :data="new_content" />

    <!-- <Container :data="films" :titre="'Vissionnez en direct'" /> -->

    <Container
      v-for="categorie in datas"
      :key="categorie.id"
      :data="categorie.videos"
      :categorie="{
        name: categorie.name,
        id: categorie.id,
        description: categorie.description,
      }"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Container from "@/components/Container.vue";
import getCategoriesVideos from "@/composables/getCategoriesVideos";

export default {
  name: "Home",
  components: { Carousel, Container },

  setup() {
    const { datas, getDatas } = getCategoriesVideos();

    getDatas();

    return {
      new_content: [
        {
          active: true,
          id: 1,
          img_src:
            "https://m.media-amazon.com/images/S/sonata-images-prod/FR_Hero_Without_Remorse_Evergreen/12016d59-fe2c-407e-b357-969d064a5d03._UR3000,600_SX1500_FMjpg_.jpeg",
        },
        {
          id: 2,
          img_src:
            "https://m.media-amazon.com/images/S/sonata-images-prod/FR_Hero_Le_Loup_De_Wall_Street_Evergreen/c723f898-116b-455b-88e2-54cac667e251._UR3000,600_SX1500_FMjpg_.jpeg",
        },
      ],

      datas,
    };
  },
};
</script>

<style>
</style>
