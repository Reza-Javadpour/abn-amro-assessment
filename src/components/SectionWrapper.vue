<template>
  <div class="section-wrapper fade-in-10">
    <div class="header">
      <div
          v-if="icon"
          class="icon-wrapper"
          v-html="icon"
      ></div>
      <div class="title-wrapper">
        <div
            v-if="hasBackAction"
            class="back-action"
            @click="$router.back()"
        >
          <i class="abn-icon icon-arrow-left" style="color: #fff"></i>
        </div>
        <div
            v-if="sectionTitle"
            class="title"
        >{{sectionTitle}}</div>
      </div>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionWrapper',
  props: {
    icon: {
      type: String,
      default: null
    },
    sectionTitle: {
      type: String,
      default: ''
    },
    hasBackAction: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .section-wrapper {
    position: relative;
    overflow: hidden;
    > .header {
      overflow: hidden;
      display: flex;
      height: 90px;
      .icon-wrapper {
        width: 90px;
        height: 90px;
        display: flex;
        font-size: 32px;
        align-items: center;
        justify-content: center;
        border-radius: 0 90px 45px 0;
        box-shadow: -7px 20px 0 10px #22242E;
      }
      .title-wrapper {
        flex-grow: 1;
        height: 90px;
        display: flex;
        font-size: 20px;
        font-weight: 700;
        padding-left: 20px;
        align-items: center;
        background-color: #22242E;
        border-radius: 50px 50px 0 0;
        color: $secondary-text-color;
        > .back-action {
          width: 40px;
          height: 40px;
          display: flex;
          cursor: pointer;
          font-size: 18px;
          align-items: center;
          justify-content: center;
        }
        > .title {
          margin-left: 20px;
        }
      }
    }
    > .container {
      padding: 30px;
      overflow: hidden;
      min-height: 25vh;
      position: relative;
      background-color: #22242E;
      border-radius: 45px 0 45px 45px;
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .section-wrapper {
      > .header {
        height: 70px;
        .icon-wrapper {
          width: 70px;
          height: 70px;
          font-size: 24px;
          border-radius: 0 45px 22px 0;
        }
        .title-wrapper {
          height: 70px;
          font-size: 16px;
          padding-left: 10px;
          border-radius: 25px 25px 0 0;
          > .title {
            margin-left: 10px;
          }
        }
      }
      > .container {
        padding: 15px;
        border-radius: 25px 0 25px 25px;
      }
    }
  }
</style>
