<template>
  <div class="container">
    <div class="first-square">
      <div class="first-triangle"></div>
      <div class="second-triangle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbnAmroLogo'
};
</script>

<style lang="scss" scoped>
  .container {
    width: 60px;
    height: 60px;
    display: flex;
    perspective: 30px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > .first-square {
      width: 60px;
      height: 51px;
      position: relative;
      background-color: #019386;
      transform: rotateX(-90deg);
      opacity: 0;
      animation: 0.7s rotateDown90;
      transform-origin: top;
      animation-fill-mode: forwards;
      perspective: 90px;
      > .first-triangle {
        width: 0;
        height: 0;
        bottom: 0;
        position: absolute;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 30px solid #019386;
        animation: 1s rotateDown180;
        transform-origin: bottom;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }

      > .second-triangle {
        width: 0;
        height: 0;
        top: 21px;
        left: 30px;
        position: absolute;
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;
        border-left: 30px solid #F3C024;
        z-index: 2;
        transform: rotateY(-90deg);
        animation: 0.5s rotateRight90;
        animation-delay: 1s;
        transform-origin: left;
        animation-fill-mode: forwards;
      }
    }
  }
  @keyframes rotateDown90 {
    from {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    to {
      opacity: 1;
      transform: rotateX(0);
    }
  }

  @keyframes rotateRight90 {
    from {
      opacity: 0;
      transform: rotateY(-90deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }

  @keyframes rotateDown180 {
    from {
      transform: rotateX(0);
    }
    to {
      transform: rotateX(180deg);
    }
  }
</style>
