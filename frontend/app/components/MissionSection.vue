<template>
  <section id="mission" class="py-24 px-6 lg:px-[60px]">
    <div class="max-w-container mx-auto grid lg:grid-cols-2 gap-20 items-center">

      <!-- Left: text + why-cards -->
      <div>
        <div class="flex items-center gap-2.5 mb-3.5">
          <div class="w-2 h-2 rounded-full bg-red"></div>
          <div class="text-xs font-bold text-red tracking-[2px] uppercase">Миссия</div>
        </div>
        <h2 class="font-heading font-extrabold text-[clamp(28px,3.5vw,44px)] tracking-[-1.5px] leading-[1.1] text-ink mb-3.5">
          Почему мы?
        </h2>
        <p class="text-base text-ink-3 leading-[1.75]">
          [Описание миссии — прибыль от IT-услуг направляется на поддержку медицинской клиники фонда.]
        </p>

        <div class="grid sm:grid-cols-2 gap-3.5 mt-9">
          <div
            v-for="item in whyUs"
            :key="item.id"
            class="bg-white border border-border rounded-xl3 p-5 transition-all hover:border-blue-mid hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
          >
            <div class="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center mb-3" :class="item.accent === 'red' ? 'bg-red-soft' : 'bg-blue-soft'">
              <component :is="icons[item.icon]" class="w-[18px] h-[18px] fill-none" :class="item.accent === 'red' ? 'stroke-red' : 'stroke-blue'" stroke-width="1.5" />
            </div>
            <div class="font-heading text-sm font-bold text-ink mb-1.5">{{ item.title }}</div>
            <div class="text-xs text-ink-3 leading-[1.6]">{{ item.description }}</div>
          </div>
        </div>
      </div>

      <!-- Right: mission visual -->
      <div class="relative bg-white border border-border rounded-xl4 p-9 overflow-hidden shadow-card">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red-light to-[#f87171]"></div>

        <div class="inline-flex items-center gap-2 bg-red-soft border border-red-mid rounded-[10px] px-3.5 py-1.5 text-[13px] font-bold text-red mb-5">
          — Социальная миссия
        </div>

        <div class="font-heading font-black text-[64px] tracking-[-2px] leading-none mb-1.5">
          <span class="text-red">[N]%</span>
        </div>
        <div class="text-sm text-ink-3 mb-5">дохода направляется в клинику фонда</div>

        <div class="bg-surface-alt rounded-full h-2.5 overflow-hidden mb-2">
          <div class="h-full bg-gradient-to-r from-red to-red-light rounded-full" style="width: 70%"></div>
        </div>
        <div class="flex justify-between text-xs text-ink-4">
          <span>Направлено в этом году</span>
          <span class="text-red font-bold">[сумма]</span>
        </div>

        <hr class="border-border my-6">

        <div class="text-[11px] text-ink-4 tracking-[1.5px] uppercase font-semibold mb-1.5">Наш фонд</div>
        <div class="font-heading text-base font-bold text-ink">[Название фонда]</div>
        <div class="text-[13px] text-ink-3 mt-1">[Краткое описание фонда]</div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { whyUs } from '~/data/content'

const icons = {
  target: () => h('svg', { viewBox: '0 0 24 24' }, [h('circle', { cx: 12, cy: 12, r: 3 }), h('path', { d: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12' })]),
  heart: () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z' })]),
  bolt: () => h('svg', { viewBox: '0 0 24 24' }, [h('polyline', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })]),
  briefcase: () => h('svg', { viewBox: '0 0 24 24' }, [h('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }), h('rect', { x: 8, y: 2, width: 8, height: 4, rx: 1 })]),
}
</script>
