import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    lazy: false,
    langDir: 'locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'zh-cn', iso: 'zh-CN', file: 'zh.json', name: 'Chinese' }
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix'
  },

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },

  devtools: { enabled: true },

  compatibilityDate: '2026-06-12'
})