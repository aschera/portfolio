<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>
  <div>



    <!-- About -->
    <section id="menu" class="section section--dark">
      <div>
        <h2>Spinning menu</h2>
      </div>
      <div class=" section--dark hero">
        <about-blobs></about-blobs>
      </div>
    </section>


    <!-- Stories -->

    <section id="story" class="section">
      <h2>Things</h2>
      <div class="section multi-up multi-up--5 multi-up--slim">
        <blog-story
          v-for="(item, i) in Items"
          :Item="item"
          :key="i">
        </blog-story>
      </div>

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
  padding-left: 1.25rem;
  color: #212121;
  background: #fff;
}

.section {
    background: #fff;
    padding-bottom: 48px;
    padding-top: 96px;
    position: relative
}

.section a:not(.tile__link):not(.button) {
    text-decoration: underline
}

.section .button--underline {
    color: #212121
}

.section .col-list+.col-list {
    margin-top: 64px
}

.section .col-2 div.module {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%
}

@media screen and (min-width: 921px) {
    .section .col-2 div.module {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .section .col-2 div.module:first-child {
        -ms-flex-preferred-size: 66.666%;
        flex-basis: 66.666%;
        max-width: 66.666%
    }
}

.section .spec-panel {
    margin-top: 48px
}

.section .spec-tabs-container {
    clear: both;
    margin-top: 32px
}

.section--light {
    color: #424242
}

/* DARK */
.section--dark.section--dark {
    background-color: #212121;
    color: #fafafa
}

.section--dark.section--dark h1 {
    color: #fff
}

.section--dark.section--dark h2 {
  background-color: #212121;
  color: #fafafa
}

.section--dark.section--dark h3 {
    color: #fff
}

.section--dark.section--dark h4 {
    color: #fff
}

.section--dark.section--dark h5 {
    color: #fff
}

.section--dark.section--dark h6 {
    color: #fff
}

.section--dark.section--dark a,.section--dark.section--dark figcaption {
    color: #fff
}

.section--dark.section--dark a:visited:not(.tile__link):not(.button) {
    color: #a6a6a6
}

.section .section--dark.section--dark h4:not(.tile__header),.section--404 .section--dark.section--dark .s404__list-title,.section--dark.section--dark .eyebrow,.section--dark.section--dark .section h4:not(.tile__header),.section--dark.section--dark .section--404 .s404__list-title,.section--dark.section--dark h4 {
    color: #fafafa
}

.section--dark.section--dark .button:not(.button--underline) {
    border: 1px solid #fff;
    color: #fff
}

.section--dark.section--dark .button:not(.button--underline):hover {
    background: rgba(255,255,255,.15)
}

.section--dark.section--dark .button:not(.button--underline).mdc-ripple-surface::after,.section--dark.section--dark .button:not(.button--underline).mdc-ripple-surface::before {
    background-color: #fff
}

.multi-up {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.multi-up .tile {
    padding: .75rem
}

@media screen and (max-width: 520px) {
    .multi-up>.tile {
        -ms-flex:1 1 100%;
        flex: 1 1 100%
    }
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up>.tile {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%
    }
}

@media screen and (min-width: 921px) {
    .multi-up>.tile:nth-child(odd) {
        -ms-flex-preferred-size:66.666%;
        flex-basis: 66.666%;
        max-width: 66.666%
    }

    .multi-up>.tile:nth-child(even) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }
}

.multi-up.multi-up--1 .tile {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%
}

@media screen and (min-width: 921px) {
    .multi-up--2 .tile .ratio--1x1,.multi-up--2 .tile .tile__image--1x1 {
        display:block
    }

    .multi-up--2 .tile .lazy-wrapper:not(.ratio--1x1),.multi-up--2 .tile .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--2.multi-up--hero .tile:nth-child(1) .ratio--2x1,.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image--2x1 {
        display: block
    }

    .multi-up--2.multi-up--hero .tile:nth-child(1) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image:not(.tile__image--2x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up--3 .tile:nth-child(1) .ratio--1x1,.multi-up--3 .tile:nth-child(1) .tile__image--1x1,.multi-up--3 .tile:nth-child(2) .ratio--1x1,.multi-up--3 .tile:nth-child(2) .tile__image--1x1 {
        display:block
    }

    .multi-up--3 .tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--3 .tile:nth-child(2) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(2) .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) .ratio--1x1,.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image--1x1 {
        display: block
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up--4 .tile:nth-child(even) .ratio--1x1,.multi-up--4 .tile:nth-child(even) .tile__image--1x1 {
        display:block
    }

    .multi-up--4 .tile:nth-child(even) .lazy-wrapper:not(.ratio--1x1),.multi-up--4 .tile:nth-child(even) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

.multi-up--5>.tile:nth-child(2) {
    margin-bottom: 0
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--5>.tile:nth-child(1) {
        -ms-flex-preferred-size:100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .multi-up--5:not([class*='multi-up--5 multi-up--'])>.tile:nth-child(2) {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        padding: 0
    }

    .multi-up--5>.tile:nth-child(2)>.tile {
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding: 0 20px
    }
}

@media screen and (min-width: 921px) {
    .multi-up--5>.tile:nth-child(1) .ratio--1x1,.multi-up--5>.tile:nth-child(1) .tile__image--1x1,.multi-up--5>.tile:nth-child(4) .ratio--1x1,.multi-up--5>.tile:nth-child(4) .tile__image--1x1 {
        display:block
    }

    .multi-up--5>.tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--5>.tile:nth-child(4) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(4) .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .ratio--1x1,.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image--1x1 {
        display: block
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up.multi-up--max .tile {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up.multi-up--max .tile .ratio--1x1,.multi-up.multi-up--max .tile .tile__image--1x1 {
        display: block
    }

    .multi-up.multi-up--max .tile .lazy-wrapper:not(.ratio--1x1),.multi-up.multi-up--max .tile .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

.multi-up--1.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image--2x1 {
    display: block
}

.multi-up--1.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1) {
    display: none
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%
    }
}

@media screen and (min-width: 921px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }
}


</style>
