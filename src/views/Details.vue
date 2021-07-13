<template>
  <div class="details_container">
    <h1>{{ id }}</h1>
    <div class="details__content"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
};
</script>

<style>
</style>