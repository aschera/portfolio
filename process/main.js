import './assets/style.css';
import './assets/Items.json';
import './assets/strings.json';

import Vue from 'vue';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;


var vm = new Vue({
  el: '#app',
  render: h => h(App)
})