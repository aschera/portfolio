<!-- // -------------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Main Section Component -------------------------------------- // -->

<template>

    <div class="about-section">
        <!-- Canvas -->
                <canvas id="myCanvas" width="400" height="300">
                    Your browser does not support the HTML5 canvas tag.
                </canvas>

                <ul class="personal-menu">
                    <li class="rotateS electron" id='rotateS'>

                    </li>
                    <li class="rotateM electron" id='rotateM '>

                    </li>
                    <li class="rotateL electron" id='rotateL'>

                    </li>
                </ul>


        <!-- Text-->
            <span class="about-text" id="text1">text 1</span>
            <span class="about-text" id="text2">text 2</span>
            <span class="about-text" id="text3">text 3</span>

<div id='content'>
     <div id='a'>
         Hover me
     </div>
</div>
<div id='b'>
    Show me
</div>


    </div>

</template>

<script>

export default {

  props: [],

  name: 'AboutBlobs',
  data() {
    return {
     Menu: [{text:'text'}],
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
  }, //mounted
  methods: {
    // functions
  } //methods
} //default
</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";


/* --------------------------------------------------- */
/* Chrome, Safari, Opera */
/* small */
@-webkit-keyframes circleS {
    from {-webkit-transform: rotateZ(0deg) translateX($positionSmall)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionSmall)}
}
/* middle */
@-webkit-keyframes circleM {
    from {-webkit-transform: rotateZ(0deg) translateX($positionMedium)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionMedium)}
}
/* large  */
@-webkit-keyframes circleL {
    from {-webkit-transform: rotateZ(0deg) translateX($positionLarge)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionLarge)}
}

/* --------------------------------------------------- */
/* Standard syntax */
/* small */
@keyframes circleS {
    from {-webkit-transform: rotateZ(0deg) translateX($positionSmall)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionSmall)}
}
/* middle */
@keyframes circleM {
    from {-webkit-transform: rotateZ(0deg) translateX($positionMedium)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionMedium)}
}
/* large  */
@keyframes circleL {
  from {-webkit-transform: rotateZ(0deg) translateX($positionLarge)}
    to {-webkit-transform: rotateZ(-360deg) translateX($positionLarge)}
}
/* --------------------------------------------------- */

.rotateS {
  animation         : circleS 16s infinite linear;
  -webkit-animation : circleS 16s infinite linear;
}

.rotateM {
 animation         : circleM 20s infinite linear;
  -webkit-animation : circleM 20s infinite linear;
}

.rotateL {
  animation         : circleL 24s infinite linear;
  -webkit-animation : circleL 24s infinite linear;
}

.electron {
  background-color: $color-lightpink;
  color: $color-white ;
  position: absolute;
  top: $positionCenter;
  left: 190px;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

canvas {
    padding: 0;
    margin: 0;
    bordeR: 0;
    outline: none;
}

.about-section {
    display: flex;
    justify-content: center;
    align-content: space-between;


}

.section-menu {
  display: flex;
  //justify-content: center;
  position: relative;
}

ul.personal-menu {

  li {
    cursor: pointer;

    &.rotateS {
      &:hover {
          background-color: $color-blue ;
          animation-play-state: paused;

        &:before {
          content: "xx";
        }
      }
    }

    &.rotateM {
      &:hover {
          background-color: $color-blue;
         animation-play-state: paused;
      }
    }

    &.rotateL {
      &:hover {
          background-color: $color-blue;
          animation-play-state: paused;
      }
    }

  }

}

.about-text {
    background-color:darkred;
    min-width: 200px;
    width: 50%;
    display: block;
}





#rotateS,
#rotateM,
#rotateL {
  opacity: 1;
}

.canvas-section .personal-menu #rotateS:hover ~ .text-section #text1,
.canvas-section .personal-menu #rotateM:hover ~ .text-section #text2,
.canvas-section .personal-menu #rotateL:hover ~ .text-section #text3
 {
  opacity: 1;
}

#text1,
#text2,
#text3 {
  opacity: 0;
  }


  #b {
    display: none;
}

#personal-menu #rotateS:hover~#b{
    display: block;
}

</style>