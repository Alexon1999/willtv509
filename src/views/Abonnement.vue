<template>
  <div class="abonnement">
    <div class="abonnement__container">
      <h1 class="abonnement__container__header">Choissisez votre plan</h1>
      <div class="abonnement__plans">
        <div
          v-for="plan in data"
          :key="plan.id"
          class="abonnement__plan__card"
          :class="{
            taked: plan.product.id === client?.monAbonnement?.product_id,
            disabled: haveActiveSubscription,
          }"
        >
          <img :src="plan.product.images[0]" alt="active options" />
          <h1 class="abonnement__plan__name">
            {{ plan.product.name }}
          </h1>
          <h2>${{ plan.unit_amount / 100 }}</h2>
          <p>{{ plan.product.description }}</p>

          <!-- :disabled="client?.monAbonnement?.status === 'active'" -->
          <button
            :disabled="haveActiveSubscription"
            class="abonnement__take_btn"
            @click="changeSelectedPlan(plan.id)"
          >
            {{ !!plan.taked ? "Pris" : "Prendre" }}
          </button>
        </div>
      </div>

      <div v-show="haveActiveSubscription" class="abonnement__info">
        Pour tout changement, rendez vous dans le menu puis Mes informations
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

import Api from "@/api";
import { useStore } from "vuex";

export default {
  name: "Abonnement",

  setup() {
    const store = useStore();
    const data = ref([]);

    // computed properties return computedRef just like ref
    const client = computed(() => store.state.client);
    const haveActiveSubscription = computed(
      () => store.getters.haveActiveSubscription
    );

    const getProductPlans = async () => {
      const res = await Api.getPlans();

      data.value = res.data;
    };

    getProductPlans();

    const changeSelectedPlan = async (price_id) => {
      if (client.value) {
        if (haveActiveSubscription.value) {
          alert("Vous avez déjà choisi un plan");
        } else {
          const res = await Api.getSubscriptionCheckoutPage({
            price_id,
            origin: window.location.origin,
            cancel_url: window.location.origin + "/abonnement",
            success_url: window.location.origin + "/abonnement",
            customer: client.value,
          });
          window.location.href = res.url;
        }
      } else {
        alert("Connectez-Vous pour pouvoir bénéficier pleinement notre site");
      }
    };

    return {
      data,
      client,
      changeSelectedPlan,
      haveActiveSubscription,
    };
  },
};
</script>

<style>
.abonnement {
  min-height: 80vh;
  margin: 3rem 0 0;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.abonnement__container__header {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2rem;
}

.abonnement__plans {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.abonnement__plan__card {
  padding: 2rem;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  width: 300px;
  cursor: pointer;
}
.abonnement__plan__card.taked {
  border: 1px solid rgb(120, 255, 120);
  opacity: 1 !important;
}

.abonnement__plan__card.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.abonnement__plan__card img {
  width: 100px;
  object-fit: contain;
}

.abonnement__plan__name {
  margin-top: 16px;
  font-size: 1.5rem;
}

.abonnement__take_btn {
  background: transparent;
  padding: 5px 8px;
  border: 1px solid #ccc;
  color: rgb(129, 129, 129);
  margin-top: 1rem;
  font-weight: 600;
}

.abonnement__plan__card:hover .abonnement__take_btn {
  color: rgb(207, 207, 207);
}

.abonnement__plan__card.disabled:hover .abonnement__take_btn {
  color: rgb(129, 129, 129);
}
.abonnement__plan__card.taked .abonnement__take_btn {
  color: rgb(207, 207, 207);
}
.abonnement__plan__card.taked:hover .abonnement__take_btn {
  color: rgb(207, 207, 207);
}

.abonnement__plan__card.disabled .abonnement__take_btn {
  cursor: not-allowed;
}

.abonnement__info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0.3rem;
  background-color: rgb(240, 202, 32);
  color: rgb(36, 36, 36);
  font-weight: 600;
}

@media only screen and (max-width: 800px), only screen and (hover: none) {
  .abonnement__take_btn {
    color: rgb(207, 207, 207);
  }
  .abonnement__take_btn:hover {
    color: rgb(207, 207, 207) !important;
  }
}
</style>