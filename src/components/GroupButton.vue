<template>
  <div
      v-if="items && items.length"
      class="group-button"
  >
    <button
        v-for="item in items"
        :class="{selected: selectedItem === item}"
        @click="selectItem(item)"
    >{{item}}</button>
  </div>
</template>

<script>
export default {
  name: 'GroupButton',
  data() {
    return {
    }
  },
  props: {
    items: {
      type: Array,
      default: []
    },
    selectedItem: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectItem(item) {
      if(item !== this.selectedItem) {
        this.$emit('select', item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .group-button {
    display: flex;
    flex-wrap: wrap;
    > button {
      border: none;
      height: 32px;
      outline: none;
      display: flex;
      min-width: 80px;
      cursor: pointer;
      transition: 0.4s;
      margin-right: 12px;
      padding-left: 12px;
      margin-bottom: 7px;
      border-radius: 16px;
      padding-right: 12px;
      align-items: center;
      justify-content: center;
      background-color: #191A22;
      &:hover {
        transition: 0.2s;
        color: $primary-color;
      }
      &.selected {
        color: #191A22;
        background-color: $primary-color;
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .group-button {
      > button {
        height: 28px;
        min-width: 60px;
        font-size: 14px;
        margin-right: 8px;
        padding-left: 8px;
        margin-bottom: 5px;
        border-radius: 14px;
        padding-right: 8px;
      }
    }
  }
</style>
