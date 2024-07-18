<template>
  <div class="demo">
    <h2>学校：{{name}}</h2>
    <h2>地址：{{ adress }}</h2>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "Footer",
  // 数据函数，返回组件的状态数据
  data() {
    return {
      name: "南昌交通学院",
      adress: "南昌市",
    };
  },
};
</script>
<style>
.demo{
  background-color: red;
}
</style>
