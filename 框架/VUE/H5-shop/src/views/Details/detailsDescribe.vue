<template>
  <div class="detailsDescribe">
    <!-- 上方价格 -->
    <header class="detailsDescribeHeader">
      <!-- 价格 -->
      <header class="detailsDescribePrice">
        <span>¥</span>199.00
      </header>

      <!-- 描述 -->
      <footer class="detailsDescribeText">【深层肌肉放松 按摩筋膜枪】肌肉消除酸痛</footer>
    </header>
    <!-- 下方选项 -->
    <main class="detailsDescribeMain">
      <!-- 运费 -->
      <van-cell-group class="detailsDescribeFare">
        <van-cell>
          <span class="detailsDescribeMainTitle">运费</span>
          <span>¥ 0.00~10.00</span>
          <span class="detailsDescribeMainTitle detailsDescribeMainNum">已售 456件</span>
        </van-cell>
      </van-cell-group>

      <!-- 其他选项 -->
      <van-cell-group class="detailsDescribeOpt">
        <!-- 服务 -->
        <van-cell is-link>
          <span class="detailsDescribeMainTitle">服务</span>
          <span>收货后结算</span>
        </van-cell>

        <!-- 选择 -->
        <van-cell is-link>
          <span class="detailsDescribeMainTitle">选择</span>
          <span>搭配套餐</span>
        </van-cell>
      </van-cell-group>
    </main>
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import { Cell, CellGroup } from "vant";

Vue.use(Cell).use(CellGroup);

export default {
  name: "detailsDescribe",

  props: {},

  data() {
    return {
      value: "",
      show: ""
    };
  },

  methods: {}
};
</script>

<style scoped lang="less">
.detailsDescribe {
  background: rgba(240, 240, 240, 1);

  .detailsDescribeHeader {
    background: rgba(255, 255, 255, 1);

    .detailsDescribePrice {
      height: 0.3rem;
      padding-left: 0.1rem;
      padding-top: 0.07rem;
      font-size: 0.22rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(253, 68, 68, 1);
      line-height: 0.3rem;

      span {
        font-size: 0.14rem;
        margin-right: 0.05rem;
      }
    }

    .detailsDescribeText {
      width: 3.08rem;
      height: 0.42rem;
      padding: 0.11rem 0 0.11rem 0.1rem;
      font-size: 0.16rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 0.21rem;
    }
  }

  .detailsDescribeMain {
    padding-bottom: 0.08rem;

    .detailsDescribeFare {
      position: relative;
      margin: 0.08rem 0;

      .detailsDescribeMainNum {
        position: absolute;
        right: 0;
        padding-right: 0;
      }
    }

    .van-cell {
      padding-left: 0.1rem;
      padding-right: 0.1rem;
    }

    span.detailsDescribeMainTitle {
      color: rgba(153, 153, 153, 1);
      padding-right: 0.1rem;
    }
  }
}
</style>