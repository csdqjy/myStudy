<template>
  <div class="detailsBuyNav">
    <!-- 购买导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button
        type="warning"
        color="#FC8958"
        text="加入购物车"
        @click="onClickButton(`add`)"
      />
      <van-goods-action-button
        type="danger"
        color="#FD4444"
        text="立即购买"
        @click="onClickButton(`buy`)"
      />
    </van-goods-action>
    <!-- 商品规格 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      :show-add-cart-btn="(buttonFlag===`select`)"
      :buy-text="buyText"
      :reset-stepper-on-hide="true"
      @buy-clicked="onClickOkButton"
    />
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku } from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);

import { Toast } from "vant";

export default {
  name: "detailsBuyNav",

  props: {},

  data() {
    return {
      show: false,

      buttonFlag: null,

      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色:", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                previewImgUrl: "https://img.yzcdn.cn/2.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "蓝色",
                previewImgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            largeImageMode: false //  是否展示大图模式
          }
        ],

        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 19900, // 价格（单位分）
            stock_num: 100 // 当前 sku 组合对应的库存
          },
          {
            id: 2258, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 19900, // 价格（单位分）
            stock_num: 200 // 当前 sku 组合对应的库存
          }
        ],

        price: "199.00", // 默认价格（单位元）

        stock_num: 227, // 商品总库存

        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id

        none_sku: false, // 是否无规格商品

        hide_stock: false // 是否隐藏剩余库存
      },

      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg"
      }
    };
  },

  methods: {
    onClickButton(flag) {
      this.buttonFlag = flag;
      this.show = true;
    },

    onClickOkButton() {
      Toast(this.buttonFlag);
    }
  },

  computed: {
    buyText() {
      return this.buttonFlag === "add" || this.buttonFlag === "buy"
        ? "确认"
        : "立即购买";
    }
  }
};
</script>

<style scoped lang="less">
</style>
