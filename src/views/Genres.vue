<template>
  <div class="genres">
    <SectionWrapper
        sectionTitle="Genres"
        icon="<i class='abn-icon icon-tags'></i>"
    >

      <div class="genres-wrapper">
        <GroupButton
            :items="genresItems"
            :selectedItem="selectedGenre"
            @select="handleSelectGenre($event)"
        ></GroupButton>
      </div>

      <div class="table-wrapper">
        <CustomTable
            :table-data="movies"
            :is-loading="isLoading"
            :genre="selectedGenre"
        ></CustomTable>
      </div>

    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '../components/SectionWrapper.vue';
import { genresItems } from '../core/constants/genres-items';
import GroupButton from '../components/GroupButton.vue';
import CustomTable from '../components/CustomTable.vue';
import api from '../core/api';

export default {
  name: 'Genres',
  components: {SectionWrapper, GroupButton, CustomTable},
  data() {
    return {
      genresItems,
      movies: null,
      isLoading: false,
      selectedGenre: ''
    }
  },
  created() {
    this.getTvShows();
  },
  mounted() {
    this.handleSelectGenre();
  },
  watch:{
    $route(to, from) {
      if(to.query.genre !== from.query.genre) {
        this.handleSelectGenre();
      }
      if(to.name === 'Genres' && to.query.genre === from.query.genre) {
        this.getTvShows();
      }
    }
  },
  methods: {
    handleSelectGenre(genre = this.$route.query.genre) {
      this.selectedGenre = genre || '';
      this.updateRoute(genre);
    },
    updateRoute(
        genre = this.$route.query.genre || '',
        page = this.$route.query.page || 1,
    ) {
      this.$router.push({ path: this.$route.path, query: {genre, page}});
    },
    async getTvShows() {
      this.isLoading = true;
      this.movies = null;
      await api.getTvShows(this.$route.query.page - 1).then((response) => {
        this.movies = response.data;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  .genres {
    .table-wrapper {
      margin-top: 30px;
    }
  }
</style>
