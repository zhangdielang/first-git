<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="showname">点我显示学生名字</button>
  </div>
</template>

<script>
//引入一个混合
import { mixin } from "./mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "张瓞浪",
      sex: "男",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>