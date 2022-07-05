<template>
  <router-link
      v-if="!!itemData"
      :to="`/tv-show/${itemData.id}`"
      class="show-card-item"
  >
    <img
        v-if="itemData.image.medium"
        :src="itemData.image.medium"
        :alt="itemData.name || 'TV Show banner'"
    >
    <div class="details">
      <div class="rate">
        {{itemData.rating?.average || 'N/A'}}
      </div>
      <div class="title">
        {{itemData.name || 'N/A'}}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ShowCardItem',
  props: {
    itemData: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .show-card-item {
    width: 200px;
    height: 275px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 0 9px 0 #0c0c0c;
    > img {
      left: 0;
      right: 0;
      width: 100%;
      transition: 0.5s;
      position: absolute;
    }
    > .details {
      left: 0;
      right: 0;
      opacity: 0;
      height: 50px;
      display: flex;
      bottom: -140px;
      transition: 0.5s;
      position: absolute;
      padding-left: 12px;
      padding-bottom: 12px;
      justify-content: end;
      flex-direction: column;
      background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,1));
      > .rate {
        right: 12px;
        color: #333;
        bottom: 12px;
        padding: 3px;
        display: flex;
        line-height: 1;
        font-size: 10px;
        font-weight: 900;
        position: absolute;
        border-radius: 3px;
        align-items: center;
        justify-content: center;
        background-color: $primary-color;
      }
      > .title {
        font-weight: 900;
        color: $primary-color;
      }
    }
    &:hover {
      > img {
        transform: scale(1.3);
        transition-duration: 10s;
        transition-timing-function: linear;
      }
      > .details {
        bottom: 0;
        opacity: 1;
        transition: 0.3s;
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .show-card-item {
      width: 100%;
      height: auto;
      padding-top: 140%;
      border-radius: 6vw;
      margin-bottom: 10vw !important;
      > img {
        top: 0;
      }
    }
  }
</style>
