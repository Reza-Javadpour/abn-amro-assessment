<template>
  <div class="abn-sidebar">
    <div class="logo-wrapper">
      <div class="logo">
        <AbnAmroLogo></AbnAmroLogo>
      </div>
      <div class="title">ABN TV</div>
    </div>
    <div class="content fade-in-10">
      <div class="items-wrapper">
        <div
            class="pointer"
            :style="{'--top': (selectedItem.id * 70) - 35 + 'px'}"
        ><div /></div>
        <div
            v-for="item in menuItems"
            :key="item.id"
            :class="{item: true, active: item.id === selectedItem.id}"
            v-html="item.icon"
            @click="selectMenuItem(item)"
        ></div>
      </div>
      <div class="sub-items-wrapper">
        <router-link
            v-for="subItem in selectedItem.children"
            :key="subItem.id"
            :to="subItem.route"
            class="sub-item"
        >
          <div class="icon" v-html="subItem.icon"></div>
          <div class="title">{{subItem.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { sidebarItems } from '../../core/constants/sidebar-items.js';
import AbnAmroLogo from '../../components/AbnAmroLogo.vue';

export default {
  name: 'sidebar',
  components: { AbnAmroLogo },
  data() {
    return {
      menuItems: sidebarItems,
      selectedItem: {}
    }
  },
  mounted() {
    this.selectedItem = this.menuItems[0];
  },
  methods: {
    selectMenuItem(item) {
      if(item.id !== this.selectedItem.id) {
        this.selectedItem = item;
        this.$router.push({ path: item.children[0].route});
      }
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  .abn-sidebar {
    width: 300px;
    min-height: 100vh;
    max-height: 100vh;
    padding-left: 30px;
    > .logo-wrapper {
      height: 160px;
      display: flex;
      font-size: 40px;
      padding-left: 20px;
      align-items: center;
      > .logo {
        width: 60px;
        height: 88px;
        margin-right: 20px;
      }
      > .title {
        font-weight: 900;
        margin-right: 20px;
        color: $primary-color;
      }
    }
    > .content {
      display: flex;
      margin-top: 30px;
      > div {
        &.items-wrapper {
          width: 60px;
          display: flex;
          padding-top: 40px;
          position: relative;
          padding-right: 10px;
          flex-direction: column;
          > .pointer {
            width: 25px;
            right: -7px;
            content: '';
            height: 80px;
            top: var(--top);
            transition: 0.3s;
            position: absolute;
            &:after {
              content: '';
              top: 32px;
              width: 2px;
              right: 5px;
              height: 16px;
              display: block;
              position: absolute;
              border-radius: 1px;
              background-color: $primary-color;
              box-shadow: 0 0 7px 0 $primary-color;
            }
            > div {
              top: 20px;
              right: -14px;
              width: 30px;
              height: 40px;
              position: absolute;
              border-radius: 50%;
              background-color: #22242E;
              &:before,
              &:after {
                content: '';
                width: 10px;
                height: 40px;
                display: block;
                position: absolute;
                background-color: #22242E;
              }
              &:before {
                top: -23px;
                right: 14px;
                transform: rotate(14deg);
              }
              &:after {
                right: 14px;
                bottom: -23px;
                transform: rotate(-14deg);
              }
            }
          }
          > .item {
            width: 50px;
            height: 70px;
            display: flex;
            cursor: pointer;
            font-size: 20px;
            transition: 0.2s;
            align-items: center;
            justify-content: center;
            filter: grayscale(2) brightness(0.7);
            &:hover {
              filter: grayscale(2) brightness(2);
            }
            &.active {
              filter: unset;
              cursor: default;
            }
          }
        }
        &.sub-items-wrapper {
          min-height: calc(100vh - 300px);
          flex-grow: 1;
          display: flex;
          padding-top: 56px;
          padding-left: 40px;
          border-radius: 30px;
          flex-direction: column;
          background-color: #22242E;
          .sub-item {
            height: 40px;
            display: flex;
            cursor: pointer;
            transition: 0.6s;
            align-items: center;
            .icon {
              margin-right: 20px;
              transition: inherit;
              filter: grayscale(2) brightness(2);
              > i {
                color: $secondary-light-color !important;
              }
            }
            .title {
              cursor: inherit;
              transition: inherit;
            }
            &:hover {
              transition: 0.2s;
              .title {
                margin-left: 7px;
              }
            }
            &.active {
              cursor: default;
              .icon {
                filter: unset;
              }
              .title {
                margin-left: 0;
                color: $secondary-light-color !important;
              }
            }
          }
        }
      }
    }
  }
</style>
