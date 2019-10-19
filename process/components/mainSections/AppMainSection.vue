<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>
  <div>

    <h2>h2 title</h2> <!-- TODO: dont skip headings-->

    <section id="menu"  class="section-menu">

      <canvas id="myCanvas" width="400" height="300">
          Your browser does not support the HTML5 canvas tag.
      </canvas>

      <div class="rotateS electron"></div>
      <div class="rotateM electron"></div>
      <div class="rotateL electron"></div>

    </section>

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

  mounted: function() {

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


// -------------------------------------------------------------- //
// biggest
ctx.beginPath();
ctx.arc(195,150,140,0,2*Math.PI);
ctx.strokeStyle = "#5E2C4F";
ctx.lineWidth = 4;
ctx.fillStyle = "#5E2C4F";
ctx.fill();
ctx.stroke();

// -------------------------------------------------------------- //
// middle
ctx.beginPath();
ctx.arc(195,150,100,0,3*Math.PI);
ctx.strokeStyle = "#3E1A1C";
ctx.lineWidth = 3;
ctx.fillStyle = "#3E1A1C";
ctx.fill();
ctx.stroke();

// -------------------------------------------------------------- //
//smallest
ctx.beginPath();
ctx.arc(195,150,60,0,3*Math.PI);
ctx.strokeStyle = "#b21998";
ctx.lineWidth = 2;
ctx.fillStyle = "#b21998";
ctx.fill();
ctx.stroke();
  }, //created

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




/* --------------------------------------------------- */

/* small */
@-webkit-keyframes circleS {
    from {-webkit-transform: rotateZ(0deg) translateX(60px)}
    to {-webkit-transform: rotateZ(-360deg) translateX(60px)}
}

/* middle */
@-webkit-keyframes circleM {
    from {-webkit-transform: rotateZ(0deg) translateX(100px)}
    to {-webkit-transform: rotateZ(-360deg) translateX(100px)}
}

/* large  */
@-webkit-keyframes circleL {
    from {-webkit-transform: rotateZ(0deg) translateX(140px)}
    to {-webkit-transform: rotateZ(-360deg) translateX(140px)}
}


@-webkit-keyframes ccircle {
    from {-webkit-transform: rotateZ(-360deg) translateX(100px)}
    to {-webkit-transform: rotateZ(0deg) translateX(100px)}
}


.rotateS {
  -webkit-animation: circleS 8s infinite linear;
}

.rotateM {
  -webkit-animation: circleM 10s infinite linear;
}

.rotateL {
  -webkit-animation: circleL 12s infinite linear;
}

.electron {
  background-color: #A08993;
  color: white;
  position: absolute;
  top: 140px;
  left: 185px;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

canvas {
    position: relative;
    padding: 0;
    margin: 0;
    bordeR: 0;
    outline: none;
    top: 0;
    left: 0;
}

.section-menu {
  display: flex;
  //justify-content: center;
  position: relative;
}










</style>
