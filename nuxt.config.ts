// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  components: [
    {
      path: '~/components',
    },
  ],
  modules: ['@vueuse/nuxt'],
})
