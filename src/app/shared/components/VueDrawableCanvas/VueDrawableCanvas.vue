<template>
  <div :class="$style.vueDrawableCanvas">
    <canvas ref="canvas"></canvas>
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
    press(e: any) {},
  },
  mounted(): void {
    DrawingEngine(this.$refs.canvas);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueDrawableCanvas {
  canvas {
    height: 220px;
    width: 490px;
    cursor: crosshair;
  }
}
</style>
