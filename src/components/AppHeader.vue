<template>
  <nav class="navbar">
    <div class="flex justify-center items-center h-full gap-x-12">
      <router-link to="/" class="hdg-6 router-link">
        <span class="comment-span">// </span>
        <span class="text-span">home</span>
      </router-link>
      <router-link to="/projects" class="hdg-6 router-link">
        <span class="comment-span">// </span>
        <span class="text-span">projects</span>
      </router-link>
      <router-link to="/contact" class="hdg-6 router-link">
        <span class="comment-span">// </span>
        <span class="text-span">contact</span>
      </router-link>
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
