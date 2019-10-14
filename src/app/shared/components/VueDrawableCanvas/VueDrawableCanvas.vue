<template>
  <div :class="$style.vueDrawableCanvas">
    <canvas ref="canvas"></canvas>
    <a download="image.png" ref="download"><button @click="onSave">save</button></a>
  </div>
</template>

<script lang="ts">
import { DrawingEngine } from '@components/VueDrawableCanvas/DrawingEngine';

export default {
  name: 'VueDrawableCanvas',
  components: {},
  props: {},
  data: (): any => ({
    canvas: null,
    context: null,
  }),
  computed: {},
  methods: {
    onSave() {
      const download = this.$refs.download;
      const image = this.$refs.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      download.setAttribute('href', image);
    },
  },
  mounted(): void {
    DrawingEngine(this.$refs.canvas);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueDrawableCanvas {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGUlEQVQImWNIKL/tiwszJJTf9mXABQabJADsDBn0cAxsQAAAAABJRU5ErkJggg==)
    repeat;
  canvas {
    height: 600px;
    width: 100%;
    cursor: crosshair;
  }
}
</style>
