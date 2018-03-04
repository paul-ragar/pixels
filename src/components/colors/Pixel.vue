<template>
  <div
    class="pixel"
    :style="{ 'background-color': pixel.color }"
    @click="$emit('addPixelColor', pixelIndex)"
  />
</template>

<style scoped>
  .pixel {
    min-height: 40px;
    min-width: 40px;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, .2);
    cursor: pointer;
  }
</style>

<script>
export default {
  name: 'Pixel',
  props: {
    pixel: {
      type: Object
    },
    pixelIndex: {
      type: Number
    }
  }
}
</script>
