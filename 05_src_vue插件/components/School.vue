<template>
  <div>
    <h2>学校：{{ name }}</h2>
    <h2>地址：{{ adress }}</h2>
  </div>
</template>
<!-- 组件结构 -->
<script>
export default {
  name: "School",
  data() {
    return {
      name: "南昌交通学院",
      adress: "南昌市",
    };
  },
};
</script>
<style>
</style>