// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@pinia/nuxt', '@nuxt/test-utils/module', "@nuxtjs/i18n"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://spacex-production.up.railway.app'
      }
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})