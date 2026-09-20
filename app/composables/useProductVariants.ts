import type { IPackVariant } from '~/types'

import { ref, computed } from 'vue'

export function useProductVariants(variants: IPackVariant[]) {
  const selectedSku = ref<string>(variants?.[0]?.sku ?? '')

  const activeVariant = computed(() => {
    return variants.find((variant) => variant.sku === selectedSku.value) ?? null
  })

  const quantity = ref<number>(1)

  const totalPrice = computed(() => {
    const variant = activeVariant.value
    if (!variant || variant.price == null) return null
    return variant.price * quantity.value
  })

  const hasPrice = computed(() => activeVariant.value?.price != null)

  return {
    activeVariant,
    quantity,
    totalPrice,
    hasPrice,
    selectedSku,
  }
}
