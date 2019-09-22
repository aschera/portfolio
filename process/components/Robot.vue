<template>
    <div id="vue-instance">
    <button @click="addElement">
        Add an element
    </button>

    <listitem v-for="(element, index) in elements" :text="element" :key="index">
    </listitem>
    </div>
</template>

<script>
export default {
     name: 'Robot',
     gridSize: 100,

 components: {
    listitem: ListItem
  },
  data: {
    elements: []
  },
  methods: {
    addElement: function() {
      this.elements.push("This is a new instance")
    }
  }

} //default

const ListItem = {
  props: [
    'text'
  ],
  template: "<div> {{ text }} </div>",
}

</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";

</style>


/* Robot Challenge
Develop an api that moves a robot around on a grid (flat surface with defined size)
Grid position (0, 0) should be the upper left corner
You are given the initial starting point (x,y) of a robot and the direction (N,S,E,W) it is facing.
The robot receives an array of commands.
Implement commands that move the robot forward/backward (f,b).
Implement commands that turn the robot left/right (l,r).
"If a given sequence of commands encounters an obstacle or is out of bounds, the robot should stop and report the obstacle. For example if it hits an obstacle or wall it should stop immediately without executing any more commands.
Implement detection if the new position is inside the bounds before moving to the new position.
Implement obstacle detection before each move to a new square.
Test Cases
The robot is on a 100×100 grid at location (0, 0) and facing SOUTH. The robot is given the commands “fflff” and should end up at (2, 2)
The robot is on a 50×50 grid at location (1, 1) and facing NORTH. The robot is given the commands “fflff” and should end up at (1, 0)
The robot is on a 100×100 grid at location (50, 50) and facing NORTH. The robot is given the commands “fflffrbb” but there is an obstacle at (48, 50) and should end up at (48, 49)
Bonus
Ability to implement different rule sets for flat surface or a globe where you warp when you get out of bounds
Hints: use multiple classes, TDD and a healthy approach to VCS*/