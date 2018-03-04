<template>
  <div class="pixel-board">
    <pixel
      class="pixel"
      v-for="(pixel, index) in pixels"
      :key="index"
      :pixel="pixel"
      :pixelIndex="index"
      @addPixelColor="$emit('addPixelColor', $event)"
    />
  </div>
</template>

<style scoped>
  .pixel-board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<script>
import Pixel from './Pixel'
export default {
  name: 'pixel-board',
  components: {
    Pixel
  },
  props: {
    pixels: {
      type: Array
    }
  }
}
</script>
