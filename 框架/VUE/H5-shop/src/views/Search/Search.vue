<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="onClickLeft" />
    <!-- 搜索框 -->
    <div class="searchMain">
      <van-search
        class="searchBox"
        v-model="value"
        show-action
        background="rgba(0,0,0,0)"
        shape="round"
        placeholder="搜索商品"
      />
    </div>
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import { Search, NavBar } from "vant";

Vue.use(Search).use(NavBar);

export default {
  name: "search",

  props: {},

  data() {
    return {
      value: ""
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.search {
  .searchMain {
    height: 0.45rem;
    background: rgba(230, 230, 230, 1);

    .searchBox {
      position: relative;
      padding: 0.04rem 0.14rem;
      .van-search__content.van-search__content--round {
        background: #fff;
      }
      .van-search__action {
        position: absolute;
        right: 0.2rem;
      }
    }
  }
}
</style>
