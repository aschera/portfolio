<!-- // ------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- Nav Component -------------------------------------- // -->

<template>

  <div class="ps-sidenav" id="mainSideNav" role="navigation">

    <div class="ps-sidenav--logo">
      <a href="http://google.com"> <!-- TODO : add correct link or remove-->
        <font-awesome-icon icon="user-secret" />
      </a>
    </div>

    <div class="ps-sidenav--links">
      <ul v-for="value in filteredApts" v-bind:key = value>
        <li>
          <a :href="value.url">
            <font-awesome-icon icon="user-secret" class="icon"/>
            <span class="menu-item">
              {{value.name}}
            </span>
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
      filteredApts : [{
        name: 'name1',
        url: 'url1'
      },{
        name: 'name2',
        url: 'url2'
      },{
        name: 'name3',
        url: 'url3'
      }]
    } //return
  }, //data

  props: [],

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
      transition: $transitions;
    z-index: 9999;

    &:hover .ps-sidenav--logo span:nth-of-type(2) {
      opacity: 1;
      transform: translateX(0);
    }

} // end ps-sidenav class

.ps-sidenav--links {
  position: relative;
  top: 0;
  left: 0;
  height: calc(100vh - 62px);
  width: 100%;

  ul  {
    margin-left: 0;

    li {
      margin-bottom: 0;
      padding-left: 0;
      font-weight: 500;
      font-size: 85.5%;

      &:before {
        display: none;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height:  3em;
        padding: 0 0.4em;
        transition: $transitions;
        color: $color-white;

        // the icon on every menu item
        .icon {
           display: block;

          &.svg-inline--fa {
            height: 1em;
            width: 1em;
          }

          @media only screen and (min-width: 1600px) {
            display: none;
          }
        }

        // the text on the menu items.
        .menu-item {
          display: none;

          @media only screen and (min-width: 1600px) {
            display: block;
          }
        }

        & span {
          padding: 0 0 0 $gutter ;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: $transitions;
        }

        &:hover,
        &:focus {
          background: $color-brown;
          color: $color-white;
          text-decoration: none;
        }

        &:hover .icon---1he1r path {
          fill: $color-white;
        }
      }

    }
  }

}// end .ps-sidenav--links class

.ps-sidenav--logo {
  width: $menu-width;
  height: 62px;
  border-bottom: 1px solid $color-black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  a {
    height: 100%;
    margin: 0 18px;
    text-decoration: none;
    outline: none;
    display: flex;
    align-items: center;


  }

  span:nth-of-type(1) {
    width: $gutter;
  }
  span:nth-of-type(2) {
    width: 129px;
    margin-left: 18px;
  }

} // end .ps-sidenav--logo class

@media only screen and (max-width: 629px) {
  .ps-sidenav,
  .ps-sidenav--links ul {
    overflow: hidden;
  }
}

@media only screen and (min-width: 630px) {
  .ps-sidenav {
    transition:$transitions;
    width: $menu-width;
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