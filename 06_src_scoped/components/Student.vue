<template>
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
  </div>
</template>

<script>
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
<style scoped>
/* 避免样式同名冲突 */
.demo{
  background-color:blue;
}
</style>