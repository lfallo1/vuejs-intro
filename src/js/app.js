import Vue from 'vue';
import UserRow from '../templates/UserRow.vue';
import App from '../templates/App.vue';

Vue.component('user-row', UserRow);

var app = new Vue({
  el: '#app',
  render: h=>h(App)
});
