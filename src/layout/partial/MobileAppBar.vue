<template>
  <div class="mobile-app-bar">
    <div class="items">
      <router-link to="/home" class="item">
        <i class="abn-icon icon-home"></i>
      </router-link>
      <router-link to="/tv-shows?genre=&search=&page=1" class="item">
        <i class="abn-icon icon-television"></i>
      </router-link>
      <router-link to="/genres?genre=&page=1" class="item">
        <i class="abn-icon icon-tags"></i>
      </router-link>
      <router-link to="/about" class="item">
        <i class="abn-icon icon-info-circled"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileAppBar'
};
</script>

<style lang="scss" scoped>
  .mobile-app-bar {
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: #0d0d12;
    box-shadow: 0 0 13px 0 #07070a;
    > .items {
      width: 100%;
      height: 80px;
      display: flex;
      max-width: 400px;
      align-items: center;
      justify-content: center;
      > .item {
        width: 80px;
        height: 60px;
        display: flex;
        font-size: 25px;
        transition: 0.4s;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
        filter: grayscale(2) brightness(0.7);
        &:last-child {
          margin-right: 0;
        }
        &.active {
          filter: unset;
          transition: 0.2s;
        }
      }
    }
  }
</style>
