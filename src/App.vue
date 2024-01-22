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
  mounted() {
    // ASCII art

    const owl = `
      /\\︵-︵/\\
      |(◉)(◉)|
      \\ ︶V︶ /
      /↺↺↺↺\\
      ↺↺↺↺↺|
      \\↺↺↺↺/
      ¯¯/\\¯¯/\\¯¯`;

    const iSeeYouText = `Thanks for visiting my site! You can find more projects in my GitHub: https://github.com/vivian-xw7`;

    console.log(owl);
    console.log(iSeeYouText);
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
