<template>
  <nav class="navbar">
    <div class="flex justify-center gap-x-12">
      <router-link to="/" class="hdg-6 text-witch-green">// home</router-link>
      <router-link to="/projects" class="hdg-6 text-witch-green"
        >// projects</router-link
      >
      <router-link to="/contact" class="hdg-6 text-witch-green"
        >// contact</router-link
      >
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<style>
@import "../styles/navbar.css";
</style>
