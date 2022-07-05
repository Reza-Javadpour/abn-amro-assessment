import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SectionWrapper from '../../src/components/SectionWrapper.vue';

describe("SectionWrapper Test!", () => {

  it('Render component', (item) => {
    expect(SectionWrapper).toBeTruthy();
  }, 100);

  it('Showing header icon', (item) => {
    const wrapper = shallowMount(SectionWrapper, {
      props: {icon: '<i/>'}
    });
    expect(wrapper.find(".icon-wrapper").exists()).toBeTruthy();
  }, 100);

  it('Showing title', (item) => {
    const wrapper = shallowMount(SectionWrapper, {
      props: {sectionTitle: 'ABN-AMRO'}
    });
    expect(wrapper.find(".title").exists()).toBeTruthy();
  }, 100);

  it('Showing back action', (item) => {
    const wrapper = shallowMount(SectionWrapper, {
      props: {hasBackAction: true}
    });
    expect(wrapper.find(".back-action").exists()).toBeTruthy();
  }, 100);
});
