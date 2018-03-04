<template>
  <div class="tool-bar">
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
        class="btn btn-default btn-erase"
        :class="{ 'active-eraser': eraseActive}"
        @click="$emit('toggleEraser')"
      >
        <icon name="eraser"/>
        <span>Eraser</span>
      </button>
      <button
        class="btn btn-danger btn-erase"
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
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(0, 162, 255);
  }
  .color-picker-wrapper {
      
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
  .btn-erase {
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
    }
  }
}
</script>
