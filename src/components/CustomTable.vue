<template>
  <div class="custom-table">
    <LoadingContent v-if="isLoading" />
    <ErrorPlaceHolder
        v-else-if="!isLoading && tableData === null"
        @clickAction="handleRetry()"
    />
    <div v-else>
      <div
          v-if="!tableData || showingMovies.length === 0"
          class="table-placeholder"
      >
        <p>No data</p>
      </div>
      <div v-else class="table-wrapper">
        <div class="table">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Genres</th>
              <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in showingMovies" :key="row.id">
              <td>
                <div
                    v-if="row.id"
                    class="row-title"
                    @click="handleClickRow(row.id)"
                >{{ row.name }}</div>
              </td>
              <td>
                <ArrayCell :items="row.genres" @select="setGenre($event)"/>
              </td>
              <td>
                {{ row.rating.average || 'N/A' }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div
            v-if="!this.$route?.query?.search"
            class="pagination"
        >
          <button
              class="prev-page"
              :disabled="pageId < 2"
              @click="changePage(pageId - 1)"
          >
            <i class="abn-icon icon-left-sign" style="color: #191A22"></i>
          </button>
          <div class="current-page">{{pageId}}</div>
          <button
              class="next-page"
              @click="changePage(pageId + 1)"
          >
            <i class="abn-icon icon-right-sign" style="color: #191A22"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorPlaceHolder from './ErrorPlaceHolder.vue';
import LoadingContent from './LoadingContent.vue';
import ArrayCell from './ArrayCell.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'CustomTable',
  components: {ArrayCell, Spinner, LoadingContent, ErrorPlaceHolder},
  data() {
    return {
      queryParams: '',
      showingMovies: [],
      pageId: +this.$route?.query?.page || 1,
      selectedGenre: this.$route?.query?.genre
    };
  },
  props: {
    tableData: {
      type: Array,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    genre: {
      type: String,
      default: ''
    },
  },
  watch:{
    genre(newValue) {
      this.setGenre(newValue)
    },
    tableData() {
      this.prepareData();
    }
  },
  mounted() {
    this.prepareData();
  },
  methods: {
    handleRetry() {
      this.$emit('retryAction', true);
    },
    handleClickRow(id) {
      this.$router.push(`/tv-show/${id}`);
    },
    setGenre(genre) {
      this.selectedGenre = genre || '';
      this.updateRoute(genre);
      this.prepareData();
    },
    changePage(pageId) {
      if(pageId) {
        this.pageId = pageId;
        this.updateRoute();
      }
    },
    updateRoute(
        genre = this.$route?.query?.genre || '',
        page = this.pageId || 1,
        path = this.$route.path,
    ) {
      this.$router.push({ path, query: {genre, page}});
    },
    prepareData() {
      if(this.selectedGenre) {
        this.showingMovies = this.tableData.filter(item => item.genres.includes(this.selectedGenre));
      } else {
        this.showingMovies = this.tableData;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .custom-table {
    .table-placeholder {
      width: 100%;
      height: 300px;
      display: flex;
      font-size: 23px;
      align-items: center;
      border-radius: 25px;
      justify-content: center;
      border: dashed 1px #535564;
      > p {
        color: #535564;
      }
    }
    .table-wrapper {
      > .table {
        .row-title {
          cursor: pointer;
          transition: 0.2s;
          &:hover {
            color: $primary-color;
          }
        }
      }
      > .pagination {
        display: flex;
        margin-top: 30px;
        justify-content: center;
        > * {
          width: 40px;
          height: 40px;
          display: flex;
          margin-left: 5px;
          margin-right: 5px;
          align-items: center;
          justify-content: center;
          &.prev-page,
          &.next-page {
            border: none;
            outline: none;
            color: #191A22;
            cursor: pointer;
            border-radius: 50%;
          }
          &.prev-page {
            background-color: $primary-color;
          }
          &.current-page {
            color: #fff;
            font-weight: 900;
          }
          &.next-page {
            background-color: $primary-color;
          }
          &:disabled {
            opacity: 0.25;
            cursor: not-allowed;
            filter: grayscale(1);
          }
        }
      }
    }
  }
</style>
