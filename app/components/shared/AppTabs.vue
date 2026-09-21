<script setup lang="ts">
import { ref, computed } from 'vue'
import AppButton from './AppButton.vue'
import { type IProductTab } from '~/types/index.ts'

const props = defineProps<{
  tabs: IProductTab[]
}>()

const activeTab = defineModel<string>()

const selectTab = (name: string) => {
  activeTab.value = name
}

const activeTabData = computed(() => props.tabs.find((tab) => tab.name === activeTab.value))
</script>

<template>
  <div class="app-tabs">
    <div class="app-tabs__header" role="tablist">
      <AppButton
        v-for="tab in tabs"
        :key="tab.name"
        role="tab"
        :aria-selected="activeTab === tab.name"
        class="app-tabs__tab fz-16-desk-fw-600 fz-14-tab-fw-600"
        :class="{ 'app-tabs__tab--active': activeTab === tab.name }"
        @click="selectTab(tab.name)"
      >
        {{ tab.label }}
      </AppButton>
    </div>

    <div class="app-tabs__content" role="tabpanel">
      <Transition name="tab" mode="out-in">
        <div :key="activeTab" class="app-tabs__content-inner">
          <slot :name="activeTab" :content="activeTabData?.content" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.app-tabs {
  width: 100%;
  border: 1px solid var(--dark-grey);
  border-radius: 12px;
  overflow: hidden;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black);
    border-bottom: 1px solid var(--dark-grey);
  }

  &__tab {
    flex: 1;
    padding-bottom: 25px;
    padding-top: 25px;
    text-transform: lowercase;
    color: var(--light-yellow);
    transition: background-color 0.2s;

    @include media-breakpoint(tab) {
      padding-bottom: 15px;
      padding-top: 15px;
    }

    &--active {
      background-color: var(--light-yellow);
      color: var(--dark-grey);
    }
  }

  &__content {
    width: 100%;
    color: var(--deep-grey);
    background-color: var(--light-yellow);
    padding: 20px;
    line-height: 1.5;

    @include media-breakpoint(tab) {
      line-height: 1.3;
      padding: 15px;
    }

    @include media-breakpoint(mob) {
      padding: 10px;
    }

    &:deep(a) {
      font-weight: 600;
      color: var(--black);
      transition: all 0.3s;

      @media (hover: hover) {
        &:hover {
          color: var(--deep-grey);
          transition: all 0.3s;
        }
      }
    }
  }

  .tab-enter-active,
  .tab-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .tab-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .tab-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
