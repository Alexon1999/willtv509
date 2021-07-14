<template>
  <div class="Container">
    <h2 class="Container__heading">{{ titre }}</h2>

    <div class="Container__content">
      <div v-for="card in data" :key="card.id">
        <Card :data="card" :categorie="categorie" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Container",
  props: {
    data: Array,
    titre: String,
    categorie: String,
  },
  components: {
    Card,
  },
};
</script>

<style>
.Container {
  margin-bottom: 3rem;
}
.Container__content {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1.3rem;
}

.Container__heading {
  margin: 0 0 1.5rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(216, 214, 214);
}

.Container__content::-webkit-scrollbar {
  height: 6px;
  -webkit-appearance: none;
  width: 7px;
  margin-right: 4px;
}

.Container__content::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 9px;
  box-shadow: 0 0 1px rgb(0 0 0 / 40%);
}

@media (max-width: 750px) {
  .Container__heading {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .Container__content {
    padding-bottom: 0;
  }

  .Container__content::-webkit-scrollbar {
    display: none;
  }

  .Container__heading {
    margin: 0 0 1.5rem 1rem;
  }
}

@media (max-width: 500px) {
  .Container__heading {
    font-size: 1rem;
  }
}
</style>