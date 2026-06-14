<template>
  <section id="home" class="relative bg-white pt-[136px] pb-20 px-6 lg:px-[60px]">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-hero-top-line"></div>

    <!-- Decorative blurred circles (clipped to section) -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-[600px] h-[600px] -top-[200px] -right-[150px] rounded-full bg-blue/[0.07] blur-3xl pointer-events-none"></div>
      <div class="absolute w-[400px] h-[400px] -bottom-[100px] left-[5%] rounded-full bg-purple/[0.06] blur-3xl pointer-events-none"></div>
    </div>

    <div class="max-w-container mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left: text -->
      <div>
        <h1 class="font-heading font-extrabold text-[clamp(38px,4.5vw,60px)] leading-[1.06] tracking-[-2px] text-ink mb-5">
          Код, который<br>
          <span class="bg-grad-accent bg-clip-text text-transparent">меняет</span> жизни<br>
          к <span class="text-red">лучшему</span>
        </h1>

        <p class="text-[17px] text-ink-3 leading-[1.75] mb-9 max-w-[480px]">
          Ведущая IT-компания, поддерживающая развитие клиники [Название].
          Ваш бизнес получает лучших специалистов — люди получают помощь.
        </p>

        <div class="flex flex-wrap gap-3 mb-12">
          <a href="#services" class="inline-block bg-grad-primary text-white text-[15px] font-bold px-7 py-3.5 rounded-xl shadow-glow hover:opacity-90 transition-opacity">
            Наши услуги
          </a>
          <a href="#mission" class="inline-block border-2 border-border-dark text-ink-2 text-[15px] font-semibold px-7 py-3 rounded-xl hover:border-blue hover:text-blue transition-colors">
            Узнать о миссии
          </a>
        </div>

        <div class="flex flex-wrap gap-10">
          <div v-for="stat in stats" :key="stat.label">
            <div class="font-heading font-extrabold text-[32px] tracking-[-1px] text-ink">
              <span class="bg-grad-accent bg-clip-text text-transparent">{{ stat.value }}</span>
            </div>
            <div class="text-xs text-ink-4 font-medium mt-0.5">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Right: visual grid -->
      <div class="relative">
        <div class="grid grid-cols-2 gap-3.5">
          <div
            v-for="cell in visualCells"
            :key="cell.label"
            class="rounded-2xl border border-border h-40 flex flex-col items-center justify-center gap-2 text-xs text-ink-4"
            :class="cell.bg"
          >
            <component :is="cell.icon" class="w-7 h-7" :class="cell.iconColor" />
            <span>{{ cell.label }}</span>
          </div>
        </div>

        <!-- Floating stat card -->
<div class="absolute bottom-6 left-6 bg-white border border-border rounded-2xl px-5 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.1)] flex items-center gap-3">          <div class="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-red-soft to-red-mid flex items-center justify-center">
            <svg class="w-[18px] h-[18px] stroke-red fill-none" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
            </svg>
          </div>
          <div>
            <div class="font-heading font-extrabold text-lg text-ink">[N]+</div>
            <div class="text-[11px] text-ink-4 font-medium">Пациентов получили помощь</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const stats = [
  { value: '[N]+', label: 'Специалистов в команде' },
  { value: '[N]+', label: 'Проектов завершено' },
  { value: '[N]+', label: 'Людей получили помощь' },
]

// Простые inline SVG-иконки для плейсхолдеров
const IconOffice = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.5' }, [
  h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }),
  h('path', { d: 'M3 9h18M9 21V9' }),
])
const IconTeam = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.5' }, [
  h('circle', { cx: 12, cy: 8, r: 4 }),
  h('path', { d: 'M4 20c0-4 3.6-7 8-7s8 3 8 7' }),
])
const IconProcess = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.5' }, [
  h('path', { d: 'M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }),
])
const IconClinic = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.5' }, [
  h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
  h('polyline', { points: '9 22 9 12 15 12 15 22' }),
])

const visualCells = [
  { label: 'Фото офиса', icon: IconOffice, bg: 'bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]', iconColor: 'stroke-blue' },
  { label: 'Фото команды', icon: IconTeam, bg: 'bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]', iconColor: 'stroke-purple' },
  { label: 'Рабочий процесс', icon: IconProcess, bg: 'bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2]', iconColor: 'stroke-red' },
  { label: 'Фото клиники', icon: IconClinic, bg: 'bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]', iconColor: 'stroke-green' },
]
</script>