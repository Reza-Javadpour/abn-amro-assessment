import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import GroupButton from '../../src/components/GroupButton.vue';
import { genresMockList } from '../mock-test-data/tv-shows-mock.js';

describe("GroupButton Test!", () => {

  it('Render component', (item) => {
    expect(GroupButton).toBeTruthy();
  }, 100)

  it.each(genresMockList)('Show all buttons', (item) => {
    const wrapper = shallowMount(GroupButton, {props: {items: genresMockList}})
    expect(wrapper.text()).toContain(item);
  }, 100)

  it('Emit on click each button', () => {
    const wrapper = shallowMount(GroupButton, {props: {items: genresMockList}});
    wrapper.find("button").trigger('click');
    expect(wrapper.emitted().select.length).toBe(1);
  }, 100)

  it('Prevent emit when click on selected item', () => {
    const wrapper = shallowMount(GroupButton, {
      props: {
        items: genresMockList,
        selectedItem: genresMockList[0]
      }
    });
    wrapper.find(".selected").trigger('click');
    expect(wrapper.emitted().select).not.toBeTruthy();
  }, 100)
});
