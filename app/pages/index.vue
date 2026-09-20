<script setup lang="ts">
import ProductInfo from '~/components/blocks/ProductInfo.vue'
import ProductTabs from '~/components/blocks/ProductTabs.vue'
import AppProductGalleryImage from '~/components/shared/AppProductGalleryImage.vue'
import { PRODUCT } from '~/data/data-product'
import { useScrollTo } from '~/composables/useScrollTo'

const activeTab = ref('description')

const { scrollTo } = useScrollTo()
const productTabs = ref<HTMLElement | null>(null)

const openReviews = async () => {
  activeTab.value = 'reviews'

  await nextTick()

  scrollTo(productTabs.value)
}

const descriptionTab = PRODUCT.tabs.find((tab) => tab.name === 'description')

useSeoMeta({
  title: PRODUCT?.title,
  description: descriptionTab?.content.description,
})
</script>

<template>
  <div class="product-page">
    <div class="container product-page__container">
      <h1>{{ PRODUCT?.title }}</h1>
      <section class="product-page__info">
        <div class="product-page__gallery">
          <AppProductGalleryImage :images="PRODUCT.images" :alt="PRODUCT.title" />
        </div>

        <div class="product-page__details">
          <ProductInfo
            :packVariants="PRODUCT.packVariants"
            :title="PRODUCT?.title"
            @open-reviews="openReviews"
          />
        </div>
      </section>

      <section class="product-page__tabs" ref="productTabs">
        <ProductTabs :tabs="PRODUCT.tabs" v-model="activeTab" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.product-page {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 35px;

    @include media-breakpoint(tab) {
      gap: 20px;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 30px;

    @include media-breakpoint(tab) {
      grid-template-columns: 2fr 1fr;
      gap: 15px;
    }

    @include media-breakpoint(sm-tab) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }

  &__gallery {
    width: 100%;
  }
}
</style>
