<template>
  <div
    class="Container"
    @mouseenter="show_arrows = true"
    @mouseleave="show_arrows = false"
  >
    <h2 class="Container__heading">{{ categorie.description }}</h2>

    <div
      v-if="windowWidth < 600 || data?.length <= nb_cards"
      class="Container__content"
    >
      <div v-for="card in data" :key="card.id">
        <Card :data="card" />
      </div>
    </div>

    <div
      v-else
      class="Container__wrapper"
      :style="{
        'grid-template-columns': `repeat(${videos.length}, 100%)`,
      }"
    >
      <div
        class="Container__wrapper_content"
        v-for="datas in videos"
        :key="datas.key"
        :id="`slider-${categorie.name}-${datas.key}`"
      >
        <div class="Container__content">
          <div v-for="card in datas.cards.data" :key="datas.key + card.id">
            <Card :data="card" />
          </div>
        </div>

        <div class="Container__content__arrows" :class="{ show: show_arrows }">
          <a
            v-if="datas.cards.prev !== null"
            :href="`#slider-${categorie.name}-${datas.cards.prev}`"
            class="arrow__left"
            @click="move"
            >{{ "<" }}</a
          >
          <a
            v-if="datas.cards.next !== null"
            :href="`#slider-${categorie.name}-${datas.cards.next}`"
            class="arrow__right"
            @click="move"
            >{{ ">" }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from "vue";
import Card from "@/components/Card.vue";

import { useWindowSize } from "vue-window-size";
import { disableScroll, enableScroll } from "@/utilities/scroll";

export default {
  name: "Container",
  props: {
    data: Array,
    categorie: Object,
  },
  components: {
    Card,
  },
  setup(props) {
    const { width, height } = useWindowSize();
    const nb_cards = ref(5);
    const videos = ref({});
    const show_arrows = ref(false);

    const move = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // console.dir(e.target);

      disableScroll();

      new Promise((resolve, reject) => {
        window.location.href = e.target.href;
        setTimeout(() => {
          const offsetTop =
            document.querySelector(e.target.hash)?.offsetTop - 70;

          // console.log({ href, offsetTop });

          window.scroll({
            top: offsetTop || 0,
            behavior: "smooth",
          });

          resolve();
        }, 1150);
      }).then(enableScroll);
    };

    const reformat_data = () => {
      if (props.data?.length > nb_cards.value && width.value > 600) {
        const nb_slides = props.data.length / nb_cards.value;
        Array.from({
          length: Math.ceil(nb_slides),
        }).map((_, i) => {
          let next = null;
          let prev = null;
          if (i === 0) {
            if (props.data.length > 1) {
              next = i + 1;
              prev = null;
            }
          } else if (i === Math.floor(nb_slides)) {
            next = null;
            prev = i - 1;
          } else {
            next = i + 1;
            prev = i - 1;
          }
          // console.log(i, Math.floor(nb_slides));
          videos.value[i] = {
            data: props.data.slice(
              i * nb_cards.value,
              i * nb_cards.value + nb_cards.value
            ),
            next,
            prev,
          };
        });
      }

      // console.log(
      //   Object.entries(videos.value).map(([k, v]) => ({
      //     key: k,
      //     cards: v,
      //   }))
      // );
    };

    const stopWatchEffect = watchEffect(() => {
      // console.log(width);
      if (width.value > 1800) {
        nb_cards.value = 7;
      } else if (width.value > 1600) {
        nb_cards.value = 6;
      } else if (width.value > 1400) {
        nb_cards.value = 5;
      } else if (width.value > 1200) {
        nb_cards.value = 4;
      } else if (width.value > 1000) {
        nb_cards.value = 5;
      } else if (width.value > 850) {
        nb_cards.value = 4;
      } else if (width.value < 850) {
        nb_cards.value = 3;
      } else if (width.value < 700) {
        nb_cards.value = 3;
      }
      reformat_data();
    });

    onUnmounted(() => {
      stopWatchEffect();
    });

    return {
      windowWidth: width,
      windowHeight: height,
      videos,
      nb_cards,
      move,
      show_arrows,
      videos: computed(() =>
        Object.entries(videos.value).map(([k, v]) => ({
          key: k,
          cards: v,
        }))
      ),
    };
  },
};
</script>

<style>
.Container {
  margin-bottom: 3rem;
}

.Container__wrapper {
  display: grid;
  /* grid-template-columns: repeat(3, 100%); */
  overflow: hidden;
  scroll-behavior: smooth;
}

.Container__wrapper_content {
  position: relative;
}

.Container__wrapper_content .arrow__left,
.Container__wrapper_content .arrow__right {
  position: absolute;
  height: calc(100% - 20px);
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
}
.Container__content__arrows {
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.Container__content__arrows.show {
  opacity: 1;
  pointer-events: all;
}
.Container__wrapper_content .arrow__left:hover,
.Container__wrapper_content .arrow__right:hover {
  background: rgba(0, 0, 0, 0.6);
}

.Container__wrapper_content .arrow__left {
  left: 0;
  top: 0;
}
.Container__wrapper_content .arrow__right {
  right: 0;
  top: 0;
}

.Container__content {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1.3rem;
  scroll-behavior: smooth;
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