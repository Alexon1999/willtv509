<template>
  <div class="user__modal" :class="{ active: active }">
    <div class="user__modal__container">
      <p class="user__modal__container__email crop">{{ user?.email }}</p>

      <div class="user__modal__container__middle_btns">
        <button @click="goToSubscription">Mon Abonnement</button>
        <button @click="redirectToPortal">Mes informations</button>
        <button @click="redirectToMesVideos">Mes Vidéos</button>
        <button @click="se_deconnecter" class="btn__sedeconnecter">
          Se Déconnecter
        </button>
      </div>

      <button class="user__modal_close" @click="closeUserModal">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";

import Api from "@/api";
import { useRouter } from "vue-router";

export default {
  name: "UserModal",

  props: {
    active: Boolean,
    closeUserModal: Function,
    user: null || Object,
  },

  setup(props) {
    const router = useRouter();

    const redirectToMesVideos = () => {
      router.push("/mesvideos");
      props.closeUserModal();
    };

    const se_deconnecter = () => {
      auth.signOut();
      props.closeUserModal();
    };

    const goToSubscription = () => {
      router.push("/abonnement");
      props.closeUserModal();
    };

    const redirectToPortal = async () => {
      if (props.user) {
        props.closeUserModal();

        const user = props.user;
        const client = await Api.getClient({
          email: user.email,
          username: user.displayName,
        });

        const res = await Api.getCustomerPortalPage({
          customer: client,
          origin: window.location.origin,
        });

        window.location.href = res.url;
      }
    };

    return {
      se_deconnecter,
      redirectToPortal,
      redirectToMesVideos,
      goToSubscription,
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
  border-left: 1px solid rgb(61, 56, 56);
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

.user__modal__container__email {
  width: 100% !important;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.user__modal__container__middle_btns {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.user__modal__container__middle_btns button {
  border: none;
  background-color: rgb(240, 202, 32);
  color: rgb(36, 36, 36);
  padding: 0.5rem 0;
  font-weight: 600;
}

.user__modal__container__middle_btns button.btn__sedeconnecter {
  font-weight: normal;
  background-color: rgb(231, 49, 17);
  color: rgb(255, 255, 255);
}

.user__modal_close {
  position: absolute;
  bottom: 20px;
  left: 10px;
  width: 95%;
}

.user__modal_close:hover {
  background: #ccc;
}

@media (max-width: 600px) {
  .user__modal {
    max-width: initial;
  }
}
</style>