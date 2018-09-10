import Vue from 'vue';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import VueHead from 'vue-head';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueHead);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
