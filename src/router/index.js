import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Telecharger from "../views/Telechargement.vue";
import Details from "../views/Details.vue";
import Authentication from "../views/Authentication.vue";
import Abonnement from "../views/Abonnement";
import PaiementMonCash from "../views/PaiementMonCash";
import MesVideos from "../views/MesVideos";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/telecharger",
    name: "Telecharger",
    component: Telecharger,
  },
  {
    path: "/details/:categorie/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
  },
  {
    path: "/abonnement",
    name: "Abonnement",
    component: Abonnement,
  },
  {
    path: "/payment/moncash",
    name: "PaiementMonCash",
    component: PaiementMonCash,
  },
  // {
  //   path: "/stripe-checkout/:price_id",
  //   name: "StripeCheckout",
  //   component: StripeCheckout,
  //   props: true,
  // },
  {
    path: "/mesvideos",
    name: "MesVideos",
    component: MesVideos,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
