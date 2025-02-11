<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()
</script>

<template>
  <div class="min-h-screen" :class="theme.themeColors.background">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8" :class="theme.themeColors.text">About Us</h1>
      
      <div class="shadow-lg rounded-lg p-6" :class="theme.themeColors.card">
        <p class="text-lg mb-4" :class="theme.themeColors.text">
          This is a complex Vue application showcasing various features including:
        </p>
        <ul class="list-disc list-inside space-y-2" :class="theme.themeColors.text">
          <li>Real-time cryptocurrency price tracking</li>
          <li>Lazy loading routes</li>
          <li>Pinia state management</li>
          <li>Tailwind CSS styling with green theme</li>
          <li>Dark mode support</li>
          <li>Async data handling</li>
        </ul>
      </div>
    </div>
  </div>
</template>