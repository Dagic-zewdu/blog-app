<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Layouts/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style></style>
