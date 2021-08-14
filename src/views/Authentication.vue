<template>
  <div class="authentication">
    <div class="authentication__container">
      <Login v-if="mode === 'login'" :changeMode="changeMode" />
      <SignUp v-if="mode === 'signup'" :changeMode="changeMode" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  components: { Login, SignUp },

  setup() {
    const mode = ref("login");

    const changeMode = (type) => {
      mode.value = type;
    };

    return {
      mode,
      changeMode,
    };
  },
};
</script>

<style>
.authentication {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}

.authentication__container {
  max-width: 500px;
  width: 100%;
  padding: 3rem 1rem 1rem;
  border-radius: 15px;
  background-color: rgb(17, 23, 36);
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}
</style>