import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  timeout: 10000
})

export default {
  getTvShows(page = 0) {
    if(page < 0 && isNaN(page)) {
      page = 0;
    }
    return HTTP.get(`show?page=${page}`)
  },
  getQueryTvShows(query = '') {
    return HTTP.get(`search/shows?q=${query}`)
  },
  getTvShowDetails(tvShowId) {
    if(tvShowId) {
      return HTTP.get(`shows/${tvShowId}`)
    }
  },
  getTvShowCast(tvShowId) {
    if(tvShowId) {
      return HTTP.get(`shows/${tvShowId}/cast`)
    }
  },
  getPeopleInfo(peopleId) {
    if(peopleId) {
      return HTTP.get(`people/${peopleId}`)
    }
  },
}
