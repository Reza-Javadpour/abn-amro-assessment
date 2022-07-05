<template>
  <div class="contact">
    <SectionWrapper
        sectionTitle="Contact"
        icon="<i class='abn-icon icon-phone' />"
    >
      <div class="details">

        <div class="row">
          <div class="title">Linkedin:</div>
          <a href="https://www.linkedin.com/in/reza-javadpour"
             class="value"
             target="_blank"
             style="--link-underline-width: 55px"
          >linkedin.com/in/reza-javadpour</a>
        </div>

        <div class="row">
          <div class="title">GitHub:</div>
          <a href="https://github.com/reza-javadpour"
             class="value"
             target="_blank"
             style="--link-underline-width: 46px"
          >github.com/reza-javadpour</a>
        </div>

        <div class="row">
          <div class="title">CodePen:</div>
          <a href="https://codepen.io/reza-javadpour"
             class="value"
             target="_blank"
             style="--link-underline-width: 63px"
          >codepen.io/reza-javadpour</a>
        </div>

        <div class="row">
          <div class="title">Email:</div>
          <a href="mailto:reza.javadpour.job@gmail.com"
             class="value"
             style="--link-underline-width: 29px"
          >reza.javadpour.job@gmail.com</a>
        </div>

        <div class="row">
          <div class="title">Phone:</div>
          <a href="tel:+989351412186"
             class="value"
             style="--link-underline-width: 27px"
          >+989351412186</a>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '../components/SectionWrapper.vue';

export default {
  name: 'Contact',
  components: {SectionWrapper}
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .contact {
    .details {
      flex-grow: 1;
      padding-top: 10px;
      margin-left: 30px;
      > .row {
        display: flex;
        min-height: 40px;
        align-items: center;
        .title {
          width: 160px;
          color: $primary-color
        }
        a.value {
          position: relative;
          &:before {
            left: 0;
            width: 100%;
            content: '';
            height: 1px;
            bottom: -3px;
            display: block;
            transition: 0.4s;
            position: absolute;
            background-color: #bbb;
            max-width: var(--link-underline-width);
          }
          &:hover {
            &:before {
              max-width: 100%;
              transition: 0.1s;
              background-color: $primary-color;
            }
          }
        }
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .contact {
      .details {
        margin-left: 0;
        margin-top: 40px;
        > .row {
          align-items: start;
          margin-bottom: 25px;
          flex-direction: column;
          > .title {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
</style>
