import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
}

export const useCryptoStore = defineStore('crypto', () => {
  const prices = ref<CryptoPrice[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const sortedPrices = computed(() => 
    [...prices.value].sort((a, b) => b.current_price - a.current_price)
  )

  async function fetchPrices() {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false'
      )
      if (!response.ok) throw new Error('Failed to fetch prices')
      prices.value = await response.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch prices'
    } finally {
      loading.value = false
    }
  }

  return { prices: sortedPrices, loading, error, fetchPrices }
})