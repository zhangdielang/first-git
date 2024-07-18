<template>
  <div>
    <h2>学校：{{ name }}</h2>
    <h2>名称：{{ adress }}</h2>
    <button @click="showname">点我显示学校名字</button>
  </div>
</template>
<!-- 组件结构 -->
<script>
//组件脚本
// const school = Vue.extend({
//   // el:'#root',
//   name: "school",
//   data() {
//     return {
//       name: "南昌交通学院",
//       adress: "南昌市",
//     };
//   },
//   methods: {
//     showname() {
//       alert(this.name);
//     },
//   },
// });
// export default school;
//简写
export default {
  name: "school",
  data() {
    return {
      name: "南昌交通学院",
      adress: "南昌市",
    };
  },
  methods: {
    showname() {
      alert(this.name);
    },
  },
};
</script>
<style>
/* 组件样式 */
</style>