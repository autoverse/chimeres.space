import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Archive from '../components/archive.vue';
import Space from '../components/space.vue';
import Newsletter from '../components/newsletter.vue';
import Event from '../components/event.vue';
import Calendar from '../components/calendar.vue';
import p404 from '../components/p404.vue';

Vue.use(Router);

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/archive',
            name: 'archive',
            component: Archive,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/space',
            name: 'space',
            component: Space,
        },
        {
            path: '/newsletter',
            name: 'newsletter',
            component: Newsletter,
        },
        {
            path: '/event/:id/:slug',
            name: 'event',
            component: Event
        },
        {
            path: '*',
            name: 'p404',
            component: p404
        }
    ],
});
