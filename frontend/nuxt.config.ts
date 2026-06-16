// nuxt.config.ts
// Документация: Интеграция TailwindCSS, Strapi v5 и мультиязычности @nuxtjs/i18n

import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  // Подключаем все три необходимых модуля
  modules: [
    '@nuxtjs/tailwindcss', // Стили от коллеги
    '@nuxtjs/i18n',        // Локализация от коллеги
    '@nuxtjs/strapi'       // Связь со Strapi v5
  ],

  // Настройка связи со Strapi v5
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    cookieName: 'strapi_jwt'
  },

  // Настройки мультиязычности (сохраняем структуру коллеги)
  i18n: {
  lazy: false,
  langDir: 'locales/',
  locales: [
    { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
    { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
    { code: 'zh-CN', iso: 'zh-CN', file: 'zh.json', name: 'Chinese' }
  ],
  defaultLocale: 'ru',
  strategy: 'no_prefix'
},

  // Пути для удобного импорта файлов (например, import '@/components/Hero.vue')
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },

  devtools: { enabled: true },
  compatibilityDate: '2026-06-12'
})