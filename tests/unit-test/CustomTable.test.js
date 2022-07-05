import { describe, it, expect } from "vitest";
import { mount, shallowMount } from '@vue/test-utils';
import CustomTable from '../../src/components/CustomTable.vue';

describe("CustomTable Test!", () => {
  it('Render component', (item) => {
    expect(CustomTable).toBeTruthy();
  });

  it('Showing loading spinner', () => {
    const wrapper = mount(CustomTable, {props: {isLoading: true}});
    expect(wrapper.find(".loading-wrapper").exists()).toBeTruthy();
  }, 100);

  it('Showing error placeholder in network error', () => {
    const wrapper = mount(CustomTable);
    wrapper.setProps({
      tableData: null,
      isLoading: false
    });
    expect(wrapper.find(".error-placeholder").exists()).toBeTruthy();
  }, 100);
});
