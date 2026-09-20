// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/styles/index.scss', '~/assets/styles/mixins/_media.scss'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },

      title: 'Teaboom',
      titleTemplate: '%s | Teaboom',

      meta: [
        {
          name: 'description',
          content:
            'Интернет-магазин с широким ассортиментом товаров. Удобный заказ, быстрая доставка и выгодные цены.',
        },
        {
          name: 'keywords',
          content: 'интернет-магазин, товары, купить, доставка, каталог товаров',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
})
