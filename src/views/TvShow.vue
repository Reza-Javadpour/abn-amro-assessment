<template>
  <div class="tv-show">
    <SectionWrapper
        :sectionTitle="pageTitle"
        icon="<i class='abn-icon icon-video'></i>"
        hasBackAction
    >
      <LoadingContent v-if="isLoading" />
      <ErrorPlaceHolder
          v-else-if="!isLoading && tvShow === null"
          @clickAction="getShow()"
      />
      <div v-else>

        <div class="first-section">
          <div class="section-banner">
            <img
                v-if="tvShow?.image?.medium"
                :src="tvShow.image.medium"
                :alt="tvShow.name || 'TV Show banner'"
            >
            <img
                v-else
                :src="tvShow.image.original"
                :alt="tvShow.name || 'TV Show banner'"
            >
          </div>
          <div class="section-information">
            <h1>{{ tvShow.name || '' }}</h1>
            <p
              v-if="tvShow.summary"
              v-html="tvShow.summary"
            ></p>
            <p v-else>No description</p>
          </div>
        </div>

        <div class="details-section">
          <div class="detail-item">
            <div class="item-title">Language:</div>
            <div class="item-value">{{tvShow.language}}</div>
          </div>

          <div class="detail-item">
            <div class="item-title">Schedule:</div>
            <div class="item-value">{{schedule}}</div>
          </div>

          <div class="detail-item">
            <div class="item-title">Rating:</div>
            <div class="item-value">{{tvShow.rating.average || 'N/A'}}</div>
          </div>

          <div class="detail-item">
            <div class="item-title">
              {{tvShow.genres.length > 1 ? 'Genres:' : 'Genre:'}}
            </div>
            <div class="item-value">
              <ArrayCell
                :items="tvShow.genres"
                @select="selectGenre($event)"
              />
            </div>
          </div>
        </div>

        <div class="artist-section">
          <CastList :tv-show-id="tvShow.id" />
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import { GET_TV_SHOW } from '../store/modules/tvShows/action-type';
import ErrorPlaceHolder from '../components/ErrorPlaceHolder.vue';
import SectionWrapper from '../components/SectionWrapper.vue';
import LoadingContent from '../components/LoadingContent.vue';
import ArrayCell from '../components/ArrayCell.vue';
import CastList from '../components/CastList.vue';
import { store } from '../store';

export default {
  name: 'TvShow',
  components: {ArrayCell, SectionWrapper, LoadingContent, ErrorPlaceHolder, CastList},

  data() {
    return {
      isLoading: false,
      tvShowId: this.$route.params.tvShowId
    }
  },
  mounted() {
    if (this.tvShow) {
      if (this.tvShow.id !== +this.$route.params.tvShowId) {
        this.getShow();
      }
    } else {
      this.getShow();
    }
  },
  computed: {
    pageTitle() {
      if(this.tvShow?.name) {
        return `TV Show - ${this.tvShow.name}`
      } else {
        return 'TV Show';
      }
    },
    schedule() {
      return (this.tvShow.schedule?.days?.toString() || 'Everyday') + ' - ' + (this.tvShow.schedule?.time || 'N/A')
    },
    tvShow() {
      return store.state.tvShows.tvShowDetail
    }
  },
  methods: {
    async getShow() {
      this.isLoading = true;
      store.dispatch(GET_TV_SHOW, this.tvShowId).finally(() => {
        this.isLoading = false;
      });
    },
    selectGenre(item) {
      if(item) {
        this.$router.push(`/tv-shows?genre=${item}`)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .tv-show {
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    .first-section {
      display: flex;
      > .section-banner {
        width: 100%;
        min-width: 210px;
        max-width: 210px;
        img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 0 17px 0 #121213;
        }
      }
      > .section-information {
        flex-grow: 1;
        display: flex;
        max-width: 700px;
        margin-top: auto;
        margin-left: 40px;
        flex-direction: column;
        > h1 {
          color: $primary-color;
        }
      }
    }
    .details-section {
      margin-top: 30px;
      .detail-item {
        height: 40px;
        display: flex;
        align-items: center;
        > .item-title {
          width: 100px;
          font-weight: 900;
        }
        > .item-value {
        }
      }
    }
    .artist-section {
      margin-top: 30px;
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .tv-show {
      .first-section {
        flex-direction: column;
        > .section-banner {
          display: flex;
          max-width: 100%;
          justify-content: center;
          > img {
            border-radius: 15px;
          }
        }
        > .section-information {
          margin-left: 0;
        }
      }
    }
  }
</style>
