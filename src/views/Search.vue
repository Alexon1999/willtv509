<template>
  <div class="search__container">
    <div class="search__explorer">
      <h1 class="search__explorer__heading">Explorer</h1>

      <div class="search__explorer__container"></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Search",

  setup(props) {
    const router = useRouter();
    console.log(router);
  },
};
</script>

<style>
.search__container {
  min-height: 90vh;
  padding: 3rem;
}

.search__explorer__heading {
  color: #f9f9f9;
  font-size: 2.5rem;
  font-weight: 600;
}

.search__explorer__container {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}
</style>