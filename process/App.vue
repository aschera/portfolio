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

            <div class="col col-sm-6 menu">

              <nav-menu :strings= "strings.menu" :menu = "menu"></nav-menu>

            </div><!-- col-sm-16 -->

            <div class="col col-sm-6 content">
              <app-main-section
                :appointments = 'filteredApts'>
              </app-main-section>
              <!--
              <add-appointment
                @addRecord="addAppointment" />
              <search-appointments
                :myKey = "filterKey"
                :myDir = "filterDir"
                @searchRecords='searchAppointments'
                @keyChange = "changeKey"
                @dirChange = "changeDir" />
              <appointment-list
                :appointments = 'filteredApts'
                @remove = 'removeItem' />
                -->
            </div><!-- col-sm-6 -->

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
import AddAppointment from './components/AddAppointment.vue';
import SearchAppointments from './components/SearchAppointments.vue';
import AppointmentList from './components/AppointmentList.vue';
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
      theAppointments: [],
      strings: {},
      searchTerms: '',
      filterKey: 'petName',
      filterDir: 'asc'
    } //return
  }, //data

  components: {
    'app-header': AppHeader,
    'nav-menu': Nav,
    'add-appointment': AddAppointment,
    'search-appointments': SearchAppointments,
    'app-main-section': AppMainSection,
    'appointment-list': AppointmentList,
    'app-footer': AppFooter,
  }, //components

  created: function() {
    $.getJSON('./builds/appointments.json')
      .done( info =>  {
        this.theAppointments = info;
    }); //getJSON
        $.getJSON('./builds/strings.json')
      .done( s =>  {
        this.strings = s;
        console.log(this.strings.title)
    }); //getJSON
  }, //created

  methods: {

    addAppointment: function(apt) {
      this.theAppointments.push(apt);
    }, //addAppointment

    removeItem: function(apt) {
      this.theAppointments = _.without(this.theAppointments, apt)
    }, //removeItem

    searchAppointments: function(terms) {
      this.searchTerms = terms;
    }, //searchAppointments

    changeKey: function(value) {
      this.filterKey = value;
    }, //changeKey

    changeDir: function(value) {
      this.filterDir = value;
    }, //changeKey

  }, //methods

  computed: {
    searchedApts: function() {
      return this.theAppointments.filter(function(item) {
        return (
          (item.petName.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase()))
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
    background-image: linear-gradient(to bottom, rgba(62,147,154,0), #5b3f4e);
    margin: 0 auto;
    color: white;

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
    padding: 24px 24px 24px 8px;
    width: calc(50% - 60px);
    height: inherit;
    position: relative;
  }

  .col.menu {
    width: calc(20% - 60px);
  }
  .col.content {
    width: calc(80% - 60px);
  }

  .flex {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

} // end main

</style>