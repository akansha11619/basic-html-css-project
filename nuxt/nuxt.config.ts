// https://nuxt.com/docs/api/configuration/nuxt-config
console.log('NUXT CONFIG LOADED')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      script: [{ src: '/js/main.js', defer: true }]
    }
  }
})
