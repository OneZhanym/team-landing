<template>
  <section v-if="techData" id="tech" class="py-24 px-6 lg:px-[60px] bg-surface-alt">
    <div class="max-w-container mx-auto overflow-hidden">

      <div class="text-center max-w-[620px] mx-auto mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-purple"></div>
          <div class="text-xs font-bold text-purple tracking-[2px] uppercase">
            {{ techData.tech_badge }}
          </div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          {{ techData.tech_title }}
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          {{ techData.tech_description }}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-8">
        
        <div
          v-for="stat in techData.tech_stats"
          :key="stat.id"
          class="rounded-[18px] p-6 flex flex-col justify-end min-h-[140px]"
          :class="statBg[stat.color] || statBg.blue"
        >
          <div class="font-heading font-black text-[42px] leading-none tracking-[-2px]" :class="statNumColor[stat.color] || statNumColor.blue">
            {{ stat.value }}
          </div>
          <div class="text-xs font-semibold mt-1" :class="statLabelColor[stat.color] || statLabelColor.blue">
            {{ stat.label }}
          </div>
        </div>

        <div class="col-span-2 rounded-[18px] min-h-[140px] bg-surface-alt border border-border flex flex-col items-center justify-center gap-1.5 text-ink-4 text-[11px] font-medium">
          <svg class="w-7 h-7 stroke-current fill-none" stroke-width="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span>{{ t.teamPhoto }}</span>
        </div>
        <div class="col-span-2 rounded-[18px] min-h-[140px] bg-surface-alt border border-border flex flex-col items-center justify-center gap-1.5 text-ink-4 text-[11px] font-medium">
          <svg class="w-7 h-7 stroke-current fill-none" stroke-width="1.5" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
          </svg>
          <span>{{ t.officePhoto }}</span>
        </div>
        <div class="col-span-2 rounded-[18px] min-h-[140px] bg-surface-alt border border-border flex flex-col items-center justify-center gap-1.5 text-ink-4 text-[11px] font-medium">
          <svg class="w-7 h-7 stroke-current fill-none" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
          <span>{{ t.workflow }}</span>
        </div>
      </div>

      <div v-if="techData.tech_stack && techData.tech_stack.length" class="relative w-full overflow-hidden flex py-2">
        <div class="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          
          <div
            v-for="tech in techData.tech_stack"
            :key="tech.id"
            class="w-[160px] sm:w-[180px] shrink-0 rounded-[20px] p-6 pb-6 flex flex-col items-center justify-center text-center min-h-[160px] transition-all hover:-translate-y-1.5"
            :class="[themeBg[tech.theme] || themeBg.vue, 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]']"
          >
            <div class="w-[52px] h-[52px] rounded-2xl flex items-center justify-center font-heading text-base font-black text-white mb-3.5" :class="themeIconBg[tech.theme] || themeIconBg.vue">
              {{ tech.icon }}
            </div>
            <div class="font-heading text-base font-extrabold" :class="themeText[tech.theme] || themeText.vue">{{ tech.name }}</div>
            <div class="text-[11px] font-semibold uppercase tracking-wide opacity-70" :class="themeSub[tech.theme] || themeSub.vue">{{ tech.sub }}</div>
          </div>

          <div
            v-for="tech in techData.tech_stack"
            :key="tech.id + '-dup'"
            class="w-[160px] sm:w-[180px] shrink-0 rounded-[20px] p-6 pb-6 flex flex-col items-center justify-center text-center min-h-[160px] transition-all hover:-translate-y-1.5"
            :class="[themeBg[tech.theme] || themeBg.vue]"
          >
            <div class="w-[52px] h-[52px] rounded-2xl flex items-center justify-center font-heading text-base font-black text-white mb-3.5" :class="themeIconBg[tech.theme] || themeIconBg.vue">
              {{ tech.icon }}
            </div>
            <div class="font-heading text-base font-extrabold" :class="themeText[tech.theme] || themeText.vue">{{ tech.name }}</div>
            <div class="text-[11px] font-semibold uppercase tracking-wide opacity-70" :class="themeSub[tech.theme] || themeSub.vue">{{ tech.sub }}</div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, watch } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// 1. Извлекаем реактивные данные с глубоким рендером вложенных массивов из Strapi v5
const { data: response, refresh } = await useAsyncData(
  'homepage-tech-data',
  () => find('homepage', {
    locale: locale.value,
    populate: ['tech_stats', 'tech_stack']
  })
)
const techData = computed(() => response.value?.data)

watch(locale, () => {
  refresh()
})

// 2. Локальные переводы интерфейса для блоков-заглушек
const translations = {
  ru: { teamPhoto: 'Фото команды', officePhoto: 'Фото офиса', workflow: 'Рабочий процесс' },
  en: { teamPhoto: 'Team Photo', officePhoto: 'Office Photo', workflow: 'Workflow' },
  'zh-CN': { teamPhoto: '团队合影', officePhoto: '办公环境', workflow: '工作流程' }
}
const t = computed(() => translations[locale.value] || translations.ru)

// 3. Статичные маппинги стилей из оригинального шаблона
const statBg = {
  blue:   'bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE] col-span-2',
  pink:   'bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8]',
  green:  'bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]',
  purple: 'bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] col-span-2',
}
const statNumColor = { blue: 'text-[#1E40AF]', pink: 'text-[#9D174D]', green: 'text-[#065F46]', purple: 'text-[#4C1D95]' }
const statLabelColor = { blue: 'text-[#1D4ED8]', pink: 'text-[#BE185D]', green: 'text-[#059669]', purple: 'text-[#6D28D9]' }

const themeBg = {
  vue:        'bg-gradient-to-br from-[#D1FAE5] to-[#6EE7B7]',
  nuxt:       'bg-gradient-to-br from-[#DCFCE7] to-[#86EFAC]',
  tailwind:   'bg-gradient-to-br from-[#E0F2FE] to-[#7DD3FC]',
  typescript: 'bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]',
  strapi:     'bg-gradient-to-br from-[#EDE9FE] to-[#C4B5FD]',
  node:       'bg-gradient-to-br from-[#FEF9C3] to-[#FDE047]',
}
const themeIconBg = {
  vue:        'bg-gradient-to-br from-[#059669] to-[#34D399]',
  nuxt:       'bg-gradient-to-br from-[#16A34A] to-[#4ADE80]',
  tailwind:   'bg-gradient-to-br from-[#0284C7] to-[#38BDF8]',
  typescript: 'bg-gradient-to-br from-[#2563EB] to-[#60A5FA]',
  strapi:     'bg-gradient-to-br from-[#7C3AED] to-[#A78BFA]',
  node:       'bg-gradient-to-br from-[#D97706] to-[#FBBF24]',
}
const themeText = {
  vue: 'text-[#064E3B]', nuxt: 'text-[#14532D]', tailwind: 'text-[#0C4A6E]',
  typescript: 'text-[#1E3A8A]', strapi: 'text-[#2E1065]', node: 'text-[#713F12]',
}
const themeSub = {
  vue: 'text-[#065F46]', nuxt: 'text-[#166534]', tailwind: 'text-[#075985]',
  typescript: 'text-[#1D4ED8]', strapi: 'text-[#4C1D95]', node: 'text-[#92400E]',
}
</script>