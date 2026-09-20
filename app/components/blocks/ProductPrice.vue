<script lang="ts" setup>
const { formatPrice } = usePriceFormat()
import { usePriceFormat } from '~/composables/usePriceFormat.ts'
import { type IPackVariant } from '~/types'

const props = defineProps<{
  hasPrice: boolean
  activeVariant: IPackVariant
}>()
</script>

<template>
  <div class="product-price" v-if="hasPrice">
    <span class="fz-25-desk-fw-600 fz-20-tab-fw-600 text-red" v-if="activeVariant.price">
      {{ formatPrice(activeVariant.price) }}
    </span>
    <span
      class="fz-18-desk-fw-600 fz-14-tab-fw-600 text-grey old-price"
      v-if="activeVariant.oldPrice"
    >
      {{ formatPrice(activeVariant.oldPrice) }}
    </span>
  </div>
  <span v-else> Цена по запросу </span>
</template>

<style lang="scss" scoped>
.product-price {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: max-content;
  width: 100%;

  .old-price {
    text-decoration: line-through;
    text-align: end;
  }
}
</style>
