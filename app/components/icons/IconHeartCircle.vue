<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    strokeWidth?: number | string
    filled?: boolean
  }>(),
  {
    size: 31,
    strokeWidth: 0.5,
    filled: false,
  },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    :width="size"
    :height="size"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="22" cy="22" r="21" />

    <path
      d="M22 30.5s-6.5-4-8.6-7.6c-1.4-2.4-.5-5.4 1.9-6.3 1.6-.6 3.3 0 4.4 1.4l2.3 2.7 2.3-2.7c1.1-1.4 2.8-2 4.4-1.4 2.4.9 3.3 3.9 1.9 6.3-2.1 3.6-8.6 7.6-8.6 7.6z"
      :fill="filled ? 'currentColor' : 'none'"
    />
  </svg>
</template>

<style scoped>
svg {
  display: block;
  flex-shrink: 0;
}
</style>
