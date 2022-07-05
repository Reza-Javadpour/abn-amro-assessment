import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ArrayCell from '../../src/components/ArrayCell.vue';
import { genresMockList } from '../mock-test-data/tv-shows-mock.js';

describe("ArrayCell Test!", () => {

  it('Render component', (item) => {
    expect(ArrayCell).toBeTruthy();
  }, 100)

  it.each(genresMockList)('Show all array items', (item) => {
    const wrapper = shallowMount(ArrayCell, {props: {items: genresMockList}})
    expect(wrapper.text()).toContain(item);
  }, 100)

  it('Showing no items placeholder', () => {
    const wrapper = shallowMount(ArrayCell, {props: {items: []}});
    expect(wrapper.find(".placeholder").exists()).toBeTruthy();
  }, 100)

  it('Click on items', async () => {
    const wrapper = shallowMount(ArrayCell, {props: {items: genresMockList}});
    await wrapper.find(".item-title").trigger('click');
    expect(wrapper.emitted().select).toBeTruthy();
  }, 100)
});
