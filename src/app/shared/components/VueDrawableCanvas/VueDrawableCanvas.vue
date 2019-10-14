<template>
  <div :class="$style.vueDrawableCanvas" ref="container">
    <canvas ref="canvas"></canvas>
    <vue-grid-row :class="$style.toolbar">
      <vue-grid-item>
        <a download="image.png" ref="download"><vue-button @click="onSave">save</vue-button></a>
      </vue-grid-item>
      <vue-grid-item>
        <vue-slider :class="$style.slider" :min="1" :max="100" :values="[size]" @change="onSizeChange"></vue-slider>
      </vue-grid-item>
      <vue-grid-item>
        <label for="color">{{ color }}</label>
        <input id="color" type="color" :value="color" @input="onColorChange" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-checkbox name="eraser" id="eraser" label="Erase" @input="onEraserToggle"></vue-checkbox>
      </vue-grid-item>
    </vue-grid-row>
  </div>
</template>

<script lang="ts">
import { DrawingEngine } from '@components/VueDrawableCanvas/DrawingEngine';
import VueButton from '@components/VueButton/VueButton.vue';
import VueSlider from '@components/VueSlider/VueSlider.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueCheckbox from '@components/VueCheckbox/VueCheckbox.vue';

export default {
  name: 'VueDrawableCanvas',
  components: { VueCheckbox, VueGridItem, VueGridRow, VueSlider, VueButton },
  props: {},
  data: (): any => ({
    engine: null,
    size: 1,
    color: '#000',
    eraser: false,
  }),
  computed: {},
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const container: HTMLElement = this.$refs.container;
      const containerRect: ClientRect =
        container.getClientRects().length > 0
          ? container.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = containerRect.width;
      canvas.height = containerRect.height;
    },
    onSave() {
      const download = this.$refs.download;
      const image = this.$refs.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      download.setAttribute('href', image);
    },
    onSizeChange(e: any) {
      this.size = e.values[0];
      this.engine.setSize(this.size);
    },
    onColorChange(e: any) {
      this.color = e.target.value;
      this.engine.setColor(this.color);
    },
    onEraserToggle() {
      this.eraser = !this.eraser;
      this.engine.setTool(this.eraser ? 'eraser' : 'marker');
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted(): void {
    this.handleResize();

    this.engine = DrawingEngine(this.$refs.canvas);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueDrawableCanvas {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC)
    repeat;
  height: 600px;
  width: 100%;

  canvas {
    cursor: crosshair;
  }

  .toolbar {
    display: flex;

    ul {
      display: none;
    }

    .slider {
      padding: $space-16 0 0 $space-32;
    }
  }
}
</style>
