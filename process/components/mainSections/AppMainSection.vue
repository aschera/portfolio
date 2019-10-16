<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

  <section id="story"  class="section-stories">

    <blog-story
      v-for="(item, i) in appointments"
      :appointment="item"
      :key="i">
    </blog-story>

  </section>

</template>

<script>

import BlogStory from './BlogStory.vue';

export default {

  props: ['strings','appointments'],

  name: 'AppMainSection',
  data() {
    return {
     // stuff
    } //return
  }, //data
  methods: {
    // functions
  }, //methods
  components: {
    'blog-story': BlogStory
  }, //components
} //default
</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";

// main wrapper


@media (max-width: 56.25em) {
  #story > div:nth-child(3),
  #story > div.row.u-margin-bottom-big {
    padding: 0;
  }
}

section.section-stories {
  position: relative;
  flex-direction: row;
  margin-bottom: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

    @media (max-width: 1160px){
      display: block;
    }
}

</style>
