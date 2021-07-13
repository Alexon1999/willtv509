<template>
  <div
    class="navbar__modal"
    :class="{ active: active }"
    @click="toggle_active_links"
  >
    <div class="navbar__modal__content">
      <div class="navbar__modal__content__links">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/telecharger">Télécharger</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    toggle_active_links: Function,
  },
};
</script>

<style>
.navbar__modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  cursor: default !important;
}

.navbar__modal.active {
  display: block;
}

.navbar__modal__content {
  position: absolute;
  padding: 0.6rem 1rem 1rem;
  top: 10vh;
  left: 16%;
  background: rgb(23, 33, 44);
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.15);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.navbar__modal__content__links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navbar__modal__content__links a:last-of-type {
  margin: 0;
}

.navbar__modal__content__links a {
  margin-bottom: 10px;
  text-decoration: none;
  color: rgb(202, 202, 202);
  font-weight: 600;
  font-size: 1rem;
}

.navbar__modal__content__links a.router-link-active,
.navbar__modal__content__links a.router-link-exact-active {
  padding-bottom: 2px;
  border-bottom: 1px solid white;
}
</style>