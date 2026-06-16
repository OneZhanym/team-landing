<template>
  <div class="bg-surface-alt border-y border-border py-14 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto">
      
      <div v-if="homepageData" class="text-center text-[11px] text-ink-4 tracking-[2px] uppercase font-bold mb-9">
        {{ homepageData.clients_title || 'Нам доверяют' }}
      </div>

      <div v-if="partnersList && partnersList.length" class="flex flex-wrap items-center justify-center gap-5">
        <div
          v-for="partner in partnersList"
          :key="partner.id"
          class="w-40 h-20 bg-white border border-border rounded-2xl flex items-center justify-center px-5 py-3 transition-all hover:border-border-dark hover:shadow-card hover:-translate-y-0.5"
        >
          <img
            v-if="partner.logo && partner.logo.url"
            :src="getStrapiMedia(partner.logo.url)"
            :alt="partner.name || 'Partner logo'"
            class="max-w-full max-h-full object-contain grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
          >
          
          <div v-else class="flex flex-col items-center justify-center gap-1 w-full h-full">
            <svg class="w-[22px] h-[22px] stroke-ink-4 fill-none" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            <span class="text-[11px] font-semibold text-ink-4 tracking-wide">
              {{ partner.name || 'Логотип партнёра' }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// Безопасный сборщик ссылок на медиафайлы бэкенда для SSR
const config = useRuntimeConfig()
const getStrapiMedia = (url) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  const strapiBase = config.public.strapi?.url || 'http://localhost:1337'
  return `${strapiBase}${url}`
}

// 1. Запрос к Homepage ради заголовка секции
const { data: homeResponse, refresh: refreshHome } = await useAsyncData(
  'homepage-clients-title',
  () => find('homepage', { locale: locale.value })
)
const homepageData = computed(() => homeResponse.value?.data)

// 2. Запрос к независимой коллекции Partner ради списка брендов
const { data: partnersResponse, refresh: refreshPartners } = await useAsyncData(
  'global-partners',
  () => find('partners', {
    locale: locale.value,
    populate: ['logo'] // Обязательно подтягиваем медиа-файл логотипа
  })
)
const partnersList = computed(() => partnersResponse.value?.data || [])

// Синхронно обновляем оба запроса при смене языка на сайте
watch(locale, () => {
  refreshHome()
  refreshPartners()
})
</script>