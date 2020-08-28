<template>
  <div class="detailsInfo">
    <header class="detailsInfoHeader">商品详情</header>
    <main class="detailsInfoMain"></main>
  </div>
</template>

<script>
/* 引入vant */

export default {
  name: "detailsInfo",

  props: {},

  data() {
    return {
      value: ""
    };
  },

  methods: {}
};
</script>

<style scoped lang="less">
.detailsInfo {
  .detailsInfoHeader {
    width: 100%;
    height: 0.5rem;
    font-size: 0.14rem;
    font-weight: 500;
    text-align: center;
    color: rgba(51, 51, 51, 1);
    line-height: 0.5rem;
  }

  .detailsInfoMain {
    height: 2rem;
    background: rgba(51, 51, 51, 1);
  }
}
</style>
