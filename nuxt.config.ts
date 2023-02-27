// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: 'https://fonts.googleapis.com',
          rel: 'preconnect',
        },
        {
          crossorigin: '',
          href: 'https://fonts.gstatic.com',
          rel: 'preconnect',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  imports: {
    autoImport: false,
  },
  modules: [
    '@nuxt/content',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
});
