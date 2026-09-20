<script lang="ts" setup>
import { type IPackVariant } from '~/types'

const props = withDefaults(
  defineProps<{
    variants: IPackVariant[]
    name: string
    label?: string
  }>(),
  {
    label: undefined,
  },
)

const selectedSku = defineModel<string>({ required: true })
</script>

<template>
  <div class="app-radio-group" role="radiogroup" :aria-label="label">
    <label
      v-for="(variant, index) in variants"
      :key="`${name}-${index}`"
      class="app-radio-group__item"
    >
      <input
        type="radio"
        class="app-radio-group__input"
        :name="name"
        :value="variant.sku"
        v-model="selectedSku"
      />
      <span>{{ variant.weight }}&nbsp;г</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.app-radio-group {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, max-content);
  gap: 10px;

  @include media-breakpoint(tab) {
    grid-template-columns: repeat(4, 1fr);
  }

  &__input {
    width: 0px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 8px;
    background-color: var(--light-blue);
    border: solid 1px var(--light-border);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      border-color: var(--deep-grey);
    }
  }

  &__item:has(&__input:checked) {
    border-color: var(--dark-grey);
    background: var(--dark-grey);
    color: var(--white);
  }
}
</style>
