<template>
  <form>
    <div class="mb-4">
      <label for="username" class="form-label">Utilisateur</label>
      <input type="text" class="form-control" v-model="username" />
    </div>

    <div class="mb-4">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" v-model="email" />
    </div>
    <div class="mb-4">
      <label for="password" class="form-label">Mot de passe</label>
      <input type="password" class="form-control" v-model="password" />
    </div>

    <div class="d-flex flex-column">
      <button type="submit" class="btn btn-primary" @click.prevent="register">
        S'inscrire
      </button>
      <p class="mt-4 text-center">
        Si vous avez déjà un compte
        <span
          @click="changeMode('login')"
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
import { useStore } from "vuex";
import Api from "@/api";

export default {
  name: "SignUp",

  props: {
    changeMode: Function,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const username = ref("");

    const register = async () => {
      try {
        if (email.value && password.value && username.value) {
          const createdUser = await auth.createUserWithEmailAndPassword(
            email.value,
            password.value
          );

          await createdUser.user.updateProfile({
            displayName: username.value,
          });
          // console.log(createdUser);
          const data = await Api.saveClient({
            email: email.value,
            username: username.value,
          });
          store.commit("setClient", data);
          router.push("/");
        } else {
          throw new Error("les champs ne doivent pas être vide");
        }
      } catch (err) {
        alert(err.message);
      }
    };

    return {
      email,
      password,
      username,
      register,
    };
  },
};
</script>

<style>
</style>