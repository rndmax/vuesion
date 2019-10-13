import { createLocalVue, mount } from '@vue/test-utils';
import VueDrawableCanvas from './VueDrawableCanvas.vue';

const localVue = createLocalVue();

describe('VueDrawableCanvas.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueDrawableCanvas, {
      localVue,
    });

    expect(wrapper.text()).toBe('VueDrawableCanvas');
  });
});
