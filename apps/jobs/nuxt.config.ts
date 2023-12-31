// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: process.env.NUXT_THE_MUSE_API_KEY,
  },
  nitro: {
    preset: "node-server",
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@vueuse/nuxt"],
});
