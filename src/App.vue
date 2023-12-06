<template>
  <div class="show">
    {{ flag }}
    <div class="btn">
      <router-link to="/colum" @click="drawer = true">柱状图</router-link>
      <router-link to="/pie" @click="drawer = true">饼图</router-link>
      <router-link to="/line" @click="drawer = true">折线图</router-link>
      <router-link to="/clound" @click="drawer = true">词云</router-link>
      <router-link to="/china" @click="drawer = true">China地图</router-link>
      <router-link to="/china/plane" @click="drawer = true">China航线图</router-link>
    </div>
    <div class="container">
      <el-drawer v-model="drawer" title="I am the title" direction="rtl" size="50%">
        <!-- 遇到问题1 -->
        <div class="echarts" v-if="drawer && flag">
          <!-- 当我快速点击图表时宽高是不会显示  -->
          <!-- 在使用echarts时，写在tab页中的图表宽度明明设成了100%，但是在页面上实际却只有100px宽 -->
          <!-- 原因很简单，在tab页中，图表的父容器div是隐藏的（display：none），图表在执行js初始化的时候找不到这个元素，所以自动将“100%”转成了“100”，最后计算出来的图表就成了100px -->

          <!-- 解决办法  添加更多的条件限定 使用nextick渲染echart-->
          <router-view></router-view>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script setup>

import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const drawer = ref(false);
const flag = ref(false);
let timer = null

onBeforeRouteUpdate(() => {
  console.log(22222222);
})
const route = useRoute()
watch(() => route.path, () => {
  flag.value = false;
  timers();
})
function timers() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    flag.value = true;
  }, 2000);
}
timers();
</script>


<style lang='scss' scoped>
.echarts {
  display: flex;
  width: 100%;
  height: 100%;
  // background-color: red;
}

$xtxColor: #27ba9b;
$helpColor: #e26237;
$sucColor: #1dc779;
$warnColor: #ffb302;
$priceColor: #cf4444;

.show {
  width: 100%;
  height: 100%;
  display: flex;

}

.container,
.btn {
  width: 50%;
  height: 100%;

  a {
    text-decoration: none;
    display: inline-block;
    height: 14px;
    text-align: center;
    line-height: 14px;
    padding: 8px 15px;
    margin-left: 12px;
    color: #606266;
    font-size: 14px;
    border-radius: 2px;
    background-color: #efefef;
  }


}

.active {
  border: 1px solid $sucColor;
  background-color: $sucColor;
}
</style>