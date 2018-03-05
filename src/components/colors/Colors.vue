<template>
  <div class="colors">
    <tool-bar
      :activeColor.sync="activeColor"
      :eraseActive="eraseActive"
      :paletteSwatches="paletteSwatches"
      @addPaletteSwatch="addPaletteSwatch"
      @toggleEraser="eraseActive = !eraseActive"
      @deletePixelColor="deletePixelColor"
      @setActiveColor="setActiveColor($event)"
    />
    <pixel-board
      :pixels="pixels"
      @addPixelColor="addPixelColor($event)"
    />
  </div>
</template>

<style scoped>

</style>

<script>
import PixelBoard from './PixelBoard'
import ToolBar from './ToolBar'
import 'vue-awesome/icons'

export default {
  name: 'colors',
  components: {
    PixelBoard,
    ToolBar
  },
  data () {
    return {
      activeColor: '#3d3d3d',
      paletteSwatches: [],
      eraseActive: false,
      pixelSum: 543,
      pixels: []
    }
  },
  created () {
    this.deletePixelColor()
  },
  methods: {
    addPixelColor (index) {
      if (this.eraseActive) {
        this.pixels[index].color = '#FFFFFF'
      } else {
        this.pixels[index].color = this.activeColor
      }
    },
    addPaletteSwatch (color) {
      this.paletteSwatches.unshift({color: this.activeColor})
      if (this.paletteSwatches.length > 5) {
        this.paletteSwatches.length = 5
      }
    },
    deletePixelColor () {
      this.pixels = []
      for (let i = 0; i <= this.pixelSum; i++) {
        this.pixels.push({color: '#FFFFFF'})
      }
    },
    setActiveColor (color) {
      this.activeColor = color
    }
  }
}
</script>
