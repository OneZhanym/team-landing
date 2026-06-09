// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  //Подключение Tailwind CSS для стилей и i18n для языков
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  //Настройка модуля локализации
  i18n: {
    // Стратегия 'prefix_except_default' означает, что основной язык (RU) будет без префикса в URL, 
    // а для EN и ZH добавятся пути /en и /zh
    strategy: 'prefix_except_default',

    //Список поддерживаемых языков лендинга
    locales: [
      {code: 'ru', iso: 'ru-RU', name: 'Русский'},
      {code: 'en', iso: 'en-US', name: 'English'},
      {code: 'zh', iso: 'zh-CN', name: '𡗗文 (Chinese)'}
    ],

    //Включение определение языка браузера пользователя
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  compatibilityDate: '2026-06-09'
})