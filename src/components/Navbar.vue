<template>
  <div class="navbar">
    <div class="navbar__left_container">
      <div class="navbar__logo">
        <router-link to="/">
          <img srcset="../assets/logo.png" alt="willtv509" />
        </router-link>
      </div>

      <div class="navbar__links">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/about">A propos</router-link>
        <router-link to="/telecharger">Télécharger</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="navbar__parcourir">
        <div class="navbar__parcourir__container" @click="toggle_active_links">
          <p>Parcourir</p>
          <i class="fas fa-sort-down"></i>
        </div>
        <NavbarModal
          :active="active_navbar_links"
          :toggle_active_links="toggle_active_links"
          :close_active_links="close_active_links"
        />
      </div>
    </div>

    <div class="navbar__right_container">
      <form class="navbar__search" :class="{ active: active_searchbar }">
        <input
          type="text"
          placeholder="Title, people, genre"
          ref="search_input"
          @blur="closeSearchbar"
        />
        <button type="submit" @click.prevent="GoSearch">
          <i class="fas fa-search"></i>
        </button>
      </form>

      <div class="navbar__profile" @click="toggleUserModal">
        <div class="navbar__profile__avatar">
          <i class="fas fa-user-alt"></i>
        </div>
        <p v-if="haveUser" class="navbar__profile__user crop">
          {{ user.displayName || user.email }}
        </p>
        <p v-else>Se Connecter</p>
      </div>
    </div>
    <UserModal
      :active="active_user_modal"
      :closeUserModal="closeUserModal"
      :user="user"
    />
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useWindowSize } from "vue-window-size";

import NavbarModal from "@/components/NavbarModal.vue";
import UserModal from "@/components/UserModal.vue";

export default {
  name: "Navbar",
  components: { NavbarModal, UserModal },

  setup() {
    const store = useStore();
    const router = useRouter();
    const active_searchbar = ref(false);
    const active_navbar_links = ref(false);
    const active_user_modal = ref(false);
    const search_input = ref(null);

    const { width, height } = useWindowSize();

    const closeSearchbar = () => {
      active_searchbar.value = false;
    };

    const GoSearch = () => {
      if (width.value < 700) {
        active_searchbar.value = !active_searchbar.value;
      }
      if (search_input.value.value) {
        router.push({
          name: "Search",
          params: { word: search_input.value.value },
        });
      }
    };

    const toggle_active_links = () => {
      active_navbar_links.value = !active_navbar_links.value;
    };

    const close_active_links = () => {
      active_navbar_links.value = false;
    };

    const closeUserModal = () => {
      active_user_modal.value = false;
    };

    const toggleUserModal = () => {
      if (store.getters.haveUser) {
        active_user_modal.value = !active_user_modal.value;
      } else {
        router.push({ name: "Authentication" });
      }
    };

    return {
      active_searchbar,
      search_input,
      closeSearchbar,
      active_navbar_links,
      toggle_active_links,
      close_active_links,
      active_user_modal,
      toggleUserModal,
      closeUserModal,
      GoSearch,
      haveUser: computed(() => store.getters.haveUser),
      user: computed(() => store.state.user),
      router,
    };
  },
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px 40px 20px 50px;
  max-height: 10vh;
  background-color: #13202b;
}
.navbar__left_container {
  display: flex;
  align-items: center;
  /* width: 50%; */
}
.navbar__right_container {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.navbar__logo {
  margin-right: 40px;
}
.navbar__logo img {
  max-width: initial;
  width: 100px;
  object-fit: contain;
}

.navbar__links {
  margin-top: 5px;
  /* flex: 1; */
  display: flex;
  align-items: center;
}

.navbar__links a {
  text-decoration: none;
  color: rgb(202, 202, 202);
  font-weight: 600;
  font-size: 1rem;
  margin-right: 20px;
}

.navbar__links a.router-link-active,
.navbar__links a.router-link-exact-active {
  padding-bottom: 2px;
  border-bottom: 1px solid white;
}

.navbar__parcourir {
  display: none;
  margin-top: 5px;
  cursor: pointer;
}

.navbar__parcourir__container {
  display: flex;
  color: rgb(202, 202, 202);
}
.navbar__parcourir__container p {
  margin: 0 5px 0;
}
.navbar__parcourir__container i {
  margin: 1px 0px 2px 3px;
}
.navbar__search {
  display: flex;
  justify-content: center;
}

.navbar__search input,
.navbar__search button {
  border: none;
  padding: 7px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: rgb(214, 211, 211);
}

.navbar__search input {
  border-right: 2px solid black;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  /* visibility: collapse; */
}

.navbar__search input:focus {
  outline: none;
}
.navbar__search button {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.navbar__profile {
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
}

.navbar__profile p {
  color: #ccc;
  margin: 0;
}

.navbar__profile__avatar {
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ccc;
  padding: 10px;
  margin-right: 5px;
  color: #ccc;
}

.navbar__profile__avatar:hover {
  color: rgb(233, 198, 42);
  border-color: rgb(233, 198, 42);
}

@media (max-width: 1000px) {
  .navbar__links {
    display: none;
  }

  .navbar__parcourir {
    display: block;
  }
  .navbar__logo {
    margin-right: 10px;
  }

  .navbar__logo img {
    width: 75px;
  }
}

@media (max-width: 800px) {
  .navbar__profile p {
    font-size: 0.8rem;
  }
}

@media (max-width: 720px) {
  .navbar {
    padding: 20px;
  }
}

@media (max-width: 680px) {
  .navbar__profile p {
    display: none;
  }
  .navbar__search {
    position: relative;
  }
  .navbar__search button {
    background-color: #0c141b;
    border-radius: 3px;
    z-index: 1;
  }

  .navbar__search input {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    border: none;
    background-color: #0c141b;
    transition: all 0.5s ease;
  }

  .navbar__search.active input {
    width: 80vw;
  }

  .navbar__search.active input,
  .navbar__search.active button {
    border: 1px solid #ccc;
  }
}

@media (max-width: 550px) {
  .navbar__search.active input {
    width: 77vw;
  }
}

@media (max-width: 450px) {
  .navbar {
    padding: 20px 10px;
  }

  .navbar__logo img {
    width: 65px;
  }

  .navbar__parcourir {
    font-size: 0.8rem;
  }

  .navbar__profile p {
    display: none;
  }
}

@media (max-width: 350px) {
  .navbar__search.active input {
    width: 75vw;
  }
}
</style>