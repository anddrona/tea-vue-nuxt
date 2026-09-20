<script setup lang="ts">
import IconArrow from '~/components/icons/IconArrow.vue'
import AppButton from '~/components/shared/AppButton.vue'
import { type IReviewsContent } from '~/types/index'

defineProps<{
  content: IReviewsContent
}>()

const goToLogin = () => {
  window.location.href =
    'https://teaboom.ru/login?next=/shop_reviews/product/ananasovij-ulun/form-fragment'
}
</script>
<template>
  <p v-if="content?.reviews.length !== 0">
    {{ content?.reviews }}
  </p>
  <div v-else class="flex-column-gap-5 review-tab-text">
    <div class="fz-16-desk-fw-400 fz-14-tab-fw-400">
      Еще никто не оставлял отзывов.<br />
      Будьте первым!
    </div>
    <div class="fz-16-desk-fw-400 fz-14-tab-fw-400">Авторизуйтесь, чтобы оставить отзыв</div>

    <AppButton variant="auth" class="fz-12-desk-fw-600" @click="goToLogin">
      Войти
      <template #icon>
        <IconArrow :size="15" />
      </template>
    </AppButton>
  </div>
</template>
<style lang="scss" scoped>
@use '~/assets/styles/mixins/media' as *;

.review-tab-text {
  @include media-breakpoint(tab) {
    gap: 10px;
  }

  @include media-breakpoint(mob) {
    align-items: center;
    text-align: center;
    gap: 8px;
  }
}
</style>
