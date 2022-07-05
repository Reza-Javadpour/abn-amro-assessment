<template>
  <div class="array-cell">
    <div
        class="placeholder"
        v-if="!items.length || items.length === 0"
    >N/A</div>
    <div v-else class="items-wrapper">
      <span
          class="item"
          v-for="(item, index) in items"
      >
        <span
            class="item-title"
            @click="selectItem(item)"
        >{{ item }}</span>
        <span
            v-show="index + 1 !== items.length"
            v-text="', '"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayCell',
  props: {
    items: {
      default: [],
      type: Array
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .array-cell {
    .placeholder {
      cursor: not-allowed;
    }
    .items-wrapper {
      > .item {
        > span:first-child {
          cursor: pointer;
          transition: 0.4s;
          &:hover {
            color: $primary-color;
            transition: 0.2s;
          }
        }
      }
    }
  }
</style>
