<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import AppButton from './AppButton.vue'

const props = withDefaults(
  defineProps<{
    height?: number
    buttonText?: string
  }>(),
  {
    height: 120,
    buttonText: 'Показать больше',
  },
)

const content = ref<HTMLElement | null>(null)
const isFullShow = ref(false)
const isShowMore = ref(false)

const toggle = () => {
  isFullShow.value = !isFullShow.value
}

const checkHeight = async () => {
  await nextTick()

  if (!content.value) return

  isShowMore.value = content.value.scrollHeight > props.height
}

onMounted(() => {
  checkHeight()
})
</script>

<template>
  <div class="app-show-more" :class="{ active: isFullShow }" :style="{ '--height': `${height}px` }">
    <div class="app-show-more__content" ref="content">
      <slot />
    </div>

    <div v-if="!isFullShow && isShowMore" class="app-show-more__gradient" />

    <AppButton
      v-if="!isFullShow && isShowMore"
      class="app-show-more__button"
      @click="toggle"
      variant="show-more"
    >
      {{ buttonText }}
    </AppButton>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.app-show-more {
  position: relative;

  &__content {
    max-height: var(--height);
    overflow: hidden;
    transition: max-height 0.9s ease;
  }

  &__gradient {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 120px;
    background: linear-gradient(transparent, var(--light-yellow));

    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &__button {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  &.active {
    .app-show-more__content {
      max-height: 1000px;
      overflow: visible;
    }
    .app-show-more__gradient {
      opacity: 0;
    }
  }
}
</style>
