import { defineStore } from "pinia"
import { ref } from 'vue'

export const useUiStore = defineStore(
  'ui__element',() => {
    const viewportWidth = ref(null)
    const viewportHeight = ref(null)
    const setviewport = (width, height) => {
      viewportWidth.value = width
      viewportHeight.value = height
      console.log(`width: ${viewportWidth.value} height: ${viewportHeight.value}`)
    }
    return {
      viewportWidth,
      viewportHeight,
      setviewport
    }
  },
  {
    persist: true
  }
)