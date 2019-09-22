<!-- // ------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- Nav Component -------------------------------------- // -->

<template>

  <div class="ps-sidenav" id="mainSideNav" role="navigation">

    <div class="ps-sidenav--logo">
      <a href="#">
        <font-awesome-icon icon="user-secret" />
      </a>
    </div>

    <div class="ps-sidenav--links">
      <ul v-for="value in strings" v-bind:key = value>
        <li>
          <a href="#main-app">
            <font-awesome-icon icon="user-secret" class="icon"/>
            <span class="menu-item">{{value}}</span>
          </a>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>

export default {
  name: 'Nav',

  data() {
    return {
      // stuff
    } //return
  }, //data

  props: ['strings', "menu"],

  components: {
    //stuff
  }, //components

  created: function() {
    // something
  }, //created

  methods: {
    //stuff
  }, //methods

  computed: {
    //things
  } //computed
} //default

</script>

<style scoped lang="scss">

@import "../assets/_variables.scss";

.ps-sidenav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    border-right: 1px solid $color-black;
    z-index: 960;
    background-color: $color-black;
    color: $color-white;
    //overflow: hidden;
      transition: $transitions;
    z-index: 9999;
}

.ps-sidenav--links {
  position: relative;
  top: 0;
  left: 0;
  height: calc(100vh - 62px);
  width: 100%;
}

.ps-sidenav--links  ul  {margin-left: 0;}

.ps-sidenav--links  ul li {
  margin-bottom: 0;
  padding-left: 0;
  font-weight: 500;
  font-size: 85.5%;
}

.ps-sidenav--links  ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height:  3em;
  padding: 0 0.4em;
  transition: $transitions;
  color: $color-white;

  .icon {
    &.svg-inline--fa {
      height: 2em;
      width: 2em;
    }
  }
  .menu-item {
    display: none;
  }

  & span {
    padding: 0 0 0 0.5em;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: $transitions;
  }
}

.ps-sidenav--links  ul li a:hover, .ps-sidenav--links  ul li a:focus {
  background: $color-brown;
  color: $color-white;
  text-decoration: none;
}

.ps-sidenav--links  ul li a:hover .icon---1he1r path {
  fill: $color-white;
}

.ps-sidenav--links ul li:before {display: none;}
.ps-sidenav--links ul li.links-upgrade {position: relative;}
.ps-sidenav--links ul li.links-upgrade > a,
.ps-sidenav--links  ul li.links-upgrade > a:hover,
.ps-sidenav--links  ul li.links-upgrade > a:focus {
  color: $color-brown;
}

.ps-sidenav--links  ul li.links-upgrade > a:hover .icon---1he1r path {
  fill:$color-brown;
}

.ps-sidenav--links  ul li.links-upgrade > a .icon---1he1r path {
  fill: $color-brown;
}

.ps-sidenav--logo {
  width: 60px;
  height: 62px;
  border-bottom: 1px solid $color-black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ps-sidenav--logo a {
  height: 100%;
  margin: 0 18px;
  text-decoration: none;
  outline: none;
  display: flex;
  align-items: center;
}

.ps-sidenav--logo span:nth-of-type(1) {width: 24px;}
.ps-sidenav--logo span:nth-of-type(2) {width: 129px; margin-left: 18px;}

.ps-sidenav--links .ps-sidenav__upgrade {
  opacity: 0;
  transition: $transitions;
  }
.ps-sidenav--links .ps-sidenav__upgrade > div {
   font-size: 12px;
   color: $color-white;
   text-align: left;
   line-height: 18px;
   padding: 0 15px;
   margin-bottom: 20px;
}

.ps-sidenav:hover .ps-sidenav--logo span:nth-of-type(2) {
  opacity: 1;
  transform: translateX(0);
}

.ps-sidenav.sidenav-expanded {width: 185px; overflow: unset;}

.ps-sidenav.sidenav-expanded {
  box-shadow: 50px 0 100px rgba(0,0,0,0.8);}

.ps-sidenav.sidenav-expanded .ps-sidenav--logo {width: 185px;}

.ps-sidenav.sidenav-expanded .ps-sidenav--links .popover__image {
  display: block;}

.ps-sidenav.sidenav-expanded .ps-sidenav--links .ps-sidenav__upgrade {
  opacity: 100;}

.body--overlay-active .ps-sidenav {z-index: 1;}

@media only screen and (max-width: 629px) {
  .ps-sidenav,
  .ps-sidenav--links ul {
    overflow: hidden;
  }

  .ps-sidenav--links .ps-sidenav__upgrade {
    opacity: 100;
  }

  .ps-sidenav.sidenav-expanded .ps-sidenav--links ul {
    overflow: unset;
  }
}

@media only screen and (min-width: 630px) {
  .ps-sidenav {
    transition:$transitions;
    width: 60px;
    overflow: hidden;
  }
}

@media only screen and (min-width: 1600px) {
  .block_freeuser {
    margin-left: 0;
    }

  .block_freeuser > .main > .clearfix > .column-control > div > .container > .row > .large-12  {
    margin-left: 185px;
    width: calc(100% - 185px);
  }

  .ps-sidenav  {
    left: 0;
    width: 185px;
    box-shadow: none;
    overflow: unset;
  }

  .ps-sidenav--logo {
    width:185px;
  }

  .ps-sidenav--links .ps-sidenav__upgrade {
    opacity: 100;
  }

  .ps-sidenav.sidenav-expanded {
    box-shadow: none;
  }

  .ps-sidenav--links  ul li {
    transition: $transitions;
    font-size: 100%;

  a .icon {
    &.svg-inline--fa {
      height: 1em;
      width: 1em;
    }
  }
  a .menu-item {
    display: inline;
  }

  }

}

</style>