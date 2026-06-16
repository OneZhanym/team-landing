<template>
  <div id="clinic" class="relative overflow-hidden py-24 px-6 lg:px-[60px] bg-[linear-gradient(135deg,#0A1628_0%,#0F2456_55%,#1A0B3A_100%)]">
    <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 24px 24px;"></div>
    <div class="absolute w-[500px] h-[500px] -top-[120px] -right-20 rounded-full bg-red/[0.22] blur-[100px] pointer-events-none"></div>
    <div class="absolute w-[300px] h-[300px] -bottom-20 left-[5%] rounded-full bg-purple/[0.18] blur-[80px] pointer-events-none"></div>

    <div v-if="clinicData" class="max-w-container mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">

      <div>
        <div class="reveal inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.16] rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 mb-5.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#f87171]"></span>
          {{ clinicData.clinic_badge }}
        </div>

        <h2 class="reveal font-heading font-extrabold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.08] text-white mb-4.5" style="transition-delay: 100ms;">
          {{ clinicData.clinic_title }}
        </h2>

        <p class="reveal text-[15px] text-white/55 leading-[1.8] mb-8" style="transition-delay: 200ms;">
          {{ clinicData.clinic_description }}
        </p>

        <div class="grid sm:grid-cols-2 gap-3 mb-7">
          <div 
            v-for="(stat, index) in clinicData.clinic_stats" 
            :key="stat.id || index" 
            class="reveal bg-white/[0.07] border border-white/10 rounded-[14px] p-5 transition-colors hover:bg-white/[0.11]"
            :style="{ transitionDelay: `${300 + (index * 100)}ms` }"
          >
            <div class="font-heading font-black text-[28px] tracking-[-1px] text-[#fca5a5]">{{ stat.value }}</div>
            <div class="text-[11px] text-white/40 mt-0.5 font-medium">{{ stat.label }}</div>
          </div>
        </div>

        <a href="#contact" class="reveal inline-block bg-[linear-gradient(135deg,#DC2626,#EF4444)] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl shadow-glow-red hover:opacity-90 transition-opacity" style="transition-delay: 500ms;">
          {{ clinicData.clinic_btn_text }}
        </a>
      </div>

      <div class="reveal h-[340px] rounded-xl4 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/25" style="transition-delay: 300ms;">
        <svg class="w-[52px] h-[52px] stroke-current fill-none opacity-35" stroke-width="1" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="text-[13px] font-medium">Фото клиники / здания</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

const { locale } = useI18n()
const { find } = useStrapi()

// 1. Изолированный запрос к Strapi v5 для блока клиники
const { data: response, refresh } = await useAsyncData(
  'homepage-clinic',
  () => find('homepage', {
    locale: locale.value,
    populate: ['clinic_stats'] // Явно упаковываем повторяемый компонент со статистикой
  })
)
const clinicData = computed(() => response.value?.data)

// 2. Логика IntersectionObserver анимации от твоего коллеги
let observer = null

const initObserver = () => {
  // Размонтируем старый обсервер, если он был инициализирован ранее
  if (observer) observer.disconnect()

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Ищем элементы с классом .reveal и вешаем на них слежку
  const hiddenElements = document.querySelectorAll('.reveal')
  hiddenElements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  initObserver()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// Принудительно перезапускаем анимацию и перезапрашиваем данные, если пользователь сменил язык
watch(locale, async () => {
  await refresh()
  // Ждем, пока Vue обновит DOM-дерево под новые текстовые переменные
  await nextTick()
  initObserver()
})
</script>