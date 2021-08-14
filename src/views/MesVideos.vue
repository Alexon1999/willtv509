<template>
  <div class="mesvideos">
    <div class="mesvideos__container" v-if="client?.mesVideos.length > 0">
      <h1 class="mesvideos__header">Mes Vidéos</h1>
      <div class="mesvideos__possedes">
        <Card
          v-for="my_video in client.mesVideos"
          :key="my_video.id"
          :data="my_video.video"
          :style="{ margin: 0 }"
        />
      </div>
    </div>

    <div v-else class="mesvideos__novideos">
      <h1>Vous n'avez acheté aucunes vidéos</h1>
      <img src="../assets/watching.png" alt="watching" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import Card from "@/components/Card";

export default {
  name: "MesVideos",

  components: { Card },

  setup() {
    const store = useStore();

    return {
      client: computed(() => store.state.client),
    };
  },
};
</script>

<style>
.mesvideos {
  min-height: 80vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mesvideos__novideos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mesvideos__novideos h1 {
  margin-bottom: 1rem;
}

.mesvideos__novideos img {
  max-width: 400px;
  object-fit: contain;
}

.mesvideos__header {
  font-size: 2rem;
  text-align: center;
  margin: 0 0 2rem;
  padding: 0 0 8px;
  border-bottom: 5px solid rgb(153, 153, 153);
}

.mesvideos__possedes {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 600px) {
  .mesvideos__header {
    font-size: 1.5rem;
  }

  .mesvideos__novideos h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>