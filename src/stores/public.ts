import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePublicStore = defineStore('public', () => {
  const isCollapse = ref(true)

  function changeIsCollapse() {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, changeIsCollapse }
})
