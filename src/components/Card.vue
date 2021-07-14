<template>
  <!-- https://codepen.io/faelplg/pen/MWwxred -->
  <!-- https://codepen.io/jorgemoovein-the-bashful/pen/rNOXXxb -->
  <div class="card">
    <router-link
      class="card__image_container"
      :to="{ name: 'Details', params: { id: data.id, categorie } }"
      ><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
    /></router-link>

    <div class="card-desc">
      <p>{{ data.description }}</p>
      <router-link
        :to="{ name: 'Details', params: { id: data.id, categorie } }"
        class="card__voir_details_link"
        >voir détails <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { data: Object, categorie: String },
};
</script>

<style>
.card {
  margin: 0 2rem;
  position: relative;
  width: 200px;
  min-height: 200px;
  height: 260px;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  border: none;
}
.card__image_container {
  display: block;
  width: 100%;
  height: 100%;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 0.75rem;
  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.8s ease;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.card-desc::-webkit-scrollbar {
  height: 6px;
  -webkit-appearance: none;
  width: 4px;
  margin-right: 4px;
}

.card-desc::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 9px;
  box-shadow: 0 0 1px rgb(0 0 0 / 40%);
}

.card__voir_details_link {
  display: block;
  margin: 1rem auto 0.5rem;
  text-align: center;
  color: rgb(50, 128, 245);
  text-decoration: none;
  cursor: pointer;
}

.card__voir_details_link:hover {
  color: rgb(22, 191, 243);
}

.card__voir_details_link i {
  margin-left: 5px;
}

@media (min-width: 601px) {
  .card__image_container {
    pointer-events: none;
  }
}

@media only screen and (max-width: 600px), only screen and (hover: none) {
  .card-desc {
    display: none;
  }

  .card {
    height: 200px;
    width: 150px;
    margin: 0 0.5rem 0 1rem;
  }
}
</style>