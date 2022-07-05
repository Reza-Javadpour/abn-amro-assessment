import { describe, expect, it } from 'vitest';
import ShowCardItem from '../../src/components/ShowCardItem.vue';

describe("ShowCardItem Test!", () => {
  it('Render component', (item) => {
    expect(ShowCardItem).toBeTruthy();
  }, 100);
});
