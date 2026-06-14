<template>
  <section id="services" class="py-24 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-blue"></div>
          <div class="text-xs font-bold text-blue tracking-[2px] uppercase">Услуги</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          Что мы предлагаем
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          [Краткое описание спектра услуг компании.]
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="svc in services"
          :key="svc.id"
          :ref="setRef"
          class="reveal relative bg-white border border-border rounded-xl2 p-7 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card-hover hover:border-transparent"
        >
          <div class="absolute top-0 left-0 right-0 h-[3px]" :class="accentBar[svc.accent]"></div>
          <div class="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center mb-4.5" :class="iconBg[svc.accent]">
            <component :is="icons[svc.icon]" class="w-6 h-6 fill-none" :class="iconColor[svc.accent]" stroke-width="1.5" />
          </div>
          <h3 class="font-heading font-bold text-base text-ink mb-2">{{ svc.title }}</h3>
          <p class="text-[13px] text-ink-3 leading-[1.65]">{{ svc.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { services } from '~/data/services'
import { useRevealGroup } from '~/composables/useReveal'

const setRef = useRevealGroup(60)

const accentBar = {
  blue:   'bg-gradient-to-r from-blue to-blue-light',
  red:    'bg-gradient-to-r from-red to-red-light',
  purple: 'bg-gradient-to-r from-purple to-[#a78bfa]',
  green:  'bg-gradient-to-r from-green to-[#34d399]',
  orange: 'bg-gradient-to-r from-orange to-[#fb923c]',
}
const iconBg = {
  blue:   'bg-gradient-to-br from-blue-soft to-blue-mid',
  red:    'bg-gradient-to-br from-red-soft to-red-mid',
  purple: 'bg-gradient-to-br from-purple-soft to-[#DDD6FE]',
  green:  'bg-gradient-to-br from-green-soft to-[#A7F3D0]',
  orange: 'bg-gradient-to-br from-orange-soft to-[#FED7AA]',
}
const iconColor = {
  blue: 'stroke-blue', red: 'stroke-red', purple: 'stroke-purple', green: 'stroke-green', orange: 'stroke-orange',
}

const icons = {
  staff: () => h('svg', { viewBox: '0 0 24 24' }, [h('rect', { x: 2, y: 3, width: 20, height: 14, rx: 2 }), h('line', { x1: 8, y1: 21, x2: 16, y2: 21 }), h('line', { x1: 12, y1: 17, x2: 12, y2: 21 })]),
  rocket: () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }), h('path', { d: 'M2 17l10 5 10-5M2 12l10 5 10-5' })]),
  consult: () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })]),
  shield: () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]),
  mobile: () => h('svg', { viewBox: '0 0 24 24' }, [h('rect', { x: 5, y: 2, width: 14, height: 20, rx: 2 }), h('line', { x1: 12, y1: 18, x2: '12.01', y2: 18 })]),
  cloud: () => h('svg', { viewBox: '0 0 24 24' }, [h('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })]),
}
</script>