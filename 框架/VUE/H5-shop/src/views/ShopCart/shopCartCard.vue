<template>
  <div class="shopCartCard">
    <header class="shopCartCardHeader">购物车</header>

    <main class="shopCartCardMain">
      <!-- 商店名称 -->
      <van-cell-group class="shopCartCardCell">
        <van-cell clickable>
          <van-icon name="shop-o" size="0.2rem" color="rgba(0,0,0,1)" />
          <span class="shopCartCardCellName">集步运动</span>
          <van-icon
            class="shopCartCardCellIcon2"
            name="arrow"
            size="0.1rem"
            color="rgba(152, 153, 154, 1)"
          />
          <span class="shopCartCardCellEdit">编辑</span>
        </van-cell>
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <div class="shopCartCardList">
            <van-checkbox
              class="shopCartCardCheck"
              name="a"
              checked-color="rgba(253, 68, 68, 1)"
              icon-size="0.16rem"
            ></van-checkbox>
            <GoodsCard cardType="shopCart" />
          </div>
        </van-checkbox-group>
      </van-cell-group>
      <!-- 商店卡片 -->
    </main>

    <footer>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="result">全选</van-checkbox>
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template>-->
      </van-submit-bar>
    </footer>
  </div>
</template>

<script>
/* 引入vant */
import Vue from "vue";
import {
  Cell,
  CellGroup,
  Icon,
  Checkbox,
  CheckboxGroup,
  SubmitBar
} from "vant";

Vue.use(Cell).use(CellGroup).use(Icon).use(Checkbox).use(CheckboxGroup).use(SubmitBar);

/* 引入组件 */
import GoodsCard from "../../components/goodsCard";

export default {
  name: "shopCartCard",
  components: { GoodsCard },
  data() {
    return {
      result: []
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="less">
.shopCartCard {
  .shopCartCardHeader {
    height: 0.42rem;
    font-size: 0.17rem;
    font-weight: bold;
    text-align: center;
    color: rgba(51, 51, 51, 1);
    line-height: 0.42rem;
  }

  .shopCartCardMain {
    .shopCartCardCell {
      background: rgba(240, 240, 240, 1);

      .van-cell {
        padding: 0.1rem;
        .van-cell__value {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .shopCartCardCellName {
            font-size: 0.14rem;
            margin-right: 0.02rem;
          }
          .shopCartCardCellEdit {
            font-size: 0.12rem;
            color: rgba(51, 51, 51, 1);
            line-height: 0.21rem;
            margin-right: 0.02rem;
          }
          .shopCartCardCellIcon2 {
            margin-right: auto;
          }
        }
      }
      .van-checkbox-group {
        margin: 0.06rem 0.1rem;

        .shopCartCardList {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.55rem;
          height: 1.15rem;
          background: rgba(255, 255, 255, 1);

          .shopCartCardCheck {
            margin-left: 0.15rem;
            margin-right: 0.15rem;
            width: 0.2rem;
          }
        }
      }
    }
  }
}
</style>