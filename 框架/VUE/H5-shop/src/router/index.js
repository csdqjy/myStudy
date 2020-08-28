import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/Search.vue"),
    meta: {
      title: "搜索",
    },
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/Details/Details.vue"),
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: () => import("@/views/ShopCart/ShopCart.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
