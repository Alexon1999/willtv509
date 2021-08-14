<template>
  <div class="details__container">
    <div v-if="details" class="details__content">
      <h1 class="details__content_heading">{{ details.title }}</h1>

      <p class="details__content_description">
        {{ details.description }}
      </p>
      <!-- :src="details.url" -->

      <div class="details__paiement" v-if="haveUser">
        <a
          class="details__paiement_button"
          v-if="!haveActiveSubscription && details?.prix > 0 && !possede"
          data-bs-toggle="modal"
          data-bs-target="#modeDePaiement"
        >
          <i class="fas fa-money-bill-alt"></i>
          <p>ACHETER</p>
        </a>

        <router-link
          to="/abonnement"
          class="details__paiement_button"
          v-if="!haveActiveSubscription && details?.prix > 0 && !possede"
        >
          <i class="fas fa-newspaper"></i>
          <p>S'ABONNER</p>
        </router-link>
      </div>
      <div v-else class="details__paiement">
        <router-link
          to="/authentication"
          class="details__paiement_button"
          v-if="details?.prix > 0"
        >
          <i class="fas fa-newspaper"></i>
          <p>Connectez-Vous d'abord</p>
        </router-link>
      </div>

      <div
        class="videoPlayer__container"
        v-if="!details?.prix || haveActiveSubscription || possede"
      >
        <VuePlayerVideo
          :src="
            details?.video_url ||
            'https://public.am.files.1drv.com/y4mddkerLte929Q26Hq1KqCVbpn17ZID6lEgY5GJhoKx_QoVzDZllbUyqKAbywmBN4ZVa_cVaMGK5ySANokXAyG8TU6jmy7HNfplX1SYnYDGVyTKvfDdAfFqburIhwi1CnbbmqhwDNeccsLT7xpDtlfWIif10k9E2CptUqqh0sbVhUauXJEdnzyGg1BTjBQKL6h2DEnUHO3fm-GidyYvSvVM8DG55GByR7M61JUUS5euaE/WhatsApp%20Video%202021-08-14%20at%2019.23.06.mp4?psid=1?'
          "
        ></VuePlayerVideo>
      </div>
    </div>
    <div v-else class="details__content">
      <div class="spinner-border mx-auto" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <Modal :id="'modeDePaiement'">
      <div class="modeDePaiement__content">
        <div class="modeDePaiement__content_card_container">
          <div v-if="loading.credit_card" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>

          <div
            v-else
            class="modeDePaiement__content_card_content"
            @click="goToStripePaymentCheckoutPage"
          >
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="60px"
              version="1.1"
              viewBox="0 0 60 60"
              width="60px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Credit Cards</title>
              <defs></defs>
              <g fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <g fill-rule="nonzero" id="ic_card">
                  <path
                    style="fill: #fff"
                    d="M0,13 C0,11.34314 1.34314,10 3,10 L57,10 C58.6569,10 60,11.34314 60,13 L60,16 L0,16 L0,13 Z M0,26 L60,26 L60,47 C60,48.6569 58.6569,50 57,50 L3,50 C1.34314,50 0,48.6569 0,47 L0,26 Z M7.5,41 C6.67157,41 6,41.6716 6,42.5 C6,43.3284 6.67157,44 7.5,44 L20.5,44 C21.3284,44 22,43.3284 22,42.5 C22,41.6716 21.3284,41 20.5,41 L7.5,41 Z"
                    id="iccard"
                  ></path>
                </g>
              </g>
            </svg>
            <p>Carte Bancaires</p>
          </div>
        </div>

        <div id="modeDePaiement__content_paypal"></div>

        <div class="modeDePaiement__content_moncash">
          <div
            v-if="loading.moncash"
            class="spinner-border text-danger"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
          <img
            v-else
            src="https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/resources/assets/images/MC_button.png"
            alt="MON Cash"
            @click="goToMonCashPaymentCheckoutPage"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
// https://www.npmjs.com/package/vue3-player-video
import VuePlayerVideo from "vue3-player-video";

import { useStore } from "vuex";
import { computed, ref, watchEffect, onMounted } from "@vue/runtime-core";
import { v4 as uuidv4 } from "uuid";

