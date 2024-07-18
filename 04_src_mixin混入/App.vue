<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr />
    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "欢迎回来张瓞浪",
    };
  },
};
</script>

<style></style>