<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="cli">点击输出上方的DOM元素</button>
    <School ref="sch"/>
    <School />
    <School />
  </div>
</template>

<script>
import School from "./components/School";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎回来张瓞浪",
    };
  },
  methods: {
    cli() {
      console.log(this.$refs);//
      console.log(this.$refs.title);//真实dom元素
      console.log(this.$refs.sch);//School的实例对象
    },
  },
};
</script>

<style></style>