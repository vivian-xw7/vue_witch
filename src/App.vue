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
@import "./styles/btn.css";
@import "./styles/grid.css";
@import "./styles/animations.css";
@import "./assets/main.css";
</style>
