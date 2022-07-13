import { createStore } from 'vuex';
import tvShows from './modules/tvShows';

export const store = createStore({
  modules: {
    tvShows,
  }
})
