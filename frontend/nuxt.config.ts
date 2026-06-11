// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  // Включаем необходимые модули для проекта
  modules: [
    '@nuxtjs/tailwindcss', // Модуль для стилизации интерфейса
    '@nuxtjs/i18n'         // Модуль для мультиязычности на фронтенде
  ],

  // Конфигурация модуля мультиязычности i18n
  i18n: {
    lazy: false,
    langDir: 'locales/', // Папка, где хранятся файлы переводов интерфейса
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'zh-cn', iso: 'zh-CN', file: 'zh.json', name: 'Chinese' }
    ],
    defaultLocale: 'ru', // Язык по умолчанию при открытии сайта
    strategy: 'no_prefix' // Отключает добавление /ru/ или /en/ в URL-адрес
  },

  // Настройка путей для совместимости с алиасами (например, @/)
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },

  // Включаем инструменты разработчика в браузере (опционально)
  devtools: { enabled: true }
})