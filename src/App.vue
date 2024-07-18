<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <List></List>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import list from "./components/list";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    list,
  },
};
</script>

<style></style>