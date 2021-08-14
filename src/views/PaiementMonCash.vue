<template>
  <div class="paiement__success">
    <div class="paiement__success__container" v-if="haveInfo">
      <img src="../assets/success.svg" alt="success" />

      <div class="paiement__success__content">
        <div v-if="processing" class="spinner-border mx-auto" role="status">
          <span class="sr-only">Loading...</span>
        </div>

        <div v-if="info">
          <p v-html="info"></p>
          <p v-if="counter" class="text-info">{{ counter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import Api from "@/api";
import { useStore } from "vuex";

export default {
  components: {},
  name: "PaiementMonCash",

  setup() {
    const store = useStore();
    const router = useRouter();
    const processing = ref(false);
    const info = ref(null);
    const counter = ref(0);

    const processPayment = async () => {
      processing.value = true;

      const token = await Api.getMonCashAuthToken();

      const data = await Api.monCashPaymentSuccess({
        transaction_id: router.currentRoute.value.query.transactionId,
        customer_id: localStorage.customer_id,
        product_id: localStorage.product_id,
        token: "Bearer " + token.access_token,
      });

      processing.value = false;
      localStorage.removeItem("customer_id");
      localStorage.removeItem("product_id");

      if (data.payment === "success") {
        info.value =
          "Nous avons bien reçu votre commande, Vous allez être redirigé vers la page d'accueil dans ";
        counter.value = 10;

        store.dispatch("getClientFromDatabase");

        setInterval(() => {
          counter.value -= 1;

          if (counter.value === 0) {
            router.replace("/");
          }
        }, 1000);
      } else {
        info.value =
          "Il y a eu un problème dans votre paiement. Contactez-nous pour régler le souci, nous vous demanderons ce numéro <span class='text-info'>" +
          router.currentRoute.value.query.transactionId +
          "</span> et votre mode de paiement qui est <span class='text-info'>Mon Cash</span>";
      }
    };

    const haveInfo =
      router.currentRoute.value.query.transactionId &&
      localStorage.customer_id &&
      localStorage.product_id;

    if (haveInfo) {
      processPayment();
    } else {
      localStorage.removeItem("customer_id");
      localStorage.removeItem("product_id");
      router.back();
    }

    return {
      haveInfo,
      info,
      counter,
      processing,
    };
  },
};
</script>

<style>
.paiement__success {
  min-height: 80vh;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paiement__success__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.paiement__success img {
  max-width: 500px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 1.2rem;
}

.paiement__success p {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.8rem;
}
</style>