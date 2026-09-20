<template>
  <main class="main">
    <div class="main__bg">
      <picture>
        <source type="image/webp" src="/images/base/bg.webp" />
        <img src="/images/base/bg.jpg" alt="фоновая картинка - чай" aria-hidden="true" />
      </picture>
    </div>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/media' as *;

.main {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow: hidden;

  @include media-breakpoint(tab) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &__bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    pointer-events: none;
    user-select: none;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
