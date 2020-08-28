<template>
  <div class="shopCart">
    <ShopCartCard />
  </div>
</template>

<script>
/* 引入各组件 */
import ShopCartCard from "./shopCartCard";

export default {
  name: "ShopCart",
  components: { ShopCartCard }
};
</script>

<style scoped lang="less">
.shopCart {
}
</style>