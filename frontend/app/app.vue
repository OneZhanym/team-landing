<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
    
    <div class="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full border border-gray-100 transition-all">
      <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        ＋
      </div>

      <h1 v-if="landingData" class="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {{ landingData.about_title }}
      </h1>
      
      <h1 v-else class="text-2xl font-bold text-gray-400 mb-4 animate-pulse">
        Загрузка данных клиники...
      </h1>

      <p v-if="landingData?.about_text" class="text-gray-600 mb-6">
        {{ landingData.about_text }}
      </p>
      <p v-else class="text-gray-400 italic mb-6">
        (Текст описания еще не добавлен в админке Strapi)
      </p>

      <div class="border-t border-gray-100 pt-6">
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Выберите язык интерфейса
        </p>
        
        <div class="flex justify-center gap-3">
          <button 
            @click="changeLanguage('ru')" 
            :class="['px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer shadow-sm', $i18n.locale === 'ru' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
          >
            Русский
          </button>
          <button 
            @click="changeLanguage('en')" 
            :class="['px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer shadow-sm', $i18n.locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
          >
            English
          </button>
          <button 
            @click="changeLanguage('zh-cn')" 
            :class="['px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer shadow-sm', $i18n.locale === 'zh-cn' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
          >
            中文 (Chinese)
          </button>
        </div>
      </div>
    </div>

    <p class="text-gray-400 text-xs mt-6 font-mono">
      Nuxt Locale: <span class="text-gray-600 font-bold uppercase">{{ $i18n.locale }}</span>
    </p>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

// Форматируем локаль под стандарты Strapi (для китайского переводим в верхний регистр)
const strapiLocale = computed(() => {
  return locale.value === 'zh-cn' ? 'zh-CN' : locale.value
})

// Отправляем запрос к коллекции homepages (права Public открыты, токены не нужны!)
const { data: response, refresh } = await useFetch(() => `http://localhost:1337/api/homepages`, {
  query: {
    locale: strapiLocale
  }
})

// Парсинг под архитектуру Strapi v5 (данные лежат сразу в первом элементе массива data)
const landingData = computed(() => {
  const dataArray = response.value?.data
  if (Array.isArray(dataArray) && dataArray.length > 0) {
    return dataArray[0] // В Strapi v5 поля лежат прямо тут, без .attributes!
  }
  return null
})

// Функция смены языка с обновлением данных из базы
const changeLanguage = async (newLocale) => {
  await setLocale(newLocale)
  await refresh()
}
</script>