import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app.vue';
import router from './router';
import VueHead from 'vue-head';

Vue.use(BootstrapVue);
Vue.use(VueHead);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
