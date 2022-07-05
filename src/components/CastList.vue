<template>
  <div class="cast-list">
    <div v-if="isLoading" class="loading-wrapper">
      <LoadingContent />
    </div>
    <ErrorPlaceHolder
        v-else-if="!isLoading && castData === null"
        @clickAction="getCast()"
    />
    <div v-else class="content">
      <h2 class="title">Artists:</h2>
      <div class="people-list">
        <router-link
            :to="`/biography/${people.id}`"
            v-for="people in castData"
            class="people-item"
        >
          <img :src="people.image?.medium || ''" :alt="people.name">
          <div class="name">{{people.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorPlaceHolder from './ErrorPlaceHolder.vue';
import LoadingContent from './LoadingContent.vue';
import api from '../core/api';

export default {
  name: 'CastList',
  components: {LoadingContent, ErrorPlaceHolder},
  data() {
    return {
      isLoading: false,
      castData: null
    }
  },
  props: {
    tvShowId: {
      type: Number,
      default: null
    }
  },
  mounted() {
    this.getCast()
  },
  methods: {
    async getCast() {
      if (this.tvShowId) {
        this.isLoading = true;
        api.getTvShowCast(this.tvShowId).then(response => {
          this.castData = response.data.map(item => item.person);
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .cast-list {
    > .content {
      > .title {
        color: $primary-color;
      }
      .people-list {
        display: flex;
        flex-wrap: wrap;
        .people-item {
          width: 120px;
          height: 180px;
          cursor: pointer;
          overflow: hidden;
          margin-right: 15px;
          margin-bottom: 15px;
          > img {
            width: 120px;
            height: 150px;
            transition: 0.2s;
            border-radius: 15px;
            filter: brightness(0.8);
            background-color: #22242E;
          }
          > .name {
            font-size: 12px;
            transition: 0.2s;
          }
          &:hover {
            > img {
              filter: brightness(1);
            }
            > .name {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
</style>
