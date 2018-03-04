<template>
  <div class="colors">
    <tool-bar
      :activeColor.sync="activeColor"
      :eraseActive="eraseActive"
      @toggleEraser="eraseActive = !eraseActive"
      @deletePixelColor="deletePixelColor"
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
    deletePixelColor () {
      this.pixels = []
      for (let i = 0; i <= this.pixelSum; i++) {
        this.pixels.push({color: '#FFFFFF'})
      }
    }
  }
}
</script>
