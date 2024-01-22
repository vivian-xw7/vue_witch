<template>
  <nav class="navbar container pt-10">
    <div class="top-bar px-6">
      <div
        class="relative z-10 flex justify-center items-center h-full gap-x-12"
      >
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          class="hdg-6 router-link lowercase"
        >
          <span class="comment-span">// </span>
          <span class="text-span">{{ route.name }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../router/index";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      pageContent: {},
      routes: [],
    };
  },
  components: {
    RouterLink,
  },
  mounted() {
    this.routes = router.getRoutes().filter((route) => route.name);
  },
};
</script>

<style>
@import "../styles/navbar.css";
</style>
