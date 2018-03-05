<template>
  <div class="tool-bar">
    <div class="color-palette-wrapper">
      <button
        class="btn btn-default tool-btn"
        @click="$emit('addPaletteSwatch')"
      >
        <span>Save Color</span>
      </button>
      <button 
        class="palette-swatch tool-btn" 
        v-for="(swatch, index) in paletteSwatches"
        :key="index"
        :style="{ 'background-color': swatch.color }"
        @click="$emit('setActiveColor', swatch.color)"
      />
    </div>
    <div class="color-picker-wrapper">
      <h2>Pick a color:</h2>
      <input
        type="color"
        class="color-picker"
        :activeColor="activeColor"
        @input="$emit('update:activeColor', $event.target.value)"
      />
    </div>
    <div class="tools-wrapper">
      <button
        class="btn btn-default tool-btn"
        :class="{ 'active-eraser': eraseActive}"
        @click="$emit('toggleEraser')"
      >
        <icon name="eraser"/>
        <span>Eraser</span>
      </button>
      <button
        class="btn btn-danger tool-btn"
        @click="$emit('deletePixelColor')"
      >
        <icon name="bomb"/>
        <span>Clear</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .tool-bar {
    height: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(0, 162, 255);
  }
  .color-palette-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .palette-swatch {
    height: 38px;
    width: 38px;
    margin: 2.5px;
    border: 0;
    border-radius: 4px;
  }
  .color-picker-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .color-picker {
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    border-radius: 4px;
    width: 38px;
    height: 38px;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
  .tool-btn {
    cursor: pointer;
  }
  .active-eraser {
    background-color: coral;
  }
</style>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'tool-bar',
  components: {
    Icon
  },
  props: {
    activeColor: {
      type: String,
      default: '#3d3d3d'
    },
    eraseActive: {
      type: Boolean,
      default: false
    },
    paletteSwatches: {
      type: Array
    }
  }
}
</script>
