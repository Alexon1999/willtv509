<template>
  <div class="home">
    <Carousel :data="new_content" />

    <Container :data="films" :titre="'Vissionnez en direct'" />
    <Container :data="films" :titre="'Films que vous pourrez aimer'" />
    <Container :data="films" :titre="'Series que vous pourrez aimer'" />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Home",
  components: { Carousel, Container },

  setup() {
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

      films: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
      ],
    };
  },
};
</script>

<style>
</style>
