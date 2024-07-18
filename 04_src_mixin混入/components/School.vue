<template>
  <div>
    <h2>学校：{{ name }}</h2>
    <h2>地址：{{ adress }}</h2>
    <button @click="showname">点我显示学校名字</button>
  </div>
</template>
<!-- 组件结构 -->
<script>
import { mixin } from "./mixin";
export default {
  name: "School",
  data() {
    return {
      name: "南昌交通学院",
      adress: "南昌市",
    };
  },
  mixins: [mixin],
};
</script>
<style>
</style>