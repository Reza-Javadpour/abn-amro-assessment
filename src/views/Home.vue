<template>
  <div class="home">
    <SectionWrapper
        sectionTitle="Home"
        icon="<i class='abn-icon icon-home'></i>"
    >
      <LoadingContent v-if="isLoading" />
      <ErrorPlaceHolder
          v-else-if="!isLoading && indexShows === null"
          @clickAction="getIndexShows()"
      />
      <div v-else class="content">
        <p class="details">Based on top Rating:</p>
        <div class="items-wrapper">
          <ShowCardItem
              v-for="item in showingItems"
              :item-data="item"
          />
        </div>
        <div
            v-if="this.indexShows.length > this.showingItems.length"
            class="more-items-action-wrapper"
        >
          <div class="more-action" @click="pickUpItems()">More Items</div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import { filterTvShowWithBanner, sortByTopRate } from '../core/utils';
import ErrorPlaceHolder from '../components/ErrorPlaceHolder.vue';
import SectionWrapper from '../components/SectionWrapper.vue';
import LoadingContent from '../components/LoadingContent.vue';
import ShowCardItem from '../components/ShowCardItem.vue';
import api from '../core/api';

export default {
  name: 'home',
  components: {SectionWrapper, ShowCardItem, LoadingContent, ErrorPlaceHolder},
  data() {
    return {
      showingItems: [],
      indexShows: null,
      isLoading: false,
      showingItemsCount: 0
    }
  },
  mounted() {
    this.getIndexShows();
  },
  methods: {
    async getIndexShows() {
      this.isLoading = true;
      await api.getTvShows().then((response) => {
        const withBanner = filterTvShowWithBanner(response.data)
        this.indexShows = sortByTopRate(withBanner)
        this.pickUpItems();
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    },
    pickUpItems() {
      if (
          this.indexShows &&
          this.indexShows.length &&
          this.indexShows.length > this.showingItems.length
      ) {
        const nextStepItemsCount = this.showingItems.length + 30
        this.showingItems = this.indexShows.slice(0, nextStepItemsCount);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .home {
    .content {
      .details {
        font-weight: 900;
        margin-bottom: 30px;
        color: $secondary-light-color;
      }
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        > * {
          margin-right: 20px;
          margin-bottom: 40px;
        }
      }
      .more-items-action-wrapper {
        display: flex;
        margin-top: 50px;
        margin-bottom: 20px;
        justify-content: center;
        .more-action {
          color: #333;
          width: 150px;
          height: 40px;
          display: flex;
          cursor: pointer;
          align-items: center;
          border-radius: 20px;
          justify-content: center;
          font-weight: 900;
          background-color: $primary-color;
        }
      }
    }
  }
  @media (max-width: $tablet-size-breakpoint) {
    .home {
      .items-wrapper {
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .home {
      .items-wrapper {
        flex-direction: column;
        > * {
          margin-right: 0;
        }
      }
    }
  }
</style>
