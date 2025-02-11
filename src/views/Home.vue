<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { useThemeStore } from '../stores/theme'
import CryptoList from '../components/CryptoList.vue'

const counter = useCounterStore()
const theme = useThemeStore()
</script>

<template>
  <div class="min-h-screen" :class="theme.themeColors.background">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8" :class="theme.themeColors.text">
        Welcome Home
      </h1>
      
      <div class="shadow-lg rounded-lg p-6 mb-8" :class="theme.themeColors.card">
        <p class="text-xl mb-4" :class="theme.themeColors.text">Counter: {{ counter.count }}</p>
        <p class="text-xl mb-4" :class="theme.themeColors.text">Double: {{ counter.doubleCount }}</p>
        
        <button 
          @click="counter.increment()" 
          class="btn mr-4"
          :class="[theme.themeColors.primary, theme.themeColors.primaryHover]"
        >
          Increment
        </button>
        
        <button 
          @click="theme.toggleTheme()" 
          class="btn"
          :class="[theme.themeColors.secondary, theme.themeColors.secondaryHover]"
        >
          Toggle Theme
        </button>
      </div>

      <CryptoList />
    </div>
  </div>
</template>