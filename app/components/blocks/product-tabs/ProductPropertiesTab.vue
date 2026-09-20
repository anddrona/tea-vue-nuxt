<script setup lang="ts">
import { type IPropertiesContent } from '~/types/index'

defineProps<{
  content: IPropertiesContent
}>()
</script>
<template>
  <ul class="properties-tab">
    <li v-for="(item, index) in content?.properties" :key="index">
      {{ item.key }}: {{ item.value }}
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.properties-tab {
  li {
    list-style-type: circle;
    margin-left: 20px;
  }
}
</style>
