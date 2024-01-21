<template>
  <div class="home">
    <div class="container p-20">
      <div class="row">
        <div
          class="col w-full lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0"
        >
          <div class="text-wrapper">
            <component
              :is="headingTag"
              v-if="
                pageContent.acf &&
                pageContent.acf.hero_banner_heading &&
                pageContent.acf.hero_banner_heading.text
              "
              class="hdg-5 mb-8"
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
              class="hdg-1"
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
      imageUrl: "",
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
  },
  methods: {
    function() {
      console.log(this.imageUrl);
    },
  },
  mounted() {
    // Replace '11' with the ID of your home page or adjust as needed
    axios
      .get("http://code-witch.local/wp-json/wp/v2/pages/11")
      .then((response) => {
        this.pageContent = response.data;

        const imageId = this.pageContent.acf?.hero_banner_image || "";

        if (imageId) {
          axios
            .get(`http://code-witch.local/wp-json/wp/v2/media/${imageId}`)
            .then((imageResponse) => {
              this.imageUrl = imageResponse.data?.source_url || "";
            })
            .catch((imageError) => {
              console.error("Error fetching image:", imageError);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style scoped></style>
