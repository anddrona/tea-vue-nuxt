<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
  }>(),
  {
    size: 24,
  },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    class="icon-arrow"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />

    <path
      d="m12 16 4-4-4-4"
      stroke="var(--icon-color, #fff)"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M8 12h8"
      stroke="var(--icon-color, #fff)"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
.app-button {
  --icon-color: #fff;
}
</style>
