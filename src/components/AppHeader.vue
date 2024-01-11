<template>
  <nav class="navbar">
    <router-link to="/" class="hdg-5">// Home</router-link>
    <router-link to="/projects" class="hdg-5">// Projects</router-link>
    <router-link to="/contact" class="hdg-5">// Contact</router-link>
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
