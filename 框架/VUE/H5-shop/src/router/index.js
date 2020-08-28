import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Search from "../views/Search/Search.vue";
import Details from "../views/Details/Details.vue";
import ShopCart from "../views/ShopCart/ShopCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "主页",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      title: "搜索",
    },
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
