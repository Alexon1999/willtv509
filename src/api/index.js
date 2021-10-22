import axios from "../axios";

const Api = {
  async getCategories() {
    const { data } = await axios.get("api/categories/");
    return data;
  },

  async getVideosByCategorie(categorie) {
    const { data } = await axios.get(`api/categories/${categorie.id}/`);
    return data;
  },

  async getCategoriesAndVideos() {
    const { data } = await axios.get("api/categories-videos/");
    return data;
  },

  async getDetailsVideo(id) {
    const { data } = await axios.get(`api/videos/${id}/`);
    return data;
  },

  async saveClient(client) {
    const { data } = await axios.post("api/create-client/", client);
    return data;
  },

  async getClient(client) {
    try {
      const { data } = await axios.post("api/get-client/", client);
      return [data, null];
    } catch (error) {
      // console.log({error});
      return [null, error];
    }
  },

  async getPlans() {
    const { data } = await axios.get("api/get-plans/");
    return data;
  },

  async getSubscriptionCheckoutPage(planData) {
    const { data } = await axios.post(
      "api/get-subscription-checkout-session/",
      planData
    );
    return data;
  },

  async getPaymentCheckoutPage(Data) {
    const { data } = await axios.post(
      "api/get-payment-checkout-session/",
      Data
    );
    return data;
  },

  async paypalSuccededPayment(Data) {
    const { data } = await axios.post("api/paypal-succeded-payment/", Data);
    return data;
  },

  async getCustomerPortalPage(client) {
    const { data } = await axios.post("api/get-customer-portal/", client);
    return data;
  },

  async getMonCashAuthToken() {
    const { data } = await axios.get("api/moncash-auth-token/");
    return data;
  },

  async monCashCreatePayment(Data) {
    const { data } = await axios.post("api/moncash-create-payment/", Data);
    return data;
  },

  async monCashPaymentSuccess(Data) {
    const { data } = await axios.post("api/moncash-success-payment/", Data);
    return data;
  },
};

export default Api;
