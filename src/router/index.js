import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Archive from '../components/Archive.vue';
import Space from '../components/Space.vue';
import Newsletter from '../components/Newsletter.vue';
import Event from '../components/Event.vue';
import Calendar from '../components/Calendar.vue';
import Distro from '../components/Distro.vue';
import DistroItems from '../components/DistroItems.vue';
import P404 from '../components/P404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/space',
      name: 'Space',
      component: Space
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      component: Newsletter
    },
    {
      path: '/event/:id/:slug',
      name: 'Event',
      component: Event
    },
    {
      path: '/distro',
      name: 'Distro',
      component: Distro
    },
    {
      path: '/distro/:lettercode',
      name: 'DistroItems',
      component: DistroItems
    },
    {
      path: '*',
      name: 'P404',
      component: P404
    }
  ]
});
