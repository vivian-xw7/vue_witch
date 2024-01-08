<template>
  <div>
    <h1>My Projects</h1>
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <img :src="project.image" alt="Project Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "Description of Project 1.",
          image: "project1.jpg",
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description of Project 2.",
          image: "project2.jpg",
        },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
