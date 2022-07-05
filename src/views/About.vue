<template>
  <div class="about">
    <SectionWrapper
        sectionTitle="About"
        icon="<i class='abn-icon icon-info-circled' />"
    >
      <div class="section">
        <div class="logo-wrapper">
          <AbnAmroLogo/>
        </div>
        <div class="details">
          <div class="row">
            <div class="title">Creator:</div>
            <div class="value">Reza Javadpour Koumleh</div>
          </div>
          <div class="row">
            <div class="title">Company:</div>
            <div class="value">ABN-AMRO - Amsterdam</div>
          </div>
          <div class="row">
            <div class="title">Assessment Date:</div>
            <div class="value">29 Jun 2022</div>
          </div>
          <div class="row">
            <div class="title">Open API:</div>
            <div class="value">TvMaze</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import AbnAmroLogo from '../components/AbnAmroLogo.vue';
import SectionWrapper from '../components/SectionWrapper.vue';

export default {
  name: 'About',
  components: { AbnAmroLogo, SectionWrapper }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .about {
    .section {
      display: flex;
      justify-content: space-between;
      .logo-wrapper {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
            color: $secondary-light-color
          }
        }
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .about {
      .section {
        flex-direction: column;
        .logo-wrapper {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
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
  }
</style>
