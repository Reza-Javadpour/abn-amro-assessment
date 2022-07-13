import { SAVE_TV_SHOW, SAVE_TV_SHOWS } from './mutation-type';

export default {
  [SAVE_TV_SHOWS] (state, data) {
    state.tvShows = data
  },
  [SAVE_TV_SHOW] (state, data) {
    state.tvShowDetail = data
  }
}
