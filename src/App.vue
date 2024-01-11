<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>

  <router-view />
</template>

<style scoped>
@import "./styles/typography.css";
@import "./input.css";
</style>
