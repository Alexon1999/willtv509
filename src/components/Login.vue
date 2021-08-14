<template>
  <form>
    <div class="mb-4">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" v-model="email" />
    </div>
    <div class="mb-4">
      <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
      <input type="password" class="form-control" v-model="password" />
    </div>

    <div class="d-flex flex-column">
      <button type="submit" class="btn btn-primary" @click.prevent="login">
        Se connecter
      </button>
      <p class="mt-4 text-center">
        Si vous n'avez pas de compte
        <span
          @click="changeMode('signup')"
          class="text-primary"
          :style="{ cursor: 'pointer' }"
          >Cliquez ici</span
        >
      </p>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  props: {
    changeMode: Function,
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const login = () => {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
          // logged in succesfully
          router.push("/");
        })
        .catch((err) => alert(err.message));
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style>
</style>