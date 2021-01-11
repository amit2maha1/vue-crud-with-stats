import Vue from 'vue';
import './registerServiceWorker';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
