<template>
  <div class="goodsCard">
    <div :class="(cardFlag?`goodsCardShopCart`:`goodsCardOther`)">
      <van-card title="【深层肌肉放松 按摩筋膜抢】肌肉消除酸痛" :price="19900" thumb="https://img.yzcdn.cn/2.jpg">
        <template #price-top>
          <GoodsCardPopUp />
        </template>

        <template #footer>
          <van-stepper class="goodsCardFooter" v-model="value" />
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
/* 引入组件 */
import GoodsCardPopUp from "./goodsCardPopUp";

/* 引入vant */
import Vue from "vue";
import { Card, Stepper } from "vant";

Vue.use(Stepper);
Vue.use(Card);

export default {
  name: "goodsCard",
  props: ["cardType"],
  components: {
    GoodsCardPopUp
  },
  data() {
    return {
      cardFlag: this.cardType === "shopCart",
      value: 0,
      value1: 0,
      option1: [
        { text: "白色", value: 0 },
        { text: "黑色", value: 1 },
        { text: "蓝色", value: 2 }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.goodsCard {
  .goodsCardShopCart {
    box-sizing: border-box;
    height: 1.15rem;
    .van-card {
      box-sizing: border-box;
      height: 1.15rem;
      background: rgba(255, 255, 255, 1);
      padding-left: 0;
      .van-card__header {
        height: 100%;
        .van-card__thumb {
          margin: auto;
        }
        .van-card__content {
          padding: 0.11rem 0;
          padding-left: 0.13rem;
          .van-card__price {
            color: rgba(253, 68, 68, 1);
          }
        }
      }
    }
    .goodsCardFooter {
      margin-top: -0.2rem;
    }
  }
}
</style>