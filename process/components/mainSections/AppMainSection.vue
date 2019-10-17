<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>
  <div>

    <h2>h2 title</h2> <!-- TODO: dont skip headings-->

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

export default {

  props: ['strings','Items'],

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
