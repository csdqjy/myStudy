
<template>
  <div class="homeActivity">
    <div class="homeActivityLeft"></div>

    <div class="homeActivityRight">
      <div></div>

      <div></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "homeActivity",

  props: {},

  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped lang="less">
.homeActivity {
  display: flex;
  justify-content: center;
  width: 3.55rem;
  margin: 0.05rem auto;

  .homeActivityLeft {
    flex: 1;
    height: 2.02rem;
    margin-right: 0.04rem;
    background: rgba(100, 100, 100, 1);
  }

  .homeActivityRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-left: 0.04rem;

    div {
      height: 0.97rem;
      background: rgba(100, 100, 100, 1);
    }
  }
}
</style>