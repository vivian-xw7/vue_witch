<template>
  <AppHeader />

  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
@import "./styles/typography.css";
@import "./assets/main.css";
</style>