import Api from "@/api";
import getVideoDetails from "@/composables/getVideoDetails";
import Modal from "@/components/Modal";
export default {
  props: {
    id: String,
    categorie: String,
  },
  components: { VuePlayerVideo, Modal },

  setup(props) {
    const store = useStore();
    const { details, getData } = getVideoDetails(props.id);
    const possede = ref(false);
    const loading = ref({ moncash: false, credit_card: false });

    getData();
    window.scrollTo(0, 0);

    // computed properties return computedRef just like ref
    const client = computed(() => store.state.client);
    const haveActiveSubscription = computed(
      () => store.getters.haveActiveSubscription
    );

    const goToStripePaymentCheckoutPage = async () => {
      if (details.value && client.value) {
        loading.value.credit_card = true;
        const res = await Api.getPaymentCheckoutPage({
          origin: window.location.origin,
          cancel_url: window.location.href,
          success_url: window.location.href,
          product: details.value,
          customer: client.value,
        });

        loading.value.credit_card = false;

        window.location.href = res.url;
      }
    };

    const goToMonCashPaymentCheckoutPage = async () => {
      try {
        loading.value.moncash = true;
        const token = await Api.getMonCashAuthToken();

        localStorage.setItem("customer_id", client.value.id);
        localStorage.setItem("product_id", details.value.id);

        const payment = await Api.monCashCreatePayment({
          token: "Bearer " + token.access_token,
          amount: details.value?.prix || 0,
          orderId: uuidv4(),
          product: details.value,
          customer: client.value,
        });

        loading.value.moncash = false;

        window.location.href =
          "https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware" +
          "/Payment/Redirect?token=" +
          payment.payment_token.token;
      } catch (error) {
        loading.value = false;
        // console.log(error);
      }
    };

    watchEffect(() => {
      if (
        details.value &&
        client.value &&
        !haveActiveSubscription.value &&
        client.value.mesVideos.length > 0
      ) {
        // some: if the condition passed, it will break and return true else false
        possede.value = client.value.mesVideos.some(
          (my_video) => my_video.video.id === details.value.id
        );
      }
    });

    onMounted(() => {
      // https://developer.paypal.com/docs/business/checkout/set-up-standard-payments/
      // https://developer.paypal.com/docs/business/checkout/configure-payments/

      paypal
        .Buttons({
          // createOrder: function (data, actions) {
          //   return fetch("http://localhost:8081/api/v1/pay-pal/create-order", {
          //     method: "POST",
          //   })
          //     .then(function (res) {
          //       return res.json();
          //     })
          //     .then(function (data) {
          //       return data.id;
          //     });
          // },
          // onApprove: function (data, actions) {
          //   return fetch(
          //     "http://localhost:8081/api/v1/pay-pal/capture-order/" +
          //       data.orderID,
          //     {
          //       method: "POST",
          //     }
          //   ).then(function (res) {
          //     if (!res.ok) {
          //       alert("Something went wrong");
          //     }
          //   });
          // },

          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: details.value?.prix || 0,
                  },
                },
              ],
            });
          },

          onApprove: (data, actions) => {
            return actions.order
              .capture()
              .then((orderData) => {
                // Successful capture! For dev/demo purposes:
                // console.log(
                //   "Capture result",
                //   orderData,
                //   JSON.stringify(orderData, null, 2)
                // );
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                // alert(
                //   "Transaction " +
                //     transaction.status +
                //     ": " +
                //     transaction.id +
                //     "\n\nSee console for all available details"
                // );

                return Api.paypalSuccededPayment({
                  product: details.value,
                  customer: client.value,
                  transaction_id: transaction.id,
                });

                // When ready to go live, remove the alert and show a success message within this page. For example:
                // var element = document.getElementById('paypal-button-container');
                // element.innerHTML = '';
                // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
              })
              .then((res) => {
                window.location.reload();
              });
          },

          // onShippingChange: (data, actions) => {
          //   if (data.shipping_address.country_code !== "US") {
          //     return actions.reject();
          //   }
          //   return actions.resolve();
          // },

          onError: (err) => {
            console.error(err);
            // window.location.href = "/your-error-page-here";
          },

          style: {
            // shape: "pill",
            color: "gold",
            layout: "horizontal",
            label: "paypal",
            tagline: false,
          },

          shipping: {
            options: [],
          },

          // juste le bouton paypal
          // https://developer.paypal.com/docs/business/checkout/configure-payments/standalone-buttons/
          // fundingSource: paypal.FUNDING.PAYPAL,
        })
        .render("#modeDePaiement__content_paypal");
    });

    return {
      details,
      haveUser: computed(() => store.getters.haveUser),
      haveActiveSubscription,
      possede,
      goToStripePaymentCheckoutPage,
      goToMonCashPaymentCheckoutPage,
      loading,
    };
  },
};
</script>

<style>
.details__content {
  max-width: 1200px;
  min-height: 80vh;
  width: 100%;
  padding: 0 1rem 1rem;
  margin: 1.7rem auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.details__content_heading {
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 1rem;
}

.details__content_description {
  text-align: center;
}

.details__paiement {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.3rem;
}
.details__paiement_button:first-of-type {
  background: #3e92cc;
}
.details__paiement_button {
  background: #d48f0f;
  color: rgb(243, 241, 241);
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 1px;
  text-decoration: none;
  gap: 5px;
  cursor: pointer;
}
.details__paiement_button:hover {
  color: rgb(241, 240, 240);
}
.videoPlayer__container {
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
}

.vue3-player-video .bg-white {
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;
}

.modeDePaiement__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modeDePaiement__content_card_container {
  display: flex;
  justify-content: center;
}

.modeDePaiement__content_card_content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: rgb(31, 30, 30);
  cursor: pointer;
  color: rgb(236, 235, 235);
  color: rgb(236, 235, 235);
}

.modeDePaiement__content_card_content p {
  font-size: 1.2rem;
}

.modeDePaiement__content_card_content:hover {
  background: rgb(24, 23, 23);
}

.modeDePaiement__content_card_content svg {
  width: 50px;
  object-fit: contain;
}

.modeDePaiement__content_moncash {
  display: flex;
  justify-content: center;
}

.modeDePaiement__content_moncash img {
  cursor: pointer;
  height: 60px;
  object-fit: contain;
  transition: all 0.5s ease;
}

.modeDePaiement__content_moncash img:hover {
  transform: scale(1.1);
}
</style>