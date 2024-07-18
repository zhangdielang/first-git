<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr />
    <Student name="李四" sex="male" :age="32" />
    <hr />
    <Student />
    <hr />
    <Student name="翠花" sex="female" :age="18" />
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      msg: "欢迎回来张瓞浪",
    };
  },
};
</script>

<style></style>