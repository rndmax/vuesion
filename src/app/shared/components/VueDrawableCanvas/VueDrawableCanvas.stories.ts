import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueDrawableCanvas from './VueDrawableCanvas.vue';

const story = storiesOf('Organisms|Drawable Canvas', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueDrawableCanvas },
    template: `<vue-drawable-canvas></vue-drawable-canvas>`,
  })),
);
