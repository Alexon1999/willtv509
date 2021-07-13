<template>
  <div class="user__modal" :class="{ active: active }">
    <div class="user__modal__container">
      {{ user?.email }}
      <button @click="se_deconnecter">Se Déconnecter</button>

      <button class="user__modal_close" @click="closeUserModal">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  props: {
    active: Boolean,
    closeUserModal: Function,
    user: null || Object,
  },

  setup(props) {
    const se_deconnecter = () => {
      auth.signOut();
      props.closeUserModal();
    };

    return {
      se_deconnecter,
    };
  },
};
</script>

<style>
.user__modal {
  position: fixed;
  top: 0;
  right: -800px;
  bottom: 0;
  max-width: 360px;
  width: 100%;
  background: rgb(23, 33, 44);
  z-index: 4;
  transition: all 0.5s ease;
}
.user__modal.active {
  right: 0;
}

.user__modal__container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.user__modal_close {
  position: absolute;
  bottom: 20px;
  left: 10px;
  width: 95%;
}

@media (max-width: 600px) {
  .user__modal {
    max-width: initial;
  }
}
</style>