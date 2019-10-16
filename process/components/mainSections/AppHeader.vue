<!-- // -------------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Header Component -------------------------------------- // -->

<template>

  <header>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <h1>{{strings.header}}</h1>
          </a>
        </div><!-- navbar-header -->
      </div><!-- container -->
    </nav>
  </header>

</template>

<script>

export default {

  props: ['strings'],

  name: 'AppHeader',
  data() {
    return {
     // stuff
    } //return
  }, //data
  methods: {
    // functions
  } //methods
} //default
</script>

<style scoped lang="scss">

@import "../../assets/_variables.scss";

header {
    height: 15vh;
    margin-left: 60px;
    background-image: url('../../assets/headerBg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 8%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 8%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 8%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 8%);

    overflow: unset;
    margin-left: 60px;
    transition: $transitions;

    @media only screen and (min-width: 1600px) {
      margin-left:185px;
    }


  // main wrapper
  nav.navbar-default {
    background-color: transparent;
    border-color: transparent;
    height: $header-height;
    margin: 0;
    padding: 0;

    .navbar-brand {

      h1 {
        color: $color-grey;
        text-align: center;
      }

    }

  } // end .navbar-default class

  // inner wrapper
  .container {

    & >.navbar-header {

    }

  } // end .container class

} // end header element

</style>
