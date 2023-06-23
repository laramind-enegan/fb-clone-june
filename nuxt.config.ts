// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/style/global.scss"],
});
