<template>
  <section class="py-24 px-6 lg:px-[60px] bg-[#0F0E2A]">
    <div v-if="methodologyData" class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-[#a78bfa]"></div>
          <div class="text-xs font-bold tracking-[2px] uppercase text-[#a78bfa]">
            {{ methodologyData.methodology_badge }}
          </div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-white mb-3.5">
          {{ methodologyData.methodology_title }}
        </h2>
        <p class="text-base text-white/50 leading-[1.75]">
          {{ methodologyData.methodology_description }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="step in combinedSteps"
          :key="step.id"
          class="rounded-[20px] p-6 pb-7 flex flex-col h-auto min-h-[240px] transition-transform hover:-translate-y-1"
          :class="step.bg"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <component :is="step.iconComponent" />
            </div>
            <div class="font-heading font-black text-5xl leading-none opacity-30" :class="step.numColor">
              {{ step.num }}
            </div>
          </div>
          
          <div>
            <div class="font-heading font-extrabold text-lg leading-tight mb-2" :class="step.titleColor">
              {{ step.title }}
            </div>
            <div class="text-xs leading-[1.5] opacity-80" :class="step.descColor">
              {{ step.description }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h, computed, watch } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// 1. Запрос к Strapi v5 для получения контента методологии
const { data: response, refresh } = await useAsyncData(
  'homepage-methodology',
  () => find('homepage', {
    locale: locale.value,
    populate: ['methodology_steps'] // Подтягиваем повторяемый компонент шагов
  })
)
const methodologyData = computed(() => response.value?.data)

// Следим за сменой языка и обновляем данные
watch(locale, () => {
  refresh()
})

// 2. Иконки шагов от твоего коллеги (инлайновые SVG через функцию h)
const iconAttrs = { viewBox: '0 0 24 24', fill: 'none', stroke: 'rgba(0,0,0,0.5)', 'stroke-width': '2', class: 'w-3.5 h-3.5' }

const icons = [
  () => h('svg', iconAttrs, [h('circle', { cx: 11, cy: 11, r: 8 }), h('path', { d: 'm21 21-4.35-4.35' })]),
  () => h('svg', iconAttrs, [h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), h('circle', { cx: 9, cy: 7, r: 4 })]),
  () => h('svg', iconAttrs, [h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }), h('path', { d: 'M2 17l10 5 10-5M2 12l10 5 10-5' })]),
  () => h('svg', iconAttrs, [h('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })]),
]

// 3. Статичные стили дизайна (палитра Tailwind), завязанные на индексы плиток (0, 1, 2, 3)
const stepStyles = [
  { bg: 'bg-[#EFF6FF]', numColor: 'text-[#2563EB]', titleColor: 'text-[#1E3A8A]', descColor: 'text-[#1E40AF]' }, // Синяя
  { bg: 'bg-[#F5F3FF]', numColor: 'text-[#7C3AED]', titleColor: 'text-[#4C1D95]', descColor: 'text-[#5B21B6]' }, // Фиолетовая
  { bg: 'bg-[#FEF2F2]', numColor: 'text-[#DC2626]', titleColor: 'text-[#7F1D1D]', descColor: 'text-[#991B1B]' }, // Красная
  { bg: 'bg-[#F0FDF4]', numColor: 'text-[#16A34A]', titleColor: 'text-[#14532D]', descColor: 'text-[#166534]' }, // Зеленая
]

// 4. Слияние текстов из Strapi со стилями интерфейса и иконками
const combinedSteps = computed(() => {
  if (!methodologyData.value?.methodology_steps) return []

  return methodologyData.value.methodology_steps.map((strapiStep, index) => {
    // Берем стиль по индексу (если шагов добавлено больше 4, сбрасываем по кругу через остаток от деления)
    const styleIndex = index % stepStyles.length
    const currentStyle = stepStyles[styleIndex]

    return {
      id: strapiStep.id || index,
      num: String(index + 1).padStart(2, '0'), // Автоматически генерирует строку формата "01", "02", "03"
      title: strapiStep.title,
      description: strapiStep.description,
      iconComponent: icons[styleIndex] || icons[0], // Привязываем соответствующую иконку
      ...currentStyle
    }
  })
})
</script>