<template>
  <div class="flex items-center gap-1.5 bg-gray-50 p-1 rounded-xl border border-border">
    <button
      v-for="lang in locales"
      :key="lang.code"
      @click="setLanguage(lang.code)"
      class="px-2.5 py-1 text-xs font-bold uppercase rounded-lg transition-all"
      :class="locale === lang.code 
        ? 'bg-gradient-to-br from-blue to-purple text-white shadow-sm' 
        : 'text-ink-3 hover:text-ink hover:bg-gray-100'"
    >
      {{ lang.code === 'zh-CN' ? 'ZH' : lang.code }}
    </button>
  </div>
</template>

<script setup>
// Получаем доступ к системным переменным мультиязычности Nuxt
const { locale, locales, setLocale } = useI18n()

/**
 * Функция смены языка на фронтенде
 * @param {string} langCode - Код языка ('ru', 'en' или 'zh-cn')
 */
const setLanguage = (langCode) => {
  // setLocale автоматически меняет язык во всем приложении Nuxt 3
  setLocale(langCode)
}
</script>