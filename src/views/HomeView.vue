<template>
  <div class="home">
    <div class="container mx-auto p-20">
      <div class="text-wrapper">
        <component
          :is="heroBannerTag"
          v-if="
            pageContent.acf &&
            pageContent.acf.hero_banner_heading &&
            pageContent.acf.hero_banner_heading.text
          "
          class="hdg-1 text-witch-space text-center"
        >
          {{ heroBannerText }}
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pageContent: {},
    };
  },
  computed: {
    heroBannerTag() {
      return this.pageContent.acf?.hero_banner_heading?.tag || "p";
    },
    heroBannerText() {
      return this.pageContent.acf?.hero_banner_heading?.text || "";
    },
  },
  mounted() {
    // Replace '11' with the ID of your home page or adjust as needed
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

<style scoped></style>
