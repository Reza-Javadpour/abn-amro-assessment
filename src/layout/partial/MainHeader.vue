<template>
  <div class="main-header fade-in-5">
    <div :class="{'search-action': true, show: showSearchInput}">
      <div class="button-wrapper" @click="handleSearchAction()">
        <i class="abn-icon icon-search" style="color: #fff"></i>
      </div>
      <div class="input-wrapper">
        <input
            type="text"
            ref="searchInput"
            v-model="searchValue"
            @keyup.enter="handleSearchAction()"
        >
        <div
            v-if="searchValue"
            class="clear-action"
            @click="handleClearInput()"
        >
          <i class="abn-icon icon-clear" style="color: #fff"></i>
        </div>
      </div>
    </div>
    <div class="mobile-logo">
      <AbnAmroLogo></AbnAmroLogo>
    </div>
  </div>
</template>

<script>
import AbnAmroLogo from '../../components/AbnAmroLogo.vue';
export default {
  name: 'main-header',
  components: {AbnAmroLogo},
  data() {
    return {
      searchValue: '',
      showSearchInput: false
    }
  },
  watch: {
    $route(to) {
      if(to.name === 'TvShows') {
        if(this.$route.query.search) {
          this.initiateSearchInput()
        }
      } else {
        this.resetSearchInput();
      }
    }
  },
  methods: {
    handleSearchAction() {
      if(!this.showSearchInput) {
        this.showSearchInput = true;
        setTimeout(() => this.$refs.searchInput.focus(), 400);
      } else {
        this.$router.push(`/tv-shows?genre=&search=${this.searchValue}&page=1`);
        this.$refs.searchInput.blur();
      }
    },
    handleClearInput() {
      this.resetSearchInput(true);
      if(this.$route.name === 'TvShows') {
        this.$router.push(`/tv-shows?genre=&search=&page=1`);
      }
    },
    resetSearchInput(show = false) {
      this.searchValue = '';
      this.showSearchInput = show;
      this.$refs.searchInput.blur();
    },
    initiateSearchInput() {this.searchValue = this.$route.query.search;
      this.showSearchInput = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  .main-header {
    flex-grow: 1;
    height: 100px;
    display: flex;
    max-width: 100%;
    padding-left: 30px;
    align-items: center;
    padding-right: 80px;
    flex-direction: row-reverse;
    .search-action {
      width: 100%;
      height: 60px;
      display: flex;
      max-width: 60px;
      overflow: hidden;
      transition: 0.3s;
      align-items: center;
      border-radius: 30px;
      background-color: #22242E;
      &.show {
        max-width: 400px;
      }
      .button-wrapper {
        display: flex;
        cursor: pointer;
        min-width: 60px;
        max-width: 60px;
        max-height: 60px;
        min-height: 60px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }
      .input-wrapper {
        width: 100%;
        display: flex;
        max-width: 80%;
        align-items: center;
        > input {
          width: 100%;
          height: 40px;
          border: none;
          outline: none;
          background-color: transparent;
        }
        .clear-action {
          width: 40px;
          height: 40px;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .mobile-logo {
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      display: none;
      position: absolute;
      align-items: center;
      justify-content: center;
      > * {
        transform: scale(0.4);
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .main-header {
      height: 40px;
      padding-left: 16px;
      padding-right: 60px;
      .search-action {
        width: 100%;
        height: 50px;
        display: flex;
        max-width: 100% ;
        border-radius: 25px;

        .button-wrapper {
        }
        .input-wrapper {
          > input {
          }
          .clear-action {
          }
        }
      }
      .mobile-logo {
        display: flex;
      }
    }
  }
</style>
