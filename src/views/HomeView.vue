<template>
  <div class="home">
    <div class="container p-20">
      <div class="row">
        <div class="col w-full lg:w-1/2 flex flex-col justify-center">
          <div class="text-wrapper">
            <component
              :is="headingTag"
              v-if="
                pageContent.acf &&
                pageContent.acf.hero_banner_heading &&
                pageContent.acf.hero_banner_heading.text
              "
              class="hdg-5 text-white"
            >
              {{ headingText }}
            </component>

            <componant
              :is="subheadingTag"
              v-if="
                pageContent.acf &&
                pageContent.acf.hero_banner_subheading &&
                pageContent.acf.hero_banner_subheading.text
              "
              class="hdg-1 text-white"
            >
              {{ subheadingText }}
            </componant>
          </div>
        </div>
        <div class="col w-full lg:w-1/2 flex flex-col justify-center">
          <div class="relative">
            <img :src="imageUrl" />
          </div>
        </div>
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
    headingTag() {
      return this.pageContent.acf?.hero_banner_heading?.tag || "p";
    },
    headingText() {
      return this.pageContent.acf?.hero_banner_heading?.text || "";
    },
    subheadingTag() {
      return this.pageContent.acf?.hero_banner_subheading?.tag || "p";
    },
    subheadingText() {
      return this.pageContent.acf?.hero_banner_subheading?.text || "";
    },
    imageUrl() {
      return this.pageContent.acf?.hero_banner_image || "";
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
