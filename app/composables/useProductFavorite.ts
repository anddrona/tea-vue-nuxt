import { computed, ref } from 'vue'

const STORAGE_KEY = 'favorites'

const favorites = ref<string[]>([])

export function useProductFavorite(title: string) {
  const isFavorite = computed(() => {
    return favorites.value.includes(title)
  })

  const loadFavorites = () => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) return

    try {
      const parsed = JSON.parse(stored)

      if (Array.isArray(parsed)) {
        favorites.value = parsed
      }
    } catch {
      favorites.value = []
    }
  }

  const toggleFavorite = () => {
    if (isFavorite.value) {
      favorites.value = favorites.value.filter((item) => item !== title)
    } else {
      favorites.value.push(title)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
  }

  return {
    isFavorite,
    toggleFavorite,
    favorites,
    loadFavorites,
  }
}
