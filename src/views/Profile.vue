<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../stores/theme';

const theme = useThemeStore();
const username = ref('John Doe');
const email = ref('john@example.com');
</script>

<template>
  <div class="min-h-screen" :class="theme.themeColors.background">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8" :class="theme.themeColors.text">
        Profile
      </h1>

      <div class="shadow-lg rounded-lg p-6" :class="theme.themeColors.card">
        <div class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium mb-1"
              :class="theme.themeColors.text"
            >
              Username
            </label>
            <input
              v-model="username"
              type="text"
              class="w-full px-3 py-2 border rounded-lg transition-colors"
              :class="{
                'text-white/80 bg-gray-700 border-gray-600': theme.isDark,
              }"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium mb-1"
              :class="theme.themeColors.text"
            >
              Email
            </label>
            <input
              v-model="email"
              type="email"
              class="w-full px-3 py-2 border rounded-lg transition-colors"
              :class="{
                'text-white/80 bg-gray-700 border-gray-600': theme.isDark,
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
