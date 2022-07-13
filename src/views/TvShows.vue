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

import { GET_TV_SHOWS, GET_TV_SHOWS_IN_QUERY } from '../store/modules/tvShows/action-type';
import SectionWrapper from '../components/SectionWrapper.vue';
import CustomTable from '../components/CustomTable.vue';
import { store } from '../store';

export default {
  name: 'tv-shows',
  components: {CustomTable, SectionWrapper},
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    if (!this.movies || !this.movies.length || this.$route.query.search) {
      this.getTvShows();
    }
  },
  computed: {
    movies() {
      return store.state.tvShows.tvShows
    }
  },
  watch: {
    $route(to, from) {
      if(to.name === 'TvShows' && to.query.genre === from.query.genre) {
        this.getTvShows();
      }
    }
  },
  methods: {
    getTvShows() {
      this.isLoading = true;
      this.movies = null;
      if(this.$route.query.search) {
        store.dispatch(GET_TV_SHOWS_IN_QUERY, this.$route.query.search).finally(() => {
          this.isLoading = false;
        });
      } else {
        store.dispatch(GET_TV_SHOWS, this.$route.query.page - 1).finally(() => {
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
