import Vue from 'vue';
import * as firebase from 'firebase/app';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import firebaseConfig from './config';
import 'firebase/functions';

const fb = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-multi-assign
Vue.fb = Vue.prototype.$fb = fb;

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
