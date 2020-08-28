<template>
  <div class="details">
    <!-- 轮播图 -->
    <DetailsSwipe />
    <!-- 基本信息和选项 -->
    <DetailsDescribe />
    <!-- 商品详情 -->
    <DetailsInfo />
    <!-- 购买导航 -->
    <DetailsBuyNav />
  </div>
</template>

<script>
/* 引入各组件 */
import DetailsSwipe from "./detailsSwipe";
import DetailsDescribe from "./detailsDescribe";
import DetailsInfo from "./detailsInfo";
import DetailsBuyNav from "./detailsBuyNav";

export default {
  name: "Details",
  components: {
    DetailsSwipe,
    DetailsDescribe,
    DetailsInfo,
    DetailsBuyNav
  }
};
</script>

<style scoped lang="less">
</style>