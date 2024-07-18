<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ adress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "张瓞浪",
      adress: "南昌",
    };
  },
};
</script>

<style>
.demo {
  background-color: red;
}
</style>