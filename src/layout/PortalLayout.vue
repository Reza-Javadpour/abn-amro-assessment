<template>
  <div class="portal-layout">
    <div class="sidebar-wrapper">
      <Sidebar></Sidebar>
    </div>
    <div class="mobile-app-bar">
      <MobileAppBar />
    </div>
    <div class="content-wrapper">
      <div class="header-wrapper">
        <MainHeader />
      </div>
      <div class="view-wrapper content-scrollbar">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './partial/Sidebar.vue';
import MainHeader from './partial/MainHeader.vue';
import MobileAppBar from './partial/MobileAppBar.vue';

export default {
  name: 'portal-layout',
  components: {Sidebar, MainHeader, MobileAppBar}
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .portal-layout {
    display: flex;
    overflow: hidden;
    min-height: 100vh;
    max-height: 100vh;
    .sidebar-wrapper {
    }
    .mobile-app-bar {
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
      display: none;
      position: fixed;
    }
    .content-wrapper {
      flex-grow: 1;
      overflow: hidden;
      max-height: 100vh;
      .header-wrapper {
        height: 100px;
      }
      .view-wrapper {
        overflow-y: scroll;
        padding: 0 30px 50px;
        max-height: calc(100vh - 150px);
      }
    }
  }
  @media (max-width: $tablet-size-breakpoint) {
    .portal-layout {
      .sidebar-wrapper {
        display: none;
      }
      .mobile-app-bar {
        display: flex;
      }
      .content-wrapper {
        padding-bottom: 80px;
        .header-wrapper {
          height: 70px;
          display: flex;
          align-items: center;
        }
        .view-wrapper {
          padding-left: 16px;
          padding-right: 4px;
          max-height: calc(100vh - 200px);
        }
      }
    }
  }
</style>
