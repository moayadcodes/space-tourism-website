// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  modules: [
    '@nuxt/content',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
