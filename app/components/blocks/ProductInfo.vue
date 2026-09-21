<script lang="ts" setup>
import { useProductFavorite } from '~/composables/useProductFavorite.ts'
import { useProductVariants } from '~/composables/useProductVariants.ts'
import { type IPackVariant } from '~/types'
import IconCart from '../icons/IconCart.vue'
import IconComment from '../icons/IconComment.vue'
import IconHeartCircle from '../icons/IconHeartCircle.vue'
import AppButton from '../shared/AppButton.vue'
import ProductPrice from './ProductPrice.vue'
import ProductRadioGroup from './ProductRadioGroup.vue'
import { onMounted } from 'vue'

const props = defineProps<{
  packVariants: IPackVariant[]
  title: string
}>()

const emit = defineEmits(['openReviews'])

const { activeVariant, hasPrice, selectedSku } = useProductVariants(props.packVariants)
const { isFavorite, toggleFavorite, loadFavorites } = useProductFavorite(props.title)

onMounted(() => {
  loadFavorites()
})
</script>

<template>
  <div class="product-info">
    <div class="product-info__header">
      <AppButton class="product-info__review" @click="emit('openReviews')">
        <IconComment :size="17" />
        <template #text>
          <span> оставить отзыв</span>
        </template>
      </AppButton>

      <span class="fz-10-desk-fw-700 text-grey">арт: {{ activeVariant?.sku }}</span>
    </div>
    <template v-if="activeVariant">
      <div class="product-info__main">
        <ProductPrice :hasPrice :activeVariant />

        <AppButton class="product-info__button-cart">
          <IconCart :size="18" />
        </AppButton>

        <AppButton
          class="product-info__button-favorite"
          :class="{ 'is-active': isFavorite }"
          title="добавить в избранное"
          aria-label="добавить в избранное"
          :aria-pressed="isFavorite"
          @click="toggleFavorite"
        >
          <IconHeartCircle :filled="isFavorite" />
        </AppButton>
      </div>

      <div class="product-info__variants-pac flex-column-gap-2">
        <span class="fz-10-desk-fw-700 text-grey"> Вес: </span>

        <ProductRadioGroup
          :variants="packVariants"
          :name="title"
          label="Вес товара"
          v-model="selectedSku"
        />
      </div>

      <div class="product-info__quantity flex-column-gap-2">
        <span class="fz-10-desk-fw-700 text-grey"> Наличие: </span>

        <span class="product-info__quantity-amount">
          {{ activeVariant.amount }}
        </span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__review {
    display: flex;
    align-items: center;
    gap: 1px;
    color: var(--deep-grey);

     @media (hover: hover) {
        &:hover {
          color: var(--blue);
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__quantity {
    &-amount {
      color: var(--dark-red);
      text-transform: lowercase;
    }
  }

  &__button-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: var(--light-green);
    border-radius: 4px;

    @media (hover: hover) {
      &:hover {
        background-color: var(--black);

        svg {
          stroke: var(--yellow);
        }

        span {
          color: var(--yellow);
        }
      }
    }
  }

  &__button-favorite {
    max-width: max-content;
    width: 100%;
    color: var(--deep-grey);

    @media (hover: hover) {
      &:hover {
        color: var(--dark-red);
      }
    }

    &.is-active {
      color: var(--dark-red);
    }
  }

  &__main {
    display: grid;
    grid-template-columns: 3fr 55px max-content;
    gap: 10px;
  }
}
</style>
