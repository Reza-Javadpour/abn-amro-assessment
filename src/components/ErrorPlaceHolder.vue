<template>
  <div class="error-placeholder">
    <div class="description">{{description}}</div>
    <div class="action" @click="handleAction()">{{actionTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPlaceHolder',
  props: {
    description: {
      type: String,
      default: 'Something is wrong!'
    },
    actionTitle: {
      type: String,
      default: 'Try again'
    }
  },
  methods: {
    handleAction() {
      this.$emit('clickAction', true);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .error-placeholder {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > .description {
      color: #777;
      font-size: 18px;
      font-weight: 100;
    }
    > .action {
      cursor: pointer;
      margin-top: 30px;
      color: $primary-color;
    }
  }
</style>
