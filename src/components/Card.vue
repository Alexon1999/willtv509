<template>
  <!-- https://codepen.io/faelplg/pen/MWwxred -->
  <!-- https://codepen.io/jorgemoovein-the-bashful/pen/rNOXXxb -->
  <div
    class="card"
    ref="card"
    tabindex="0"
    data-bs-toggle="popover"
    data-bs-trigger="hover focus"
    data-bs-placement="auto"
    :title="data.title"
    :data-bs-content="data.description || '-'"
  >
    <router-link
      class="card__image_container"
      :to="{
        name: 'Details',
        params: { id: data.id, categorie: data.categorie.name },
      }"
      ><img
        :src="data.image_url || 'https://i.ibb.co/ThPNnzM/blade-runner.jpg'"
    /></router-link>

    <div class="card__prix">
      <!-- :class="{ gratuit: data.prix === 0, payant: data.prix > 0 }" -->

      <!-- <div class="card__prix_round"></div>
      {{ data.prix > 0 ? "payant" : "gratuit" }} -->
      <img v-if="data.prix > 0" src="../assets/dollar.svg" />
      <img v-else src="../assets/gratuit.svg" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "Card",
  props: { data: Object },
  setup() {
    const card = ref(null);
    const popover = ref(null);

    onMounted(() => {
      popover.value = new bootstrap.Popover(card.value);
    });

    onUnmounted(() => {
      popover.value.hide();
    });

    return {
      card,
    };
  },
};
</script>

<style>
.card {
  margin: 0 2rem;
  width: 200px;
  min-height: 200px;
  height: 260px;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
  border: none;
  position: relative;
}

.card__prix {
  position: absolute;
  top: 0;
  left: 0;
  /* height: 18px; */
  /* min-width: 37%; */
  height: 24px;
  font-size: 0.7rem;
  font-weight: 550;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  color: var(--bg-color);
  /* border: 2px solid var(--bg-color); */
}

.card__prix img {
  height: 24px;
  width: auto;
}

.card__prix.gratuit {
  --bg-color: rgb(26, 240, 26);
}
.card__prix.payant {
  --bg-color: rgb(221, 218, 31);
}

.card__prix_round {
  width: 6px;
  height: 6px;
  background-color: var(--bg-color);
  border-radius: 50%;
}

.popover-header {
  color: rgb(29, 28, 28);
}

.card__image_container {
  display: block;
  width: 100%;
  height: 100%;
}
.card__image_container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

@media (max-width: 1200px) {
  .card {
    height: 220px;
    width: 170px;
    margin: 0 1.2rem 0 1.2rem;
  }
}

@media only screen and (max-width: 600px), only screen and (hover: none) {
  .card {
    height: 200px;
    width: 150px;
  }

  .popover {
    display: none;
  }
}
</style>