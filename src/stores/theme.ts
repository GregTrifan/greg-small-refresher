import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  const themeColors = computed(() => ({
    primary: isDark.value ? 'bg-emerald-600' : 'bg-emerald-500',
    primaryHover: isDark.value ? 'hover:bg-emerald-700' : 'hover:bg-emerald-600',
    secondary: isDark.value ? 'bg-green-700' : 'bg-green-600',
    secondaryHover: isDark.value ? 'hover:bg-green-800' : 'hover:bg-green-700',
    background: isDark.value ? 'bg-gray-900' : 'bg-emerald-50',
    card: isDark.value ? 'bg-gray-800' : 'bg-white',
    text: isDark.value ? 'text-white' : 'text-gray-900',
    textMuted: isDark.value ? 'text-gray-300' : 'text-gray-600',
  }))

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return { isDark, themeColors, toggleTheme }
})