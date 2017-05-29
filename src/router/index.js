import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Schedule from '../components/schedule.vue';
import Space from '../components/space.vue';
import Newsletter from '../components/newsletter.vue';
import Contact from '../components/contact.vue';
import Event from '../components/event.vue';
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
            path: '/schedule',
            name: 'schedule',
            component: Schedule,
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
            path: '/contact',
            name: 'contact',
            component: Contact,
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
