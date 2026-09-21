<script setup lang="ts">
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import AppButton from './AppButton.vue'

const props = defineProps<{
  images: string[]
  alt?: string
}>()

const activeIndex = ref(0)
const lightboxVisible = ref(false)

const selectImage = (index: number) => {
  activeIndex.value = index
}

const openLightbox = () => {
  lightboxVisible.value = true
}

const lightboxImages = computed(() => props.images.map((img) => `${img}.jpg`))
</script>

<template>
  <div class="product-gallery">
    <div class="product-gallery__main" @click="openLightbox">
      <picture>
        <source :srcset="`${images[activeIndex]}.avif`" type="image/avif" />
        <source :srcset="`${images[activeIndex]}.webp`" type="image/webp" />

        <img
          :src="`${images[activeIndex]}.jpg`"
          :alt="alt ?? `Фото ${activeIndex + 1}`"
          class="product-gallery__image"
        />
      </picture>

      <AppButton class="product-gallery__zoom" aria-label="Увеличить изображение"> 🔍 </AppButton>
    </div>

    <div class="product-gallery__thumbs">
      <AppButton
        v-for="(img, index) in images"
        :key="img"
        type="button"
        class="product-gallery__thumb"
        :class="{ 'is-active': activeIndex === index }"
        @click="selectImage(index)"
      >
        <picture>
          <source :srcset="`${img}.avif`" type="image/avif" />
          <source :srcset="`${img}.webp`" type="image/webp" />

          <img :src="`${img}.jpg`" :alt="`${alt ?? 'Фото'} ${index + 1}`" />
        </picture>
      </AppButton>
    </div>

    <ClientOnly>
      <VueEasyLightbox
        :visible="lightboxVisible"
        :imgs="lightboxImages"
        :index="activeIndex"
        @hide="lightboxVisible = false"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.product-gallery {
  width: 100%;

  &__main {
    position: relative;
    margin-bottom: 10px;

    @media (hover: hover) {
      &:hover {
        .product-gallery__zoom {
          transform: scale(1.8);
        }
      }
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    border: 1px solid var(--light-grey);
    border-radius: 10px;
    overflow: hidden;
  }

  &__zoom {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    transition: transform 0.3s all;
    transform: scale(1.6);
  }

  &__thumb {
    max-width: 110px;
    width: 100%;

    border: 2px solid transparent;
    border-radius: 8px;

    overflow: hidden;

    @include media-breakpoint(tab) {
      width: 80px;
      height: 80px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.is-active {
      border-color: var(--green);
      cursor: auto;
    }
  }
}
</style>
