import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import TvShow from '../views/TvShow.vue';
import Genres from '../views/Genres.vue';
import Contact from '../views/Contact.vue';
import TvShows from '../views/TvShows.vue';
import Biography from '../views/Biography.vue';

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/genres', name: 'Genres', component: Genres},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/tv-shows', name: 'TvShows', component: TvShows},
  {path: '/tv-show/:tvShowId', name: 'TvShow', component: TvShow},
  {path: '/biography/:peopleId', name: 'Biography', component: Biography}
]

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
})
