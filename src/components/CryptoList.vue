<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useCryptoStore } from '../stores/crypto'
import { useThemeStore } from '../stores/theme'

const crypto = useCryptoStore()
const theme = useThemeStore()

onMounted(() => {
  crypto.fetchPrices()
  // Refresh prices every minute
  const interval = setInterval(() => crypto.fetchPrices(), 60000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold" :class="theme.themeColors.text">
        Crypto Prices
      </h2>
      <button
        @click="crypto.fetchPrices"
        class="btn"
        :class="[theme.themeColors.primary, theme.themeColors.primaryHover]"
        :disabled="crypto.loading"
      >
        Refresh
      </button>
    </div>

    <div v-if="crypto.error" class="p-4 bg-red-100 text-red-700 rounded-lg">
      {{ crypto.error }}
    </div>

    <div v-if="crypto.loading" class="flex justify-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2" :class="theme.themeColors.text"></div>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2">
      <div
        v-for="coin in crypto.prices"
        :key="coin.id"
        class="p-4 rounded-lg shadow-md"
        :class="theme.themeColors.card"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-bold" :class="theme.themeColors.text">
              {{ coin.name }}
            </h3>
            <p class="text-sm uppercase" :class="theme.themeColors.textMuted">
              {{ coin.symbol }}
            </p>
          </div>
          <div class="text-right">
            <p class="font-bold" :class="theme.themeColors.text">
              ${{ coin.current_price.toLocaleString() }}
            </p>
            <p
              :class="[
                coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500',
              ]"
            >
              {{ coin.price_change_percentage_24h.toFixed(2) }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>