<template>
  <div class="homeGrid">
    <van-grid :border="true" :column-num="4" square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem,Image } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

export default {
  name: "homeGrid",
  props: {},
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped lang="less">
</style>