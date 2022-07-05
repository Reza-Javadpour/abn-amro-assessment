<template>
  <div class="tv-shows">
    <SectionWrapper sectionTitle="TV Shows" icon="<i class='abn-icon icon-television'></i>">
      <CustomTable
        :table-data="movies"
        :is-loading="isLoading"
        @retryAction="getTvShows()"
      ></CustomTable>
    </SectionWrapper>
  </div>
</template>

<script>

import { findTvShowsInQuery } from '../core/utils';
import SectionWrapper from '../components/SectionWrapper.vue';
import CustomTable from '../components/CustomTable.vue';
import api from '../core/api';

export default {
  name: 'tv-shows',
  components: {CustomTable, SectionWrapper},
  data() {
    return {
      movies: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getTvShows();
  },
  watch:{
    $route(to, from) {
      if(to.name === 'TvShows' && to.query.genre === from.query.genre) {
        this.getTvShows();
      }
    }
  },
  methods: {
    async getTvShows() {
      this.isLoading = true;
      this.movies = null;
      if(this.$route.query.search) {
        api.getQueryTvShows(this.$route.query.search).then((response) => {
          this.movies = findTvShowsInQuery(response.data);
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        });
      } else {
        api.getTvShows(this.$route.query.page - 1).then((response) => {
          this.movies = response.data;
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.tv-shows {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
