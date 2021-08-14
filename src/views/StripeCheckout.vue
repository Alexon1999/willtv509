<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="stripe_public_key"
      :session-id="sessionId"
    />
  </div>
</template>

<script>
// import { StripeCheckout } from "@vue-stripe/vue-stripe";

import { stripe_public_key } from "@/config";
import Api from "@/api";
import { ref } from "@vue/reactivity";

export default {
  components: {
    StripeCheckout,
  },

  props: {
    price_id: String,
  },

  setup(props) {
    const checkoutRef = ref(null);
    const sessionId = ref(null);

    const changeSelectedPlan = async () => {
      const res = await Api.getSubscriptionCheckoutPage({
        price_id: props.price_id,
      });
      sessionId.value = res.id;
      // checkoutRef.value.redirectToCheckout();
      window.location.href = res.url;
    };

    changeSelectedPlan();

    return {
      stripe_public_key,
      checkoutRef,
      sessionId,
      changeSelectedPlan,
    };
  },
};
</script>