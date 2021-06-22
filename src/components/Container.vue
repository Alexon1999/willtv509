<template>
  <div class="Container">
    <h2 class="Container__heading">{{ titre }}</h2>

    <div class="Container__content">
      <div v-for="card in data" :key="card.id">
        <Card />
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
}

.Container__heading {
  margin: 0 0 1.5rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(216, 214, 214);
}
</style>