<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    color?: string
  }>(),
  {
    size: 24,
    color: 'currentColor',
  },
)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :stroke="color"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 6h15l-1.5 9h-12z" />
    <path d="M6 6L5 3H2" />
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
  </svg>
</template>
<style lang="scss" scoped>
svg {
  display: block;
  flex-shrink: 0;
}
</style>
