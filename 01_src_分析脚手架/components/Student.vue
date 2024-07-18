<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showname">点我显示学生名字</button>
  </div>
</template>
<!-- 组件结构 -->
<script>
//组件脚本
// const student = Vue.extend({
//   // el:'#root',
//   name:'student',
//   data() {
//     return {
//       name: "张瓞浪",
//       age: 22,
//     };
//   },
//   methods: {
//     showname() {
//       alert(this.name);
//     },
//   },
// });
// export default student;
//简写
export default {
  name: "student",
  data() {
    return {
      name: "张瓞浪",
      age: 22,
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