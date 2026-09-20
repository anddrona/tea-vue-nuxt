<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'auth' | 'show-more'
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <button class="app-button" :class="`app-button__${variant}`">
    <slot />

    <slot name="text" />

    <div v-if="$slots.icon" class="app-button__icon">
      <slot name="icon" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.app-button {
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
  }

  &__auth {
    display: flex;
    align-items: center;
    gap: 3px;
    width: max-content;
    padding: 6px 15px;
    border-radius: 50px;
    border: 1px solid var(--deep-grey);
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      --icon-color: var(--deep-grey);
      color: var(--yellow);
      transition: all 0.3s;
      background-color: var(--deep-grey);
    }
  }

  &__show-more {
    padding: 8px 20px;
    border-radius: 20px;
    border: 1px solid var(--dark-grey);
    background: var(--light-yellow);
    color: var(--deep-grey);

    &:hover {
      transition: all 0.3s;
      background-color: var(--deep-grey);
      color: var(--light-yellow);
    }

    @include media-breakpoint(mob) {
      padding: 4px 10px;
    }
  }
}
</style>
