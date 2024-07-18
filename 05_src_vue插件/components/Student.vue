<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
  </div>
</template>

<script>
//引入一个混合
export default {
  name: "Student",
  data() {
    return {
      name: "张瓞浪",
      sex: "男",
    };
  },
};
</script>

<style>
</style>