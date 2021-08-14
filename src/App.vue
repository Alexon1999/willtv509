<template>
  <Navbar />

  <router-view />

  <Footer />
</template>

<script>
import { useStore } from "vuex";
import { onMounted, onUnmounted, ref } from "vue";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { auth } from "@/firebase";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },

  setup() {
    const store = useStore();
    const unsubscribeEvent = ref(new Function());

    onMounted(() => {
      const unSubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // user logged in
          // console.log(authUser);
          store.commit("setUser", authUser);
          store.dispatch("getClientFromDatabase");
        } else {
          // user not loggged in
          store.commit("setUser", null);
          store.commit("setClient", null);
        }
      });
      unsubscribeEvent.value = unSubscribe;
    });

    onUnmounted(() => {
      unsubscribeEvent.value();
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #0f171e;
  color: rgb(216, 214, 214);
}

.crop {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100px;
}
</style>
