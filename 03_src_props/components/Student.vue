<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>年龄：{{ myage }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="btu">点击年龄自增</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎回家张瓞浪",
      myage: this.age,
    };
  },
  methods: {
    btu() {
      this.myage++;
    },
  },
  // props: ["name", "sex", "age"],

  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },

  props: {
    name: {
      type: String, //类型
      require: true, //name是必须的
    },
    sex: {
      type: String, //
      require: true,
    },
    age: {
      type: Number, //
      require: true,
      default: 99, //默认值
    },
  },
};
</script>

<style>
</style>