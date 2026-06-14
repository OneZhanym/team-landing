<template>
  <section class="py-24 px-6 lg:px-[60px] bg-[#0F0E2A]">
    <div class="max-w-container mx-auto">

      <div class="text-center max-w-[620px] mx-auto mb-14">
        <div class="flex items-center justify-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-[#a78bfa]"></div>
          <div class="text-xs font-bold tracking-[2px] uppercase text-[#a78bfa]">Методология</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-white mb-3.5">
          Наш подход к сотрудничеству
        </h2>
        <p class="text-base text-white/50 leading-[1.75]">
          Прозрачный процесс аутстаффинга: от первого знакомства до успешной интеграции IT-специалистов в вашу команду.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        
        
        <div
  v-for="step in methodology"
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
import { h } from 'vue'
import { methodology as baseMethodology } from '~/data/content'

// Иконки для каждого шага (rgba(0,0,0,0.5) stroke)
const iconAttrs = { viewBox: '0 0 24 24', fill: 'none', stroke: 'rgba(0,0,0,0.5)', 'stroke-width': '2', class: 'w-3.5 h-3.5' }

const icons = [
  () => h('svg', iconAttrs, [h('circle', { cx: 11, cy: 11, r: 8 }), h('path', { d: 'm21 21-4.35-4.35' })]),
  () => h('svg', iconAttrs, [h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), h('circle', { cx: 9, cy: 7, r: 4 })]),
  () => h('svg', iconAttrs, [h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }), h('path', { d: 'M2 17l10 5 10-5M2 12l10 5 10-5' })]),
  () => h('svg', iconAttrs, [h('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' })]),
]

const methodology = baseMethodology.map((step, i) => ({
  ...step,
  iconComponent: icons[i],
}))
</script>