// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/_homepage.scss'],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Poppins': true,
        download: true,
        inject: true
      }
    }]
  ],
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/_colors.scss" as *;'
            }
          }
        }
      }
})
