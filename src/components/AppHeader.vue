<template>
  <nav class="navbar container pt-10">
    <div class="top-bar px-6">
      <div
        class="relative z-10 flex justify-center items-center h-full gap-x-12"
      >
        <router-link
          v-for="(label, key) in topNavContent"
          :key="key"
          to="/"
          class="hdg-6 router-link"
        >
          <span class="comment-span">// </span>
          <span class="text-span">{{ label }}</span>
        </router-link>

        <!-- <router-link to="/" class="hdg-6 router-link">
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
        </router-link> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      pageContent: {},
    };
  },
  components: {
    RouterLink,
  },
  computed: {
    topNavContent() {
      return this.pageContent.acf?.header_top_nav_content || {};
    },
  },
  mounted() {
    axios
      .get("http://code-witch.local/wp-json/wp/v2/pages/11")
      .then((response) => {
        this.pageContent = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style>
@import "../styles/navbar.css";
</style>
