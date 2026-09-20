<script setup lang="ts">
import AppTabs from '../shared/AppTabs.vue'

import type { IProductTab, IDescriptionContent, IPropertiesContent, IReviewsContent } from '~/types'
import ProductDescriptionTab from './product-tabs/ProductDescriptionTab.vue'
import ProductPropertiesTab from './product-tabs/ProductPropertiesTab.vue'
import ProductReviewsTab from './product-tabs/ProductReviewsTab.vue'
import AppShowMore from '../shared/AppShowMore.vue'

defineProps<{
  tabs: IProductTab[]
}>()

const activeTab = defineModel<string>({
  default: 'description',
})
</script>
<template>
  <AppTabs :tabs="tabs" class="product-tabs" v-model="activeTab">
    <template #description="{ content }">
      <AppShowMore>
        <ProductDescriptionTab :content="content as IDescriptionContent" />
      </AppShowMore>
    </template>

    <template #properties="{ content }">
      <AppShowMore>
        <ProductPropertiesTab :content="content as IPropertiesContent" />
      </AppShowMore>
    </template>

    <template #reviews="{ content }">
      <AppShowMore>
        <ProductReviewsTab :content="content as IReviewsContent" />
      </AppShowMore>
    </template>
  </AppTabs>
</template>
