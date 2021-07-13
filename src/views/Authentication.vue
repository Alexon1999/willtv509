<template>
  <div class="authentication">
    <div class="authentication__container">
      <form>
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label"
            >Mot de passe</label
          >
          <input type="password" class="form-control" v-model="password" />
        </div>

        <div class="d-flex flex-column">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            @click.prevent="login"
          >
            Se connecter
          </button>
          <button
            type="submit"
            class="btn btn-secondary"
            @click.prevent="register"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const error = ref(null);
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

    const register = () => {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
          router.push("/");
        })
        .catch((err) => alert(err.message));
    };

    return {
      error,
      email,
      password,
      login,
      register,
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
  padding: 3rem 1rem;
  border-radius: 15px;
  background-color: rgb(17, 23, 36);
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}
</style>