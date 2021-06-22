<template>
  <div class="carousel__container">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="post in data"
          :key="post.id"
          :class="{ active: post.active, 'carousel-item': post }"
          data-bs-interval="5000"
        >
          <div class="carousel-item__container">
            <img :src="post.img_src" />
          </div>
        </div>
        <!-- <div class="carousel-item active" data-bs-interval="5000">
          <div class="carousel-item__container">
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/FR_Hero_Without_Remorse_Evergreen/12016d59-fe2c-407e-b357-969d064a5d03._UR3000,600_SX1500_FMjpg_.jpeg"
            />
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <div class="carousel-item__container">
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/FR_Hero_Le_Loup_De_Wall_Street_Evergreen/c723f898-116b-455b-88e2-54cac667e251._UR3000,600_SX1500_FMjpg_.jpeg"
            />
          </div>
        </div> -->
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Carousel",
  components: {},
  props: {
    data: Array,
  },
};
</script>

<style>
.carousel__container {
  /* max-width: 1500px; */
  /* margin: auto; */
  height: 50vh;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0)
  ) !important;
  z-index: -1;
  margin-bottom: 3rem;
  /* margin-bottom: -230px !important; */
}

#myCarousel {
  width: 100%;
  height: 100%;
}
.carousel__container .carousel-item__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-inner {
  height: 50vh;
}
.carousel__container .carousel-item__container img {
  object-fit: cover;
  /* object-fit: contain; */
  height: 50vh;
  width: 80%;
}
</style>
