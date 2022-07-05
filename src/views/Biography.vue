<template>
  <div class="biography">
    <SectionWrapper
        :sectionTitle="pageTitle"
        icon="<i class='abn-icon icon-user'></i>"
        hasBackAction
    >
      <LoadingContent v-if="isLoading" />
      <ErrorPlaceHolder
          v-else-if="!isLoading && biography === null"
          @clickAction="getInfo()"
      />
      <div v-else>
        <div class="first-section">
          <div class="section-banner">
            <img
                v-if="biography?.image?.medium"
                :src="biography.image.medium"
                :alt="biography.name || ' Artist avatar'"
            >
            <img
                v-else
                :src="biography.image.original"
                :alt="biography.name || ' Artist avatar'"
            >
          </div>
          <div class="section-information">
            <h1>{{ biography.name || '' }}</h1>
            <p>Gender: {{ biography.gender || 'N/A' }}</p>
            <p>Birthday: {{ biography.birthday || 'N/A' }}</p>
            <p>Country: {{ biography.country?.name || 'N/A' }}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import ErrorPlaceHolder from '../components/ErrorPlaceHolder.vue';
import SectionWrapper from '../components/SectionWrapper.vue';
import LoadingContent from '../components/LoadingContent.vue';
import api from '../core/api';

export default {
  name: 'Biography',
  components: {SectionWrapper, LoadingContent, ErrorPlaceHolder},

  data() {
    return {
      biography: null,
      isLoading: false,
      peopleId: this.$route.params.peopleId || null
    }
  },
  created() {
    this.getInfo();
  },
  computed: {
    pageTitle() {
      if(this.biography?.name) {
        return `Biography - ${this.biography.name}`
      } else {
        return 'Biography';
      }
    },
    schedule() {
      return (this.biography.schedule?.days?.toString() || 'Everyday') + ' - ' + (this.biography.schedule?.time || 'N/A')
    }
  },
  methods: {
    async getInfo() {
      this.isLoading = true;
      await api.getPeopleInfo(this.peopleId).then((response) => {
        this.biography = response.data;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .biography {
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    .first-section {
      display: flex;
      > .section-banner {
        width: 100%;
        min-width: 210px;
        max-width: 210px;
        img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 0 17px 0 #121213;
        }
      }
      > .section-information {
        flex-grow: 1;
        display: flex;
        max-width: 700px;
        margin-top: auto;
        margin-left: 40px;
        flex-direction: column;
        > h1 {
          color: $primary-color;
        }
      }
    }
  }
  @media (max-width: $mobile-size-breakpoint) {
    .biography {
      .first-section {
        flex-direction: column;
        > .section-banner {
          display: flex;
          max-width: 100%;
          justify-content: center;
          > img {
            border-radius: 15px;
          }
        }
        > .section-information {
          margin-left: 0;
        }
      }
    }
  }
</style>
