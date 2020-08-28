<template>
  <div class="goodsList">
    <main class="goodsListMain">
      <div class="goodsListMainIcon">
        <img src="../assets/商城首页/编组 16.png" alt />
      </div>
      <div v-if="isImg" class="goodsListImg"></div>
      <div v-if="!isImg" class="goodsListVideo"></div>
    </main>

    <footer class="goodsListFoot">
      <div class="goodsListText">【周黑鸭】建议编写装鸭掌120g独享快乐</div>
      <div class="goodsListBuy">
        <div class="goodsListPrice">¥21.90</div>
        <div class="goodsListBei">+30贝</div>
        <img class="goodsListShopCar" src="../assets/商城首页/编组 18.png" alt />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "goodsList",
  props: {},
  data() {
    return {
      value: "",
      isImg: true
    };
  }
};
</script>

<style scoped lang="less">
.goodsList {
  width: 1.68rem;
  height: 2.59rem;
  background: rgba(254, 255, 255, 1);
  border-radius: 6px;

  .goodsListMain {
    width: 1.68rem;
    height: 1.68rem;
    background: rgba(251, 252, 255, 1);
    border-radius: 6px 6px 0px 0px;

    .goodsListMainIcon {
      width: 1.68rem;
      height: 0.23rem;
      position: relative;

      img {
        position: absolute;
        width: 0.27rem;
        height: 0.29rem;
        top: 0;
        left: 0.1rem;
      }
    }

    div.goodsListImg,
    div.goodsListVideo {
      width: 1.68rem;
      height: 1.45rem;
      background: rgba(50, 50, 50, 1);
    }
  }

  .goodsListFoot {
    .goodsListText {
      width: 1.51rem;
      height: 0.42rem;
      font-size: 0.13rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 0.21rem;
      padding: 0.09rem 0.06rem 0.09rem 0.11rem;
    }

    .goodsListBuy {
      display: flex;
      justify-content: flex-start;
      width: 1.45rem;
      height: 0.22rem;
      padding: 0 0.12rem 0.09rem 0.11rem;

      .goodsListPrice {
        width: 0.48rem;
        height: 0.22rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(253, 68, 68, 1);
        line-height: 0.22rem;
      }

      .goodsListBei {
        align-self: flex-end;
        height: 0.14rem;
        margin-bottom: 0.02rem;
        margin-right: auto;
        font-size: 0.1rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(253, 68, 68, 1);
        line-height: 0.14rem;
        transform: scale(0.95);
      }

      .goodsListShopCar {
        width: 0.17rem;
        height: 0.17rem;
      }
    }
  }
}
</style>