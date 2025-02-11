<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useThemeStore } from './stores/theme'

const theme = useThemeStore()
</script>

<template>
  <div :class="theme.themeColors.background">
    <nav class="shadow-lg" :class="theme.themeColors.card">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex space-x-4 items-center">
            <RouterLink 
              v-for="link in ['Home', 'About', 'Profile']" 
              :key="link"
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="[
                theme.themeColors.text,
                theme.isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
              ]"
            >
              {{ link }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>