<template>
  <div class="homeHotSale">
    <header class="homeHotSaleHeader">-当季热卖-</header>

    <main class="homeHotSaleMain">
      <div v-for="item in 4" :key="item">
        <div class="homeHotSaleList">
          <GoodsList />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GoodsList from "../../components/goodsList";
export default {
  name: "homeHotSale",
  props: {},
  data() {
    return {
      value: ""
    };
  },
  components: {
    GoodsList
  }
};
</script>

<style scoped lang="less">
.homeHotSale {
  width: 100%;
  margin-top: 0.1rem;
  background:rgb(229, 230, 231);

  .homeHotSaleHeader {
    width: 100%;
    height: 0.45rem;
    font-size: 0.17rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 0.45rem;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(252, 137, 88, 1) 0%,
      rgba(253, 68, 68, 1) 100%
    );
  }

  .homeHotSaleMain {
    box-sizing: border-box;
    width: 100%;
    padding: 0.1rem 0.15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .homeHotSaleList{
      margin-bottom: 0.11rem;
    }
  }
}
</style>