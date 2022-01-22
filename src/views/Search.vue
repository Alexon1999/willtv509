<template>
  <div class="search__container">
    <div class="search__explorer">
      <h1 class="search__explorer__heading">Explorer</h1>

      <Spinner v-if="loading" />
      <div v-else class="search__explorer__container">
        <Card v-for="data in datas" :data="data" :style="{ 'margin-left': 0 }" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import getVideosBySearchQuery from "@/composables/getVideosBySearchQuery";
import { watchEffect } from "vue";
import Spinner from "@/components/Spinner.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Search",

  components: { Spinner, Card },

  props: {
    query: String
  },

  setup(props) {
    const router = useRouter();
    const { datas, getDatas, loading } = getVideosBySearchQuery();
    console.log(router);

    watchEffect(() => {
      getDatas(props.query);
      console.log(props.query);
    })

    return {
      loading,
      datas
    }
  },
};
</script>

<style>
.search__container {
  min-height: 90vh;
  padding: 2.5rem 3.5rem;
}

.search__explorer__heading {
  color: #f9f9f9;
  font-size: 2.5rem;
  font-weight: 500;
}

.search__explorer__container {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 25px;
}

@media (max-width: 500px) {
  .search__container {
    padding: 1.8rem;
  }

  .search__explorer__heading {
    color: #f9f9f9;
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>