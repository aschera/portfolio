<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>
  <div>

    <h2>h2 title</h2> <!-- TODO: dont skip headings-->

    <!-- About -->
    <section id="menu"  class="section-menu">
      <about-blobs></about-blobs>
    </section>


    <!-- Stories -->
    <section id="story"  class="section-stories">
      <blog-story
        v-for="(item, i) in Items"
        :Item="item"
        :key="i">
      </blog-story>
    </section>




  </div>

</template>

<script>

import BlogStory from './BlogStory.vue';
import AboutBlobs from './AboutBlobs.vue';

export default {

  props: ['strings','Items'],

  name: 'AppMainSection',
  data() {
    return {
      //things
    } //return
  }, //data

  mounted: function() {
    //stuff
  }, //mounted

  methods: {
    // functions
  }, //methods
  components: {
    'blog-story': BlogStory,
    'about-blobs': AboutBlobs
  }, //components
} //default

</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";

section.section-stories {
  position: relative;
  flex-direction: row;
  margin-bottom: $gutter;
  margin-left: $menu-width;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}

h2 {
  color: $color-grey;
  text-align: center;
}

</style>
