<template>
  <div class="detailsSwipe">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />

    <van-swipe :duration="700" :loop="false" class="detailsSwipeBanner" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image" /> -->
        <div class="detailsSwipeBannerDiv"></div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{images.length}}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import { NavBar, Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload);

export default {
  name: "detailsSwipe",

  props: {},

  data() {
    return {
      value: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg"
      ],
      current: 0
    };
  },

  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onTouch() {
      console.log("haha");
    }
  }
};
</script>

<style scoped lang="less">
.detailsSwipe {
  .detailsSwipeBanner {
    width: 100%;
    height: 3.75rem;

    img {
      width: 100%;
      height: 100%;
    }

    .custom-indicator {
      position: absolute;
      right: 0.21rem;
      bottom: 0.14rem;
      padding: 0.02rem 0.05rem;
      font-size: 0.12rem;
      color: rgba(254, 255, 255, 1);
      background: rgba(0, 0, 0, 1);
      opacity: 0.51;
    }

    .detailsSwipeBannerDiv {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 1);
    }
  }
}
</style>
