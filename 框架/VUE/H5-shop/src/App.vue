<template>
  <div id="app">
    <div id="nav"></div>

    <transition :name="SkipSwitchName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      SkipSwitchName: ""
    };
  },

  watch: {
    $route(to, from) {
      if (to.meta.tx > from.meta.tx) {
        this.SkipSwitchName = "Skrigh";
      } else {
        this.SkipSwitchName = "Skleft";
      }
    }
  }
};
</script>

<style lang="less">
.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
  transition: all 600ms;
}
//先给 所要用的上下层级跳转写一个过渡时间
//然后你就可以发挥自己的想象力来写自己动画了 下面是一个例子
.Skright-enter {
  transform: translate3d(-100%, 0, 0);
}
.Skright-leave-to {
  transform: translate3d(100%, 0, 0);
}
.Skleft-enter {
  transform: translate3d(100%, 0, 0);
}
.Skleft-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
