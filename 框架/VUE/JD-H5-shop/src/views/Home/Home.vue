<template>
  <div class="home">
    <!-- 轮播图 -->
    <HomeSwipe />
    <!-- 宫格 -->
    <HomeGrid />
    <!-- 活动展示 -->
    <HomeActivity />
    <!-- 热销产品 -->
    <HomeHotSale />
  </div>
</template>

<script>
/* 引入各组件 */
import HomeSwipe from "./homeSwipe";
import HomeGrid from "./homeGrid";
import HomeActivity from "./homeActivity";
import HomeHotSale from "./homeHotSale";

export default {
  name: "Home",
  components: {
    HomeSwipe,
    HomeGrid,
    HomeActivity,
    HomeHotSale
  }
};
</script>

<style scoped lang="less">
.home {
  /* background: rgb(154, 155, 156); */
}
</style>