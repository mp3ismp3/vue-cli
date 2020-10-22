import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile.vue';

import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router