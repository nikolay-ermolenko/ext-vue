// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import './assets/css/theme-material-all_1.css';
import './assets/css/theme-material-all_2.css';

Vue.use(VueRouter);
// import Toolbar from "./components/Toolbar";
// import Card from "./components/Card";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
