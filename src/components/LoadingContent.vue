<template>
  <div class="loading-wrapper">
    <Spinner size="40px" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  name: 'LoadingContent',
  components: {Spinner}
};
</script>

<style scoped>
  .loading-wrapper {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
