<template>
  <div class="homeSwipeBox">
    <div class="homeSwipeBoxBg">
      <!-- 搜索框 -->
      <van-search
        class="homeSwipeSearch"
        v-model="value"
        background="rgba(0,0,0,0)"
        shape="round"
        placeholder="搜索商品"
        @focus="onSearchFocus"
      />
      <!-- 轮播图 -->
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            :key="banner"
            v-for="banner in banners"
          >
            <img
              class="swiper-slide-img"
              :src="banner"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);

/* 引入swiper */
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "homeSwipe",

  props: {},

  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  data() {
    return {
      value: "",
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: true,
        observer: true,
      },
      banners: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
    };
  },

  mounted() {},

  methods: {
    onSearchFocus() {
      this.$router.push("/search");
    },
  },

  computed: {
    /* swiper() {
      return this.$refs.mySwiper;
    } */
  },
};
</script>

<style scoped lang="less">
.homeSwipeBox {
  width: 100%;
  height: 2.3rem;

  .homeSwipeBoxBg {
    width: 100%;
    height: 1.65rem;
    background: linear-gradient(
      180deg,
      rgba(252, 137, 88, 1) 0%,
      rgba(253, 68, 68, 1) 100%
    );

    .homeSwipeSearch {
      padding: 0.15rem 0.07rem;
    }

    .swiper-slide {
      width: 100%;
      height: 1.49rem;
      margin: auto;
      background: rgba(200, 200, 200, 1);

      .swiper-slide-img {
        display: block;
        width: 3.08rem;
        height: 1.49rem;
        margin: 0 auto;
      }
    }
  }
}
</style>
