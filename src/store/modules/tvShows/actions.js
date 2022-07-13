import { GET_TV_SHOW, GET_TV_SHOWS, GET_TV_SHOWS_IN_QUERY } from './action-type';
import { SAVE_TV_SHOW, SAVE_TV_SHOWS } from './mutation-type';
import { findTvShowsInQuery } from '../../../core/utils';
import { HTTP } from '../../../core/api';

export default {
  [GET_TV_SHOWS_IN_QUERY] ({commit, dispatch}, query = '') {
    return new Promise((resolve, reject) => {
      HTTP.get(`search/shows?q=${query}`).then(res => {
        commit(SAVE_TV_SHOWS, findTvShowsInQuery(res.data));
        resolve(res.data);
      }).catch(e => {
        commit(SAVE_TV_SHOWS, null);
        reject(e);
      })
    })
  },
  [GET_TV_SHOWS] ({commit, dispatch}, page = 0) {
    return new Promise((resolve, reject) => {
      HTTP.get(`show?page=${page}`).then(res => {
        commit(SAVE_TV_SHOWS, res.data);
        resolve(res.data);
      }).catch(e => {
        commit(SAVE_TV_SHOWS, null);
        reject(e);
      })
    })
  },
  [GET_TV_SHOW] ({commit, dispatch}, tvShowId) {
    return new Promise((resolve, reject) => {
      HTTP.get(`shows/${tvShowId}`).then(res => {
        commit(SAVE_TV_SHOW, res.data);
        resolve(res.data);
      }).catch(e => {
        reject(e);
      })
    })
  }
}
