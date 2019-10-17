<!-- // ------------------------------------------------------------------------------------------- // -->
<!-- // -------------------------------------- App Component -------------------------------------- // -->

<template>
  <div id="main-app">

    <!-- HEADER -->
    <app-header :strings= "strings"></app-header>

    <!-- MAIN -->
    <div class="main">
      <div class="page" id="petratings">
        <div class="container">

          <div class="row flex">

            <div class="col menu">

              <nav-menu :Items = 'filteredApts'></nav-menu>

            </div><!-- col -->

            <div class="col content">
              <app-main-section
                :Items = 'filteredApts'>
              </app-main-section>
              <!--
              <add-Item
                @addRecord="addItem" />
              <search-Items
                :myKey = "filterKey"
                :myDir = "filterDir"
                @searchRecords='searchItems'
                @keyChange = "changeKey"
                @dirChange = "changeDir" />
              <Item-list
                :Items = 'filteredApts'
                @remove = 'removeItem' />
                -->
            </div><!-- col -->

          </div><!-- row -->
        </div><!-- container -->

      </div><!-- petratings page -->
    </div><!-- main -->

    <!-- FOOTER-->
    <p class=" u-center-text">
      <a href="#start" class="btn-text">
        Go back up ↑
      </a>
    </p>
    <app-footer :strings= "strings"></app-footer>


  </div>
</template>

<script>

import _ from 'lodash';
import moment from 'moment';
import AppHeader from './components/mainSections/AppHeader.vue';
import Nav from './components/Nav.vue';
import AppMainSection from './components/mainSections/AppMainSection.vue';
import AddItem from './components/AddItem.vue';
import SearchItems from './components/SearchItems.vue';
import ItemList from './components/ItemList.vue';
import AppFooter from './components/mainSections/AppFooter.vue';

export default {
  name: 'MainApp',

  menu:[
        {"text":"Home", "url": "#main-app"},
        {"text":"Home1", "url": "#main-app"},
        {"text":"Home2", "url": "#main-app"}
        ],

  data() {
    return {
      theItems: [],
      strings: {},
      searchTerms: '',
      filterKey: 'itemName',
      filterDir: 'asc'
    } //return
  }, //data

  components: {
    'app-header': AppHeader,
    'nav-menu': Nav,
    'add-Item': AddItem,
    'search-Items': SearchItems,
    'app-main-section': AppMainSection,
    'Item-list': ItemList,
    'app-footer': AppFooter,
  }, //components

  created: function() {
    $.getJSON('./builds/Items.json')
      .done( info =>  {
        this.theItems = info;
    }); //getJSON
        $.getJSON('./builds/strings.json')
      .done( s =>  {
        this.strings = s;
        console.log(this.strings.title)
    }); //getJSON
  }, //created

  methods: {

    addItem: function(apt) {
      this.theItems.push(apt);
    }, //addItem

    removeItem: function(apt) {
      this.theItems = _.without(this.theItems, apt)
    }, //removeItem

    searchItems: function(terms) {
      this.searchTerms = terms;
    }, //searchItems

    changeKey: function(value) {
      this.filterKey = value;
    }, //changeKey

    changeDir: function(value) {
      this.filterDir = value;
    }, //changeKey

  }, //methods

  computed: {
    searchedApts: function() {
      return this.theItems.filter(function(item) {
        return (
          (item.itemName.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.itemAuthor.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.itemNotes.toLowerCase().match(this.searchTerms.toLowerCase()))
        )
      }.bind(this));
    }, //searchedApts

    filteredApts: function() {
      return _.orderBy(this.searchedApts, function(item) {
        return item[this.filterKey].toLowerCase();
      }.bind(this), this.filterDir);
    } //filteredApts

  } //computed
} //default

</script>

<style scoped lang="scss">

@import "./assets/_variables.scss";

.main {
    margin: 0 auto;
    color: $color-white;

  .container {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: $gutter ;
    height: inherit;
    position: relative;
    transition: $transitions;

      @media only screen and (min-width: 1600px) {
        margin-left: 70px;
      }

    &.menu {
      width: auto;
    }

    &.content {
      width: calc(100% - $menu-width);
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

} // end main

</style>