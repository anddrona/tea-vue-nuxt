<script setup lang="ts">
import { type IDescriptionContent } from '~/types/index'
import IconLeaf from '../../icons/IconLeaf.vue'

defineProps<{
  content: IDescriptionContent
}>()
</script>
<template>
  <div class="description-tab">
    <div>
      <p>
        {{ content.ingredients }}
      </p>
      <p v-html="content.description" />
    </div>

    <div class="flex-column-gap-5">
      <h3 class="fz-24-desk-fw-400 fz-20-tab-fw-400">Вкус</h3>
      <p>
        {{ content.flavor }}
      </p>
    </div>

    <div class="flex-column-gap-5">
      <h3 class="fz-24-desk-fw-400 fz-20-tab-fw-400">Полезные свойства</h3>
      <ul class="flex-column-gap-5">
        <li v-for="(item, index) in content.beneficial" :key="index">
          <IconLeaf :size="15" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.description-tab {
  display: flex;
  flex-direction: column;
  gap: 20px;

  ul li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
